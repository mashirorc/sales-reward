import './App.css';
import getRewardDetail from './API/mockAPI'
import { useEffect, useState } from 'react';

function App() {


  let [janReward, setJanReward] = useState(null)
  let [febReward, setFebReward] = useState(null)
  let [marReward, setMarReward] = useState(null)
  let [totalReward, setTotalReward] = useState(null)
  let [currentCustormer, setCurrentCustomer] = useState("")
  let [searchText, setSearchText] = useState("")

  const handleInput = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchText.trim() === "") {
      return;
    } else {
      setCurrentCustomer(searchText)
      getReward(searchText)
    }
  }

  async function getReward(customer) {
    let tempJanReward = await getRewardDetail(customer, 0)
    let tempFebReward = await getRewardDetail(customer, 1)
    let tempMarReward = await getRewardDetail(customer, 2)
    setJanReward(tempJanReward)
    setFebReward(tempFebReward)
    setMarReward(tempMarReward)
  }

  useEffect(() => {
    if (janReward === null) {
      setTotalReward(null)
    } else {
      setTotalReward(janReward + febReward + marReward)
    }
  }, [janReward, febReward, marReward])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <input value={searchText} onChange={handleInput}/>
          <input type="submit"/>
      </form>
      <table>
        
        <thead>
          <tr>
            <th>Customer</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentCustormer}</td>
            <td>{janReward}</td>
            <td>{febReward}</td>
            <td>{marReward}</td>
            <td>{totalReward}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
