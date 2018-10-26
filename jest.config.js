module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "."],
  moduleNameMapper: {
    "^assets/(?:(?!.*.svg).)*$":
      "<rootDir>/src/client/tests/fileTransformer.js",
    "^app/(.*)$": "<rootDir>/src/client/app/$1"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.tsx?$": "babel-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/src/client/tests/setup.ts",
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/custom-types/",
    "/tests/",
    "/src/client/index.tsx",
    "/src/server/index.ts"
  ]
};
