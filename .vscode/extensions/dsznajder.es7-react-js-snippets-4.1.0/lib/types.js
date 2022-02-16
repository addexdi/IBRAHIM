"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mappings = exports.Placeholders = void 0;
exports.Placeholders = {
    FileName: 'FILE_NAME',
    FirstTab: 'FIRST_TAB',
    SecondTab: 'SECOND_TAB',
    ThirdTab: 'THIRD_TAB',
    LastTab: 'LAST_TAB',
    Capitalize: 'CAPITALIZE',
    TypeProps: 'TYPE_PROPS',
    TypeState: 'TYPE_STATE',
};
exports.Mappings = {
    FileName: '${1:${TM_FILENAME_BASE}}',
    FirstTab: '${1:first}',
    SecondTab: '${2:second}',
    ThirdTab: '${3:third}',
    LastTab: '$0',
    Capitalize: '${1/(.*)/${1:/capitalize}/}',
    TypeProps: 'type Props = {}',
    TypeState: 'type State = {}',
    InterfaceProps: 'interface Props {}',
    InterfaceState: 'interface State {}',
};
//# sourceMappingURL=types.js.map