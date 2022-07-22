import React, {useState} from "react";
import { searchPokemon } from "../api";


const Searchbar = () => {
    
    const [search, setSearch] = useState("ditto")
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
        
    }

    const  onSearchHandler =async(pokemon) =>{
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className="Searchbar-container">
            <div className="Searchbar">
                <input
                placeholder="Busca pokemon..."
                onChange={onChangeHandler}
                />
                <button className="searchbar-btn" onClick={onButtonClickHandler} >Buscar</button>
                
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name} </div>
                    <div>Peso: {pokemon.weight} </div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
            ): null}
        </div>
    )
}

export default Searchbar