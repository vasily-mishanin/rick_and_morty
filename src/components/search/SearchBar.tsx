import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import {
  addSearchItem,
  setQueryText,
} from '../../store/redux/searchHistorySlice';
import SearchForm from './SearchForm';
import { debounce } from '../../utils/debounce';
import Suggests from './Suggests';
import { useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

const DEBOUNCE_TIME = 1000;

const SearchBar = () => {
  const queryText = useAppSelector((state) => state.history.queryText);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState('');
  const [showSuggests, setShowSuggests] = useState(true);

  const clickRef = useClickOutside(() => {
    setShowSuggests(false);
  });

  const searchSuggests = debounce((enteredText: string) => {
    enteredText = enteredText.trim();
    dispatch(setQueryText(enteredText));
    setSearchText(enteredText);
    setShowSuggests(true);
  }, DEBOUNCE_TIME);

  const handleSubmit = (enteredText: string) => {
    enteredText = enteredText.trim();
    dispatch(setQueryText(enteredText));
    const searchURL = `/search?name=${encodeURIComponent(enteredText)}`;

    if (enteredText.length > 0) {
      dispatch(addSearchItem({ url: searchURL, text: enteredText }));
      navigate(searchURL);
    } else {
      navigate(`/search`);
    }
  };

  return (
    <div className='relative w-72' ref={clickRef}>
      <SearchForm
        queryText={queryText}
        onChange={searchSuggests}
        onSubmit={handleSubmit}
      />
      <div className='absolute w-full bg-orange-300/90 rounded'>
        {searchText && showSuggests ? (
          <Suggests searchText={queryText} />
        ) : null}
      </div>
    </div>
  );
};
export default SearchBar;
