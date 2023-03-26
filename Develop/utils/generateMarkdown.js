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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
