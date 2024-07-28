import './index.css'
import { FC, useRef } from 'react'
import SearchPanel from './components/search-panel'
import useControlPanel from './core/useControlPanel'

interface FuzzySearchInputProps {
  placeholder?: string
  styles?: {}
  value: any
  onChange: (e: any) => void
  debounceTime?: number
  data: { value: string, label: string }[]
}

const FuzzySearchInput: FC<FuzzySearchInputProps> = ({ value, onChange, placeholder = 'Search...', data, debounceTime = 300 }) => {
  const { panelControl, setPanelControl } = useControlPanel()
  // eslint-disable-next-line no-undef
  const debounceTimerRef = useRef<NodeJS.Timeout>()

  const handleInputChange = async (text: string) => {
    // TODO: 处理逻辑
    setPanelControl({ ...panelControl, showLoading: false })
    if (!text) {
      setPanelControl({ ...panelControl, showPanel: false })
    }
    onChange(text)
  }
  const changeInput = (text: string) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
      debounceTimerRef.current = undefined
    }
    if (!panelControl.showPanel || !panelControl.showLoading) {
      setPanelControl({ ...panelControl, showPanel: true, showLoading: true })
    }
    debounceTimerRef.current = setTimeout(async () => {
      debounceTimerRef.current = undefined
      await handleInputChange(text)
    }, debounceTime)
  }
  const focusInput = () => {
    if (value) {
      setPanelControl({ ...panelControl, showPanel: true, showLoading: false })
    }
  }
  const blurInput = () => {
    setPanelControl({ ...panelControl, showPanel: false, showLoading: false })
  }
  return (
    <div className="search_input_layout">
      <input type="text" className="search-input" placeholder={placeholder} value={value} onBlur={blurInput} onFocus={() => focusInput()} onChange={e => changeInput(e.target.value)} />
      {
        panelControl.showPanel && <SearchPanel loading={panelControl.showLoading} options={data} />
      }
    </div>
  )
}

export default FuzzySearchInput
