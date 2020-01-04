const fs = require('fs');
const path = require('path');

const DIRECTORY = '/Users/srialla/srinath/codebase/SendTimeOptimization';
const DOT_JAVA = '.java';
const JAVA = 'java';
const TESTS_BASE_PATH = path.join("src", "test", "java");
const DOT = '.';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
};

walkDir(DIRECTORY, filePath => {
    const isJavaFile = path.extname(filePath).toLowerCase() === DOT_JAVA;
    const isTestFile = filePath.indexOf(TESTS_BASE_PATH) >= 0;

    if (isJavaFile && isTestFile) {

        filePath = filePath.substring(filePath.indexOf(TESTS_BASE_PATH) + TESTS_BASE_PATH.length + 1);

        filePath = filePath.split(path.sep).join(DOT);
        console.log(filePath);
    }
});