"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSnippets = void 0;
const fs_1 = require("fs");
const helpers_1 = require("./helpers");
const components_1 = __importDefault(require("./sourceSnippets/components"));
const console_1 = __importDefault(require("./sourceSnippets/console"));
const hooks_1 = __importDefault(require("./sourceSnippets/hooks"));
const imports_1 = __importDefault(require("./sourceSnippets/imports"));
const others_1 = __importDefault(require("./sourceSnippets/others"));
const propTypes_1 = __importDefault(require("./sourceSnippets/propTypes"));
const reactNative_1 = __importDefault(require("./sourceSnippets/reactNative"));
const redux_1 = __importDefault(require("./sourceSnippets/redux"));
const tests_1 = __importDefault(require("./sourceSnippets/tests"));
const typescript_1 = __importDefault(require("./sourceSnippets/typescript"));
const getSnippets = () => {
    const { typescript, languageScopes } = (0, helpers_1.extensionConfig)();
    const snippets = [
        ...(typescript ? typescript_1.default : []),
        ...components_1.default,
        ...console_1.default,
        ...hooks_1.default,
        ...imports_1.default,
        ...propTypes_1.default,
        ...reactNative_1.default,
        ...redux_1.default,
        ...tests_1.default,
        ...others_1.default,
    ].reduce((acc, snippet) => {
        acc[snippet.key] = Object.assign(snippet, {
            body: (0, helpers_1.parseSnippetToBody)(snippet),
            scope: languageScopes,
        });
        return acc;
    }, {});
    return (0, helpers_1.replaceSnippetPlaceholders)(JSON.stringify(snippets, null, 2));
};
const generateSnippets = () => new Promise((resolve) => {
    const jsonSnippets = getSnippets();
    (0, fs_1.writeFile)(__dirname + '/snippets/generated.json', jsonSnippets, (error) => {
        if (error) {
            console.error(error);
        }
        return resolve(true);
    });
});
exports.generateSnippets = generateSnippets;
//# sourceMappingURL=generateSnippets.js.map