import { useState } from 'react'
import Header from './components/Header/Header'
import Card from './components/Card/Card'


import './App.css'

function App() {

  return (
    <>
      <Header />




      <h1> Bienvenue sur l'intranet</h1>

      <p>la platforme de l'entreprise qui vous permet de retrouver tous vos collaborateurs </p>

      <p>Avez vous dis bonjour à:</p>

      liste
      <i class="fa-solid fa-list"></i>

      intranet
      <i class="fa-solid fa-network-wired"></i>

      log in
      <i class="fa-solid fa-right-to-bracket"></i>

      log out
      <i class="fa-solid fa-right-from-bracket"></i>

      calendar
      <i class="fa-regular fa-calendar"></i>
      <br></br>


      {/* <FontAwesomeIcon icon="fa-solid fa-cake-candles" /> */}


      <Card
        props={

          JSON.parse(
            '{"id": "37","gender": "male","firstname": "Isaac","lastname": "Renard","email": "isaac.renard@example.com","phone": "05-49-13-09-86",  "birthdate": "1991-09-17",      "city": "Angers",      "country": "France",      "photo": "https://randomuser.me/api/portraits/men/84.jpg",      "service": "Marketing"            }'
          )

        }
      />



      <button>DIRE BONJOUR A QUELQU'UN D'AUTRE</button>



    </>

  )
}

export default App
