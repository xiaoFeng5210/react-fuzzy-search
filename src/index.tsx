import './index.css'
import { FC } from 'react'
import SearchPanel from './components/search-panel'

interface FuzzySearchInputProps {
  placeholder?: string
  styles?: {}
  value: any
  onChange: (e: any) => void
}

const FuzzySearchInput: FC<FuzzySearchInputProps> = ({ value, onChange, placeholder = 'Search...' }) => {
  const changeInput = (text: any) => {
    onChange(text)
  }
  return (
    <div className="search_input_layout">
      <input type="text" className="search-input" placeholder={placeholder} value={value} onChange={e => changeInput(e.target.value)} />
      <SearchPanel />
    </div>
  )
}

export default FuzzySearchInput
