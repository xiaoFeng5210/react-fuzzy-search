import './index.css'

interface SearchPanelProps {
  loading: boolean
  options: { value: string, label: string }[]
  filterOptions: { value: string, label: string }[]
}
function SearchPanel({ loading, filterOptions }: SearchPanelProps) {
  return (
    <div className="results-paper">
      {
        // eslint-disable-next-line style/multiline-ternary
        loading ? (
          <div className="w-full inline-flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )
          : (
            <ul className="results-list">
              {
              filterOptions.length > 0 && filterOptions.map((option, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index} className="result-item">{option.label}</li>
              ))
              }
            </ul>
            )

      }

    </div>
  )
}

export default SearchPanel
