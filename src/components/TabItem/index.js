// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem} = props
  const {displayText} = tabItem

  return (
    <li>
      <p>{displayText}</p>
    </li>
  )
}

export default TabItem
