"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const generateSnippets_1 = require("./generateSnippets");
const snippetSearch_1 = __importDefault(require("./snippetSearch"));
const showRestartMessage = async ({ affectsConfiguration, }) => {
    if (affectsConfiguration('reactSnippets')) {
        await (0, generateSnippets_1.generateSnippets)();
        setTimeout(() => {
            vscode_1.window
                .showWarningMessage('React Snippets: Please restart VS Code to apply snippet formatting changes', 'Restart VS Code', 'Ignore')
                .then((action) => {
                if (action === 'Restart VS Code') {
                    vscode_1.commands.executeCommand('workbench.action.reloadWindow');
                }
            });
        }, 1000);
    }
};
async function activate(context) {
    vscode_1.workspace.onDidChangeConfiguration(showRestartMessage);
    const snippetSearchCommand = vscode_1.commands.registerCommand('reactSnippets.search', snippetSearch_1.default);
    context.subscriptions.push(snippetSearchCommand);
    await (0, generateSnippets_1.generateSnippets)();
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=index.js.map