# jest cannot use ts-jest when installed globally.
# npm packages are in /etc/ts/
# We have to create a local symlink.
ln -s /etc/ts/node_modules ${CYBER_DOJO_SANDBOX}/node_modules

function cyber_dojo_exit()
{
  # Ensure the symlink is removed.
  unlink ${CYBER_DOJO_SANDBOX}/node_modules
}
trap cyber_dojo_exit EXIT SIGTERM

# Calling [npm run ...] is sloooow so don't do that.

# tsc reads your code and jest runs it, so neither needs the other to have
# finished and they start together. Each is a fresh node process, which is
# most of what they cost.
# HELD is on /tmp, which the exit trap never walks, so nothing here comes back
# as a file.
readonly HELD=$(mktemp -d)

# Each tool's two streams are held apart. The traffic-light lambda is handed
# stdout and stderr separately, so a byte that moved from one to the other
# could change the colour.
node_modules/.bin/tsc --noEmit > ${HELD}/tsc 2> ${HELD}/tsc.err &
readonly TSC_PID=$!

#Uncomment this line to enable linting.
#Note: this will slow down the test.
#node_modules/.bin/eslint --fix **/*.ts

# Run the test files here, in this process, rather than in workers jest starts
# for them. Starting a worker costs more than a kata's test files take to run,
# and one process prints one summary covering every file.
node_modules/.bin/jest --runInBand > ${HELD}/tests 2> ${HELD}/tests.err &
readonly TESTS_PID=$!

# Types that do not add up still end the run here, before any test output,
# because tests run against code that does not compile tell you nothing.
# jest is left unwaited for: this script is the container's last word, so
# exiting abandons it.
wait ${TSC_PID} || TSC_FAILED=1
cat ${HELD}/tsc
cat ${HELD}/tsc.err >&2
if [ -n "${TSC_FAILED:-}" ]; then
  exit 42
fi

wait ${TESTS_PID} || TESTS_STATUS=$?
cat ${HELD}/tests
cat ${HELD}/tests.err >&2
exit ${TESTS_STATUS:-0}
