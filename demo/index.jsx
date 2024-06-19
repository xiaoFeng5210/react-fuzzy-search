import { createRoot } from 'react-dom/client'
// 引入组件
import './index.scss'
import FuzzySearchInput from '../src'

function App() {
  return (
    <div className="container">
      <FuzzySearchInput />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
