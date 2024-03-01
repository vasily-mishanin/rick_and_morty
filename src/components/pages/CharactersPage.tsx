//import { useState } from 'react';

import SearchBar from '../search/SearchBar';
import { useGetCharactersQuery } from '../../store/redux/services/charactersApi';
import CharactersList from '../CharactersList';

const CharactersPage = () => {
  //const [currentPage] = useState(1);

  const { data, isFetching } = useGetCharactersQuery();

  const characters = data?.results;

  return (
    <section className='flex flex-col items-center gap-8'>
      <SearchBar />
      {isFetching ? <p>Loading...</p> : null}
      {characters ? <CharactersList characters={characters} /> : null}
    </section>
  );
};
export default CharactersPage;
