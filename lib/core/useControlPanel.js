import { useState } from 'react';
export default (function () {
    var _a = useState({
        showPanel: false,
        searchResults: [],
    }), panelControl = _a[0], setPanelControl = _a[1];
    return {
        panelControl: panelControl,
        setPanelControl: setPanelControl,
    };
});
//# sourceMappingURL=useControlPanel.js.map