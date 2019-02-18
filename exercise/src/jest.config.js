module.exports = {
    collectCoverageFrom: ['./components/*.{js,jsx}', '!**/node_modules/**'],
    setupTestFrameworkScriptFile: './configs/enzyme',
    testPathIgnorePatterns: ['<rootDir>/(build|config|node_modules)/']
}
