import SearchBar from '../search/SearchBar';
import { useGetCharactersQuery } from '../../store/redux/services/charactersApi';
import CharactersList from '../CharactersList';
import Spinner from '../common/Spinner';

const CharactersPage = () => {
  const { data, isFetching } = useGetCharactersQuery();

  const characters = data?.results;

  return (
    <section className='flex flex-col items-center gap-8'>
      <SearchBar />
      {isFetching ? <Spinner /> : null}
      {characters ? <CharactersList characters={characters} /> : null}
    </section>
  );
};
export default CharactersPage;
