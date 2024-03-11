import SearchBar from '../search/SearchBar';
import { useGetCharactersQuery } from '../../store/redux/services/charactersApi';
//import CharactersList from '../CharactersList';
import Spinner from '../common/Spinner';
import React, { Suspense, useContext } from 'react';
import { delay } from '../../utils/delay';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/auth/AuthProvider';
import { useAppDispatch } from '../../store/redux/hooks';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../store/redux/favoritesSlice';
const LazyCharactersList = React.lazy(async () => {
  await delay(1500);
  return import('../CharactersList');
});

const CharactersPage = () => {
  const authCtx = useContext(AuthContext);
  const { data, isFetching } = useGetCharactersQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const characters = data?.results;

  const handleAddToFavorites = (characterId: string) => {
    if (!authCtx.isLoggedIn) {
      navigate('/signin');
      return;
    }

    dispatch(addToFavorites(characterId));
  };

  const handleRemoveFromFavorites = (characterId: string) => {
    if (!authCtx.isLoggedIn) {
      navigate('/signin');
      return;
    }

    dispatch(removeFromFavorites(characterId));
  };

  return (
    <section className='flex flex-col items-center gap-8'>
      <SearchBar />
      {isFetching ? <Spinner /> : null}
      {characters ? (
        <Suspense
          fallback={
            <h1 className='text-2xl'>Нарошно ленивая загрузка компонента...</h1>
          }
        >
          <LazyCharactersList
            characters={characters}
            onAddToFavorites={handleAddToFavorites}
            onRemoveFromFavorites={handleRemoveFromFavorites}
          />
        </Suspense>
      ) : null}
    </section>
  );
};
export default CharactersPage;
