import { removeFromFavorites } from '../../store/redux/favoritesSlice';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { useGetManyCharactersByIdsQuery } from '../../store/redux/services/charactersApi';
import CharactersList from '../CharactersList';

const FavoritesPage = () => {
  const favoritesIds = useAppSelector((state) => state.favorites.favoritesIds);
  const { isFetching, data, error } =
    useGetManyCharactersByIdsQuery(favoritesIds);
  const dispatch = useAppDispatch();
  console.log({ favoritesIds });

  if (favoritesIds.length < 1) {
    return (
      <section className='flex flex-col items-center gap-8'>
        <h1>Избранное</h1>
        <p>Пока ничего в избранном</p>
      </section>
    );
  }

  const favoriteCharacters = data && !Array.isArray(data) ? [data] : data;

  const handleDeleteFromFavorites = (characterId: string) => {
    dispatch(removeFromFavorites(characterId));
  };

  return (
    <section className='flex flex-col items-center gap-8'>
      <h1>Избранное</h1>
      {isFetching ? <p>Loading...</p> : null}
      {favoriteCharacters ? (
        <CharactersList
          characters={favoriteCharacters}
          isFavoritesList
          onDeleteFromFavorites={handleDeleteFromFavorites}
        />
      ) : null}
    </section>
  );
};
export default FavoritesPage;
