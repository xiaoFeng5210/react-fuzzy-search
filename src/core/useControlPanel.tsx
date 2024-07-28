import { useState } from 'react'

export default () => {
  const [panelControl, setPanelControl] = useState({
    showPanel: false,
    showLoading: false,
    searchResults: [],
  })

  return {
    panelControl,
    setPanelControl,
  }
}
