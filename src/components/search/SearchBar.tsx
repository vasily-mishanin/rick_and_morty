import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { setQueryText } from '../../store/redux/searchHistorySlice';
import SearchForm from './SearchForm';
import { debounce } from '../../utils/debounce';
import Suggests from './Suggests';
import { useState } from 'react';

const DEBOUNCE_TIME = 1500;

const SearchBar = () => {
  const queryText = useAppSelector((state) => state.history.queryText);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //console.log({ queryText });
  const [searchText, setSearchText] = useState('');

  const searchSuggests = debounce((enteredText: string) => {
    //console.log('searchSuggests', enteredText);
    dispatch(setQueryText(enteredText));
    setSearchText(enteredText);
  }, DEBOUNCE_TIME);

  const handleSubmit = (enteredText: string) => {
    dispatch(setQueryText(enteredText));
    navigate(`/search?name=${enteredText}&some=value`);
  };

  return (
    <div className='relative w-72'>
      <SearchForm
        queryText={queryText}
        onChange={searchSuggests}
        onSubmit={handleSubmit}
      />
      <div className='absolute w-full bg-orange-300/90 rounded'>
        {searchText ? <Suggests searchText={queryText} /> : null}
      </div>
    </div>
  );
};
export default SearchBar;
