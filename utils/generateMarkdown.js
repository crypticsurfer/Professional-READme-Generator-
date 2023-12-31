// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "No License") {
        return `![Github Liscense](https://img.shields.io/badge/license-${license}-green.svg)`
    }
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "No License") {
        return `No License`
      }
      if (license === "MIT") {
        return `* [License](https://opensource.org/license/mit/)`
      }
      if (license === "APACHE 2.0") {
        return `* [License](https://www.apache.org/licenses/LICENSE-2.0)`
      }
      if (license === "GPL 3.0") {
        return `* [License](https://www.gnu.org/licenses/gpl-3.0.en.html)`
      }
      return ""
    
    }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
        if (license !== "No License") {
          return `This app was licensed under ${license} license`
        }
        return ""
    }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}
  ${renderLicenseBadge(data.license)}
  ## Description
${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions?](#questions)
  ## Installation
${data.installation}
  ## Usage
${data.usage}
  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./assets/code_of_conduct.md)
  ## Tests
${data.testing}
  ## Questions?
  Send me an email here ${data.email} or, click this link to access my GitHub profile https://github.com/${data.github_username}
`;
}

module.exports = generateMarkdown;