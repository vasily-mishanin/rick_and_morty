import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import {
  addSearchItem,
  getQueryText,
  setQueryText,
} from '../../store/redux/searchHistorySlice';
import SearchForm from './SearchForm';
import { debounce } from '../../utils/debounce';
import Suggests from './Suggests';
import { useContext, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { AuthContext } from '../../store/auth/AuthProvider';

const DEBOUNCE_TIME = 1000;

const SearchBar = () => {
  const queryText = useAppSelector(getQueryText);
  const auth = useContext(AuthContext);

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
      if (auth.isLoggedIn) {
        dispatch(addSearchItem({ url: searchURL, text: enteredText }));
      }
      navigate(searchURL);
    } else {
      navigate(`/search`);
    }
  };

  const handleSearchFocus = () => {
    setShowSuggests(true);
  };

  return (
    <div className='relative w-72' ref={clickRef}>
      <SearchForm
        queryText={queryText}
        onChange={searchSuggests}
        onSubmit={handleSubmit}
        onFocus={handleSearchFocus}
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
