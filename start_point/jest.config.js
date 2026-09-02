module.exports = {
  transform: {
    // isolatedModules tells ts-jest to compile each file on its own and skip
    // type-checking. Your types are still checked: cyber-dojo.sh runs
    // [tsc --noEmit] first and stops there when anything fails to type-check,
    // so without this the whole check simply happened twice.
    "^.+\\.tsx?$": ["ts-jest", { isolatedModules: true }],
  },
  testEnvironment: "node",
  testRegex: ".*test\\.(t|j)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
