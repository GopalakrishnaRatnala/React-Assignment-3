import './index.css'

const TabItem = props => {
  const {eachTab, changeTabId, isActive} = props
  const {tabId, displayText} = eachTab
  const activeTabIdClassName = isActive ? 'activeTabId' : ''
  const selectTab = () => {
    changeTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${activeTabIdClassName}`}
        onClick={selectTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
