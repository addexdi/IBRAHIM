"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitPush = void 0;
const vscode = __importStar(require("vscode"));
var exec = require('child_process').exec;
const gitpath = vscode.workspace.getConfiguration('git').get('path') || 'git';
function gitPush(term, statBar) {
    return new Promise((resolve, reject) => {
        term.show(true);
        term.appendLine("Git Push Progress Initiated...\n");
        statBar.text = "Push Progress Initiated";
        statBar.show();
        let dir = vscode.workspace.workspaceFolders[0].uri.fsPath;
        console.log("Workspace: " + dir);
        console.log("Spawning child process in workspace");
        let child = exec('cd "' + dir + '" && ' + gitpath + " push --progress");
        console.log("Child spawned");
        let output = "";
        child.stdout.setEncoding('utf8');
        child.stdout.on("data", (data) => {
            term.appendLine(data);
            data = data.toString();
            output += data;
            if (data.includes("Counting") || data.includes("Compressing") || data.includes("Writing") || data.includes("remote: Resolving deltas")) {
                statBar.text = data;
            }
        });
        child.stderr.setEncoding('utf8');
        child.stderr.on("data", (data) => {
            term.appendLine(data);
            data = data.toString();
            output += data;
            if (data.includes("Counting") || data.includes("Compressing") || data.includes("Writing") || data.includes("remote: Resolving deltas")) {
                statBar.text = data;
            }
        });
        child.on("close", (code) => {
            statBar.hide();
            statBar.text = '';
            console.log("Child spawn finished executing command");
            console.log("Closing code: " + code);
            if (code != '0') {
                reject("Push Progress failed with closing code: " + code);
            }
            resolve(output);
        });
    });
}
exports.gitPush = gitPush;
//# sourceMappingURL=pushProgressResolver.js.map