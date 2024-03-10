import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneCharacterByIdQuery } from '../../store/redux/services/charactersApi';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import {
  addToFavorites,
  getFavoritesIds,
  removeFromFavorites,
} from '../../store/redux/favoritesSlice';
import { AuthContext } from '../../store/auth/AuthProvider';
import { useContext } from 'react';
import Spinner from '../common/Spinner';

type Params = {
  id: string;
};

const CharacterDetailsPage = () => {
  const authCtx = useContext(AuthContext);
  const params = useParams() as Params;
  const {
    data: character,
    isFetching,
    error,
  } = useGetOneCharacterByIdQuery(params.id);

  const favoritesIds = useAppSelector(getFavoritesIds);

  let isInFavorites = false;

  if (character?.id) {
    isInFavorites = favoritesIds.includes(character?.id.toString());
  }
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    if (!authCtx.isLoggedIn) {
      navigate('/signin');
      return;
    }

    if (character?.id) {
      dispatch(addToFavorites(character.id));
    }
  };

  const handleRemoveFromFavorites = () => {
    if (character?.id) {
      dispatch(removeFromFavorites(character.id));
    }
  };

  const dynamicButtonStyle = isInFavorites ? 'bg-orange-400' : 'bg-green-400';

  if (error) {
    throw new Error(`${error}`);
  }

  return (
    <section className='flex flex-col items-center gap-8'>
      {isFetching ? <Spinner /> : null}

      {character && (
        <article className='p-8 flex gap-8 flex-col items-center md:flex-row'>
          <div className='w-64'>
            <img
              className='w-full'
              src={character.image}
              alt={character.name}
            />
          </div>
          <div>
            <h1 className='text-3xl font-bold mb-8'>
              {character.name}{' '}
              {isInFavorites ? (
                <span className='ml-4 text-xs text-orange-400'>
                  в избранном
                </span>
              ) : null}
            </h1>
            <div className='text-xl mb-8'>
              <p>
                <span className='w-20 inline-block'>Status:</span>
                <span className='font-bold ml-4'>{character.status}</span>
              </p>
              <p>
                <span className='w-20 inline-block'> Gender:</span>
                <span className='font-bold ml-4'>{character.gender}</span>
              </p>
              <p>
                <span className='w-20 inline-block'>Species:</span>
                <span className='font-bold ml-4'>{character.species}</span>
              </p>
              <p>
                <span className='w-20 inline-block'>Location:</span>
                <span className='font-bold ml-4'>
                  {character.location.name}
                </span>
              </p>
            </div>

            <button
              className={`px-2 py-1 text-sm self-center rounded mt-4 hover:bg-opacity-80 transition-colors ${dynamicButtonStyle}`}
              onClick={
                isInFavorites ? handleRemoveFromFavorites : handleAddToFavorites
              }
            >
              {isInFavorites ? 'Убрать из избранного' : 'Добавить в избранное'}
            </button>
          </div>
        </article>
      )}
    </section>
  );
};
export default CharacterDetailsPage;
