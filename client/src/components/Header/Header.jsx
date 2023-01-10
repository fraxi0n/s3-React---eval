import { useState } from 'react'

import './Header.css'

const Header = () => {

    const isLogged = true


    return (
        <div className='header'>
            <div className='logo_intra'>
                intranet
            </div>

            {isLogged ?
                <>

                    <button>
                        liste
                    </button>

                    <div>
                        *image profil*
                    </div>

                    <button>
                        déconnexion
                    </button>


                </>
                :
                <button>
                    connexion
                </button>
            }

        </div>
    )
}

export default Header
