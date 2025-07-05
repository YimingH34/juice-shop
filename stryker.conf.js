// // @ts-check
// /** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
// const config = {
//   _comment:
//     "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
//   packageManager: "npm",
//   reporters: ["html", "clear-text", "progress"],
//   testRunner: "karma",
//   testRunner_comment:
//     "Take a look at https://stryker-mutator.io/docs/stryker-js/karma-runner for information about the karma plugin.",
//   coverageAnalysis: "perTest",
//   karma: {
//     projectType: "custom",
//     configFile: "karma.conf.js",
//     config: {},
//   },
// };
// export default config;


/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: ['frontend/src/app/login/login.component.ts'],
  testRunner: 'jest',
  jest: {
    projectType: 'custom', // use custom if configured in package.json
  },
  tsconfigFile: 'frontend/src/tsconfig.spec.json',
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'off',
  disableTypeChecks: true,
  ignorePatterns: ['**/*.d.ts', 'node_modules/**/*'],
  symlinkNodeModules: false
};
