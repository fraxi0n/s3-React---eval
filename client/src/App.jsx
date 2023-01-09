import { useState } from 'react'
import Header from './Header'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />




      <h1> Bienvenue sur l'intranet</h1>

      <p>la platforme de l'entreprise qui vous permet de retrouver tous vos collaborateurs </p>

      <p>Avez vous dis bonjour à:</p>


      {/* <Card/> */}

      <button>DIRE BONJOUR A QUELQU'UN D'AUTRE</button>



    </>

  )
}

export default App
