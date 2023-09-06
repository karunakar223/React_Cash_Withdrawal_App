// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  balanceDetailsUpdate = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const slicedVal = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="withdrawal-container">
          <div className="details-con">
            <div className="start-con">
              <p className="slice">{slicedVal}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-con">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="rupee">In Rupee</span>
            </p>
          </div>
          <p className="withdrawal">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                detailsList={eachItem}
                balanceDetailsUpdate={this.balanceDetailsUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
