
import './App.css'
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers"
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers"
import NavBar from "./components/NavBar/NavBar"
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json();
}
const playerPromise = fetchPlayers()

function App() {

  const [availableBalance, setAvailableBalance] = useState(4000000)

  const [toggle, setToggle] = useState(true)

  const [selectedPlayers, setSelectedPlayers] = useState([])
  const removePlayer = (p) => {
    // console.log(p)
    const filtereData = selectedPlayers.filter(ply => ply.playerName !== p.playerName)
    setSelectedPlayers(filtereData)
    //console.log(filtereData)
    setAvailableBalance(availableBalance + p.price)
  }


  return (
    <>

       
      <NavBar availableBalance={availableBalance}></NavBar>

      <div className='mt- max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bond text-2xl'>{toggle === true ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`}</h1>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-0 border-gray-100 rounded-l-xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-0 border-gray-100 rounded-r-xl border-r-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>{`Seleted(${selectedPlayers.length}/6)`}</button>
        </div>
      </div>
     


      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}>

          </AvailablePlayers>
        </Suspense> : <SelectedPlayers selectedPlayers={selectedPlayers} removePlayer={removePlayer}>

        </SelectedPlayers>
      }

      <ToastContainer />

    </>
  )
}

export default App
