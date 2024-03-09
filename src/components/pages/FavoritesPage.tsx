import { removeFromFavorites } from '../../store/redux/favoritesSlice';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { useGetManyCharactersByIdsQuery } from '../../store/redux/services/charactersApi';
import CharactersList from '../CharactersList';
import Spinner from '../common/Spinner';

const FavoritesPage = () => {
  const favoritesIds = useAppSelector((state) => state.favorites.favoritesIds);
  const { isFetching, data } = useGetManyCharactersByIdsQuery(favoritesIds);
  const dispatch = useAppDispatch();

  if (favoritesIds.length < 1) {
    return (
      <section className='flex flex-col items-center gap-8'>
        <h1>Избранное</h1>
        <p>Пока ничего в избранном</p>
      </section>
    );
  }

  const favoriteCharacters = data && !Array.isArray(data) ? [data] : data;

  const handleRemoveFromFavorites = (characterId: string) => {
    dispatch(removeFromFavorites(characterId));
  };

  return (
    <section className='relative flex flex-col items-center justify-center gap-8'>
      <h1>Избранное</h1>
      {isFetching ? <Spinner /> : null}
      {favoriteCharacters ? (
        <CharactersList
          characters={favoriteCharacters}
          isFavoritesList
          onRemoveFromFavorites={handleRemoveFromFavorites}
        />
      ) : null}
    </section>
  );
};
export default FavoritesPage;
