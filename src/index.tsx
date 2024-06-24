import './index.css'
import { FC } from 'react'
import SearchPanel from './components/search-panel'
import useControlPanel from './core/useControlPanel'

interface FuzzySearchInputProps {
  placeholder?: string
  styles?: {}
  value: any
  onChange: (e: any) => void
}

const FuzzySearchInput: FC<FuzzySearchInputProps> = ({ value, onChange, placeholder = 'Search...' }) => {
  const { panelControl, setPanelControl } = useControlPanel()
  const changeInput = (text: any) => {
    if (!panelControl.showPanel) {
      setPanelControl({ ...panelControl, showPanel: true })
    }
    if (!text) {
      setPanelControl({ ...panelControl, showPanel: false })
    }
    onChange(text)
  }
  const focusInput = () => {
    if (value) {
      setPanelControl({ ...panelControl, showPanel: true })
    }
  }
  const blurInput = () => {
    setPanelControl({ ...panelControl, showPanel: false })
  }
  return (
    <div className="search_input_layout">
      <input type="text" className="search-input" placeholder={placeholder} value={value} onBlur={blurInput} onFocus={() => focusInput()} onChange={e => changeInput(e.target.value)} />
      {
        panelControl.showPanel && <SearchPanel />
      }
    </div>
  )
}

export default FuzzySearchInput
