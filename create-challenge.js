const fs = require("fs");
const path = require("path");

// Function to create a new challenge
function createChallenge(challengeName) {
    if (!challengeName) {
        console.error("❌ Please provide a challenge name.");
        process.exit(1);
    }

    // Format the folder name: Replace spaces with hyphens
    const folderName = challengeName.trim().toLowerCase().replace(/\s+/g, "-");

    // Define the folder path
    const folderPath = path.join(__dirname, "challenges", folderName);

    // Check if the folder already exists
    if (fs.existsSync(folderPath)) {
        console.error(`❌ Challenge "${folderName}" already exists.`);
        process.exit(1);
    }

    // Create the folder
    fs.mkdirSync(folderPath, { recursive: true });

    // Create `index.js` file
    const indexFileContent = `/**
 * @param {any[]} args
 * @return {any}
 */
var functionName = function(...args) {
    // Your implementation here
};
    
module.exports = functionName;
`;
    fs.writeFileSync(path.join(folderPath, "index.js"), indexFileContent);

    // Create `test.js` file
    const testFileContent = `const functionName = require("./index");

test("${challengeName}", () => {
    const args = [];
    const expected = null; // Replace with expected result
    expect(functionName(...args)).toBe(expected);
});
`;
    fs.writeFileSync(path.join(folderPath, "test.js"), testFileContent);

    // Create `README.md` file
    const readmeContent = `# ${challengeName}

## Problem Description
Provide the problem description here.

## Examples
Add example test cases here.

---
`;
    fs.writeFileSync(path.join(folderPath, "README.md"), readmeContent);

    console.log(`✅ Challenge "${folderName}" created successfully in "challenges/${folderName}".`);
}

// Get the challenge name from the command line arguments
const challengeName = process.argv.slice(2).join(" ");
createChallenge(challengeName);
