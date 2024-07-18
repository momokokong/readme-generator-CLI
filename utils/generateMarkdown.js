// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "WTFPL":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "CC0":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "No license":
      return "";
    default:
      return "How did you get here? License";
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license") return "";
  return "\n# License\nThis project adopts " + license + "license practices. "  
}

function renderGithubLink(username) {
  return "[" + username + "'s Github profile.](https://github.com/" + username + ")";
}

function renderEmailLink(email) {
  return "[Contact me at " + email + "](mailto:" + email + ")";
}

function renderQuestionsSection (username, email) {
  return "\n## Questions\n" + renderGithubLink(username) + "\n" + renderEmailLink(email);
}

// function 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown
};
