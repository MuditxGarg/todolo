const fs = require("fs");
const yaml = require("yaml");

function loadConfig() {
  try {
    const configPath = "/tmp/config/config.yaml";
    const config = yaml.parse(fs.readFileSync(configPath, "utf8"));
    return config;
  } catch (e) {
    throw new Error("Error loading configuration: " + e);
  }
}

module.exports = loadConfig;
