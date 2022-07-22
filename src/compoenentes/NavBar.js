import React from "react"

const Navbar = () => {

    const logo ="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return(
        <div>
            <nav>
                <div>
                    <img 
                    alt="pokeaip-logo" 
                    src={logo} 
                    className="navbarimg"
                    />
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar