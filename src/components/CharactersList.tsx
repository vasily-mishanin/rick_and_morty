import { useNavigate } from 'react-router-dom';
import { Character } from '../types';
import CharacterCard from './common/CharacterCard';

type Props = {
  characters: Character[];
  isFavoritesList?: boolean;
  isSearchList?: boolean;
  onRemoveFromFavorites?: (itemId: string) => void;
  onAddToFavorites?: (itemId: string) => void;
};

const CharactersList = ({
  characters,
  isFavoritesList,
  isSearchList,
  onRemoveFromFavorites,
  onAddToFavorites,
}: Props) => {
  const navigate = useNavigate();

  const navigateToDetails = (characterId: string) => {
    navigate(`/characters/${characterId}`);
  };

  return (
    <div className='flex gap-6 flex-wrap justify-center mb-8'>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onCardClick={navigateToDetails}
          isFavorite={isFavoritesList}
          isSearch={isSearchList}
          onRemove={onRemoveFromFavorites}
          onAdd={onAddToFavorites}
        />
      ))}
    </div>
  );
};
export default CharactersList;
