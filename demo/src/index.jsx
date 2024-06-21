import { createRoot } from 'react-dom/client'
// 引入组件
import { useState } from 'react'
import FuzzySearchInput from '../../src'

function App() {
  const [testValue, setTestValue] = useState('')
  return (
    <div className="container">
      <FuzzySearchInput value={testValue} onChange={e => setTestValue(e)} />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

export default App
