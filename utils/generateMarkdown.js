// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
${data.install}
  ## Usage
${data.usage}
  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./assets/code_of_conduct.md)
  ## Tests
${data.tests}
  ## Questions?
  Send me an email here ${data.email} or, click this link to access my GitHub profile https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;