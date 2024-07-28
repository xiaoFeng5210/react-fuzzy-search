import { createRoot } from 'react-dom/client'
// 引入组件
import { useState } from 'react'
import FuzzySearchInput from '../../src'

const testOptions = [
  { value: '1', label: 'Result1' },
  { value: '2', label: 'Result2' },
  { value: '3', label: 'Result3' },
  { value: '4', label: 'Result4' },
  { value: '5', label: 'Result5' },
  { value: '6', label: 'Result6' },
  { value: '7', label: 'Result7' },
  { value: '8', label: 'Result8' },
  { value: '9', label: 'Result9' },
]
function App() {
  const [testValue, setTestValue] = useState('')
  return (
    <div className="container">
      <FuzzySearchInput value={testValue} onChange={e => setTestValue(e)} data={testOptions} />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

export default App
