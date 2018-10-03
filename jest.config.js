module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "."],
  moduleNameMapper: {
    "\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    "^public/(.*)$": "<rootDir>/src/tests/fileTransformer.js",
    "^app/(.*)$": "<rootDir>/src/app/$1"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/src/tests/setup.ts",
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  collectCoverageFrom: ["src/app/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "/custom-types/", "/tests/"]
};
