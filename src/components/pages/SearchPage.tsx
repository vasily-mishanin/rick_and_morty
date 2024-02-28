import SearchBar from '../search/SearchBar';
import { useGetCharctersBySearchQuery } from '../../store/redux/services/charactersApi';
import { SearchParams } from '../../types';
import CharactersList from '../CharactersList';

const SearchPage = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const params: SearchParams = [...searchParams].map((entry) => ({
    key: entry[0],
    value: entry[1],
  }));
  console.log(params);

  const { data, isFetching } = useGetCharctersBySearchQuery(params);

  const characters = data?.results;

  return (
    <section className='flex flex-col items-center gap-8'>
      <SearchBar />
      {isFetching ? <p>Loading...</p> : null}
      {characters ? <CharactersList characters={characters} /> : null}
    </section>
  );
};
export default SearchPage;
