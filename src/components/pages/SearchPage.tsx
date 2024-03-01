import SearchBar from '../search/SearchBar';
import { useGetCharctersBySearchQuery } from '../../store/redux/services/charactersApi';
import { SearchParams } from '../../types';
import CharactersList from '../CharactersList';
import { setQueryText } from '../../store/redux/searchHistorySlice';
import { useAppDispatch } from '../../store/redux/hooks';

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const searchParams = new URLSearchParams(document.location.search);
  const name = searchParams.get('name');

  if (name) {
    dispatch(setQueryText(name));
  }

  const params: SearchParams = [...searchParams].map((entry) => ({
    key: entry[0],
    value: entry[1],
  }));

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
