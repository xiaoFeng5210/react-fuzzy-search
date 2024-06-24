import { useState } from 'react'

export default () => {
  const [panelControl, setPanelControl] = useState({
    showPanel: false,
    searchResults: [],
  })

  return {
    panelControl,
    setPanelControl,
  }
}
