var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.css';
function SearchPanel() {
    return (_jsx("div", __assign({ className: "results-paper" }, { children: _jsxs("ul", __assign({ className: "results-list" }, { children: [_jsx("li", __assign({ className: "result-item" }, { children: "Result 1" })), _jsx("li", __assign({ className: "result-item" }, { children: "Result 2" })), _jsx("li", __assign({ className: "result-item" }, { children: "Result 3" })), _jsx("li", __assign({ className: "result-item" }, { children: "Result 4" }))] })) })));
}
export default SearchPanel;
//# sourceMappingURL=search-panel.js.map