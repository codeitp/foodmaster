import { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./", //Path to load next.config.mjs
});
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom", // need jsdom to import react component from nextjs app
};

export default createJestConfig(config);
