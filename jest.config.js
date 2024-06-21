/** @type {import('jest').Config} */
const config = {
  rootDir: "./",
  roots: ["./"],
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  setupFiles: [],
  setupFilesAfterEnv: [],
  testEnvironment: "jest-environment-node",
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "dist"],
  testRegex: [],
  transform: {
    "\\.(j|t)s$": "ts-jest",
  },
  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],
};

module.exports = config;
