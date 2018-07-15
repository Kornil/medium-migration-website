module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "."],
  setupFiles: ["<rootDir>/src/tests/setup.ts"],
  moduleNameMapper: {
    "\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    "^public/(.*)$": "<rootDir>/src/tests/fileTransformer.js",
    "^app/(.*)$": "<rootDir>/src/app/$1"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/src/tests/setup.ts",
  collectCoverage: true,
  coverageReporters: ["none"],
  coverageDirectory: "./coverage/",
  collectCoverageFrom: ["**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "/custom-types/"],
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json",
      useBabelrc: true
    }
  }
};
