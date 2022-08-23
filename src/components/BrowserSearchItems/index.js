import './index.css'

const BrowserSearchItems = props => {
  const {historyDetails, onChangingInput} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onClickingDeleteIcon = () => {
    onChangingInput(id)
  }

  return (
    <li className="list-item">
      <p className="timeAccessed">{timeAccessed}</p>
      <div>
        <img src={logoUrl} alt="domain logo" />
      </div>

      <p className="timeAccessed">{title}</p>
      <p className="url">{domainUrl}</p>

      <div className="button-container">
        <button type="button" className="button1" testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
            onClick={onClickingDeleteIcon}
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserSearchItems
