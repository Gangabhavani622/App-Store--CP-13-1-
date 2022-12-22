// Write your code here
const TabItem = props => {
  const {tabItem, updateTabId, isActive} = props
  const {tabId, displayText} = tabItem

  const isActiveBtn = isActive ? 'active-tab-btn' : ''

  const onClickButton = () => {
    updateTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${isActiveBtn}`}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
