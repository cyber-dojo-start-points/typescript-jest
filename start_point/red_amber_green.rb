
lambda { |stdout,stderr,status|
  if status === 0
    return :green
  end
  output = stdout + stderr
  if output.include?('Test suite failed to run')
    :amber
  elsif /^FAIL/.match(output)
    :red
  elsif /^PASS/.match(output)
    :green
  else
    :amber
  end
}
