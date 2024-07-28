import { useState } from 'react'

export default () => {
  const [panelControl, setPanelControl] = useState<{
    showPanel: boolean
    showLoading: boolean
    searchResults: { value: string, label: string }[]
  }>({
    showPanel: false,
    showLoading: false,
    searchResults: [],
  })

  return {
    panelControl,
    setPanelControl,
  }
}
