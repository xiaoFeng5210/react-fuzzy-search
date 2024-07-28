import './index.css'

interface SearchPanelProps {
  loading: boolean
  options: { value: string, label: string }[]
}
function SearchPanel({ loading, options }: SearchPanelProps) {
  if (loading) {
    return (
      <div className="results-paper inline-flex justify-center items-center">
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div className="results-paper">
      <ul className="results-list">
        {/* <li className="result-item">Result 1</li> */}
        {/* <li className="result-item">Result 2</li> */}
        {/* <li className="result-item">Result 3</li> */}
        {/* <li className="result-item">Result 4</li> */}

        {Array.isArray(options) && options.map((option, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index} className="result-item">{option.label}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchPanel
