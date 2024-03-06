import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { setQueryText } from '../../store/redux/searchHistorySlice';
import SearchForm from './SearchForm';
import { debounce } from '../../utils/debounce';
import Suggests from './Suggests';
import { useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

const DEBOUNCE_TIME = 1500;

const SearchBar = () => {
  const queryText = useAppSelector((state) => state.history.queryText);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState('');
  const [showSuggests, setShowSuggests] = useState(true);

  const searchSuggests = debounce((enteredText: string) => {
    dispatch(setQueryText(enteredText));
    setSearchText(enteredText);
    setShowSuggests(true);
  }, DEBOUNCE_TIME);

  const clickRef = useClickOutside(() => {
    setShowSuggests(false);
  });

  const handleSubmit = (enteredText: string) => {
    dispatch(setQueryText(enteredText));
    if (enteredText.length > 0) {
      navigate(`/search?name=${enteredText}`);
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
