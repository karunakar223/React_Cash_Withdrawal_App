// Write your code here
import './index.css'

const DenominationItem = props => {
  const {detailsList, balanceDetailsUpdate} = props
  const {value} = detailsList

  const onClickItem = () => {
    balanceDetailsUpdate(value)
  }

  return (
    <li className="denomination-item">
      <button type="button" onClick={onClickItem} className="btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
