import './index.css'
import { useState } from 'react'

interface FuzzySearchInputProps {
  placeholder: string
  styles: {}
  value: any
  onChange: (e: any) => void
}

function FuzzySearchInput() {
  const [value, setValue] = useState('')
  return (
    <div className="search_input_layout">
      <input type="text" className="search-input" placeholder="Search..." value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default FuzzySearchInput
