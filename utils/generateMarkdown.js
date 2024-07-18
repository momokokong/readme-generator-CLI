// function renderLicenseBadge(license)
// return the license badge of user's choice in markdown
// parameter:
//   license: string, the user's choice of license
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
      // default should never happen.  Added just for fun.
    default:
      return "How did you get here? License badge";
  }
}

// function renderLicenseLink(license)
// return a hyperlink to the license of user's choice in markdown
// parameter:
//   license: string, the user's choice of license
function renderLicenseLink(license) {
  switch (license) {
    case "WTFPL":
      return "[License: WTFPL](http://www.wtfpl.net/about/)";
    case "MIT":
      return "[License: MIT](https://opensource.org/licenses/MIT)";
    case "BSD 3-Clause":
      return "[License: BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)";
    case "CC0":
      return "[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "GNU GPL v3":
      return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
    case "No license":
      return "";
      // default should never happen.  Added just for fun.
    default:
      return "How did you get here? License link";
  }
}

// function renderLicenseSection(license)
// return a string that contains the content of the license section
// parameter:
//   license: string, the user's choice of license
function renderLicenseSection(license) {
  if (license === "No license") return "\n\n## License\nNo license so far. Contact me for any questions.";
  return "\n\n## License\nThis project adopts " + license + " license practices. Check the website for license details: " + renderLicenseLink(license);  
}

// function renderGitHubLink(username)
// return string content to the user's GitHub profile in markdown
// parameter:
//   username: string, username entered by the user
function renderGitHubLink(username) {
  return "[" + username + "'s GitHub profile.](https://github.com/" + username + ")";
}

// function renderEmailLink(email)
// return string content containing the user's email in markdown
// parameter:
//   email: string, email entered by the user
function renderEmailLink(email) {
  return "[Contact me at " + email + "](mailto:" + email + ")";
}

// function renderQuestionsSection (username, email)
// return string content containing GitHub profile and email contact info
// parameter:
//   username: string, username entered by the user
//   email: string, email entered by the user
function renderQuestionsSection (username, email) {
  return "\n\n## Questions\n" + renderGitHubLink(username) + "\n\n" + renderEmailLink(email);
}

// function renderTitleSection (title, license)
// return string content for the title section containing the license label
// parameter:
//   title: string, project title entered by the user
//   license: string, the user's choice of license
function renderTitleSection (title, license) {
  return "# " + title + "\n" + renderLicenseBadge(license);
}

// function renderCommonSection(secTitle, content)
// return string content for the common sections in markdown
// parameter:
//   secTitle: string, title of the section
//   content: string, the content of the section entered by the user
function renderCommonSection(secTitle, content) {
  return "\n\n## " + secTitle + "\n" + content;
}

// function insertTableOfContent(title)
// generate and return the table of content
// parameter:
//   title: string, project title entered by the user
function insertTableOfContent(title) {
  return "\n\n## Table of content" + "\n- " + title + 
  "\n  - [Description](#Description)" +
  "\n  - [Installation](#Installation)" +
  "\n  - [Usage](#Usage)" +
  "\n  - [Contributing](#Contributing)" +
  "\n  - [Tests](#Tests)" +
  "\n  - [License](#License)" +
  "\n  - [Questions](#Questions)";
}

// function generateMarkdown(data)
// combine the rest of un-exposed functions to generate the string content of the README.md
// parameter:
//   data: object, containts user inputs for each section of the readme file
function generateMarkdown(data) {
  const {username, email, title, description, installation, usage, license, contributing, tests} = data;

  return renderTitleSection(title, license) + 
  insertTableOfContent(title) +
  renderCommonSection("Description" , description) + 
  renderCommonSection("Installation" , installation) + 
  renderCommonSection("Usage" , usage) +
  renderCommonSection("Contributing" , contributing) + 
  renderCommonSection("Tests" , tests) +
  renderLicenseSection(license) + 
  renderQuestionsSection(username, email);
}

// expose generateMarkdown() only given the rest of functions are only used by generateMarkdown()
module.exports = {
  generateMarkdown
};
