"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSnippetToBody = exports.parseSnippet = exports.revertSnippetPlaceholders = exports.replaceSnippetPlaceholders = exports.extensionConfig = void 0;
const prettier_1 = __importDefault(require("prettier"));
const vscode_1 = require("vscode");
const types_1 = require("./types");
let prettierConfig;
prettier_1.default
    .resolveConfig('', { editorconfig: true })
    .then((config) => (prettierConfig = config));
const extensionConfig = () => vscode_1.workspace.getConfiguration('reactSnippets.settings');
exports.extensionConfig = extensionConfig;
const getPrettierConfig = () => {
    const { semiColons, singleQuote, tabWidth, prettierEnabled } = (0, exports.extensionConfig)();
    return {
        parser: 'typescript',
        semi: semiColons,
        singleQuote,
        tabWidth,
        ...(prettierEnabled && prettierConfig),
    };
};
const formatSnippet = (string) => {
    const prettierConfig = getPrettierConfig();
    return prettier_1.default.format(string, prettierConfig);
};
const replaceSnippetPlaceholders = (snippetString) => {
    const { typescriptPropsStatePrefix } = (0, exports.extensionConfig)();
    const propsPlaceholder = typescriptPropsStatePrefix === 'type'
        ? types_1.Mappings.TypeProps
        : types_1.Mappings.InterfaceProps;
    const statePlaceholder = typescriptPropsStatePrefix === 'type'
        ? types_1.Mappings.TypeState
        : types_1.Mappings.InterfaceState;
    return String(snippetString)
        .replace(new RegExp(types_1.Placeholders.FileName, 'g'), '${1:${TM_FILENAME_BASE}}')
        .replace(new RegExp(types_1.Placeholders.FirstTab, 'g'), '${1:first}')
        .replace(new RegExp(types_1.Placeholders.SecondTab, 'g'), '${2:second}')
        .replace(new RegExp(types_1.Placeholders.ThirdTab, 'g'), '${3:third}')
        .replace(new RegExp(types_1.Placeholders.LastTab, 'g'), '$0')
        .replace(new RegExp(types_1.Placeholders.Capitalize, 'g'), '${1/(.*)/${1:/capitalize}/}')
        .replace(new RegExp(types_1.Placeholders.TypeProps, 'g'), propsPlaceholder)
        .replace(new RegExp(types_1.Placeholders.TypeState, 'g'), statePlaceholder);
};
exports.replaceSnippetPlaceholders = replaceSnippetPlaceholders;
const revertSnippetPlaceholders = (snippetString) => {
    return String(snippetString)
        .replace(new RegExp(/\${1:\${TM_FILENAME_BASE}}/, 'g'), types_1.Placeholders.FileName)
        .replace(new RegExp(/\${1:first}/, 'g'), types_1.Placeholders.FirstTab)
        .replace(new RegExp(/\${2:second}/, 'g'), types_1.Placeholders.SecondTab)
        .replace(new RegExp(/\${3:third}/, 'g'), types_1.Placeholders.ThirdTab)
        .replace(new RegExp(/\$0/, 'g'), types_1.Placeholders.LastTab)
        .replace(new RegExp(/\${1\/(.*)\/${1:\/capitalize}\/}/, 'g'), types_1.Placeholders.Capitalize);
};
exports.revertSnippetPlaceholders = revertSnippetPlaceholders;
const parseSnippet = (body) => {
    const snippetBody = typeof body === 'string' ? body : body.join('\n');
    return (0, exports.replaceSnippetPlaceholders)(formatSnippet((0, exports.revertSnippetPlaceholders)(snippetBody)));
};
exports.parseSnippet = parseSnippet;
// This is array of prefixes which are currently skipped because of syntax format issues
const skippedSnippets = [
    'pge',
    'pse',
    'gdsfp',
    'gsbu',
    'scu',
    'cwun',
    'cdm',
    'cdup',
    'rconst',
];
const withReactImport = [
    'rfce',
    'rfc',
    'rfcp',
    'rafce',
    'rafc',
    'rafcp',
    'rnfe',
    'rnfes',
    'rnf',
    'rnfs',
    'stest',
    'sntest',
    'srtest',
    'snrtest',
    'hocredux',
    'hoc',
];
const replaceOrRemoveReactImport = (snippetBody) => {
    const reactImportIndex = snippetBody.findIndex((line) => line.match(new RegExp(/import React/, 'g')));
    if (reactImportIndex !== -1) {
        const line = snippetBody[reactImportIndex];
        snippetBody[reactImportIndex] = line
            .replace(new RegExp(/^import React .*$/, 'g'), '')
            .replace(new RegExp(/^import React, /, 'g'), 'import ');
    }
    return snippetBody.join('\n');
};
const parseSnippetToBody = (snippet) => {
    const { importReactOnTop } = (0, exports.extensionConfig)();
    const body = typeof snippet.body === 'string' ? snippet.body : snippet.body.join('\n');
    const snippetBody = importReactOnTop
        ? body
        : withReactImport.includes(snippet.prefix)
            ? replaceOrRemoveReactImport(snippet.body)
            : body;
    const formattedSnippet = skippedSnippets.includes(snippet.prefix)
        ? snippetBody
        : formatSnippet(snippetBody).split('\n');
    return snippet.body.length === 1 ? formattedSnippet[0] : formattedSnippet;
};
exports.parseSnippetToBody = parseSnippetToBody;
//# sourceMappingURL=helpers.js.map