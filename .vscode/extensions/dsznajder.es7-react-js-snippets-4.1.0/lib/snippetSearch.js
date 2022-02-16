"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const helpers_1 = require("./helpers");
const generated_json_1 = __importDefault(require("./snippets/generated.json"));
const snippetSearch = async () => {
    const { showQuickPick, activeTextEditor } = vscode_1.window;
    const snippetsArray = Object.entries(generated_json_1.default);
    const items = snippetsArray.map(([shortDescription, { body, description, prefix: label }]) => ({
        body,
        description: description || shortDescription,
        label,
    }));
    const rawSnippet = await showQuickPick(items, {
        matchOnDescription: true,
        matchOnDetail: true,
        placeHolder: 'Search snippet by prefix or description',
    });
    const body = rawSnippet ? (0, helpers_1.parseSnippet)(rawSnippet.body) : '';
    if (activeTextEditor) {
        activeTextEditor.insertSnippet(new vscode_1.SnippetString(body));
    }
};
exports.default = snippetSearch;
//# sourceMappingURL=snippetSearch.js.map