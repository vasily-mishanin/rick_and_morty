import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/redux/hooks';
import {
  removeSearchItem,
  setQueryText,
} from '../../store/redux/searchHistorySlice';
import { useGetCharactersBySearchQuery } from '../../store/redux/services/charactersApi';
import { getQueryString } from '../../utils/getQueryString';
import CharactersList from '../CharactersList';
import SearchBar from '../search/SearchBar';
import Spinner from '../common/Spinner';

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  if (name) {
    dispatch(setQueryText(name));
  }

  const resultQuery = getQueryString(searchParams);

  const { data, isFetching, error } =
    useGetCharactersBySearchQuery(resultQuery);

  if (error) {
    dispatch(removeSearchItem({ url: `/search?${resultQuery}` }));
  }

  const characters = data?.results;

  return (
    <section className='flex flex-col items-center gap-8'>
      <SearchBar />
      {isFetching ? <Spinner /> : null}
      {error ? <p>Таких не нашлось 🤷‍♂️</p> : null}
      {!error && characters ? <CharactersList characters={characters} /> : null}
    </section>
  );
};
export default SearchPage;
