import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";
import "./PokemonList.css";
import PokemonItem from "../PokemonItem/PokemonItem";

function PokemonList() {
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

  const handleSearch = (e) => {
    let search = pokemonJSON.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilterPokemons(search);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="cari pokemon..."
        className="search"
        onChange={handleSearch}
      />

      <div className="list-pokemon">
        {filterPokemons.length === 0 ? (
          <div>Data tidak ditemukan</div>
        ) : (
          filterPokemons.map((item) => (
            <PokemonItem key={item.id} pokemon={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default PokemonList;
