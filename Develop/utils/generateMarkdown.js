/* 
  returns a badge based on which license is passed in
  if there is none, then return a empty string
*/ 
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-green)`;
}

/* 
  returns the license link
  If there is none then return a empty string 
*/
function renderLicenseLink(license) {
  if(!license){
    return '';
  }
  return `https://opensource.org/licenses/${license}`;
}

/*
  this returns the license section of readme
  if there isn't one then return an empty string
*/
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
  return `  ## License

  This is under the [${license}](${renderLicenseLink(license)}) license.`;
}


// this function generates the README by inputing the key value pairs from index.js questions array
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributing)
  - [Tests](#tests)
  - [${data.license ? 'License' : 'Contributing'}](${data.license ? '#license' : '#contributing'})
  - [Questions](#questions)

  
  ## Installation
  
  ${data.installation}

  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  
  ## Contributing
  
  ${data.contributing}

  
  ## Tests
  
  ${data.tests}

  
  ## Questions
  
  For additional questions or feedback, please contact [${data.github}](${data.profileUrl}) at ${data.email}.
  `;
}

module.exports = generateMarkdown;
