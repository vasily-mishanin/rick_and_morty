import { useNavigate } from 'react-router-dom';
import { Character } from '../types';
import CharacterCard from './common/CharacterCard';

type Props = {
  characters: Character[];
  isFavoritesList?: boolean;
  onRemoveFromFavorites?: (itemId: string) => void;
};

const CharactersList = ({
  characters,
  isFavoritesList,
  onRemoveFromFavorites,
}: Props) => {
  const navigate = useNavigate();

  const navigateToDetails = (characterId: string) => {
    navigate(`/characters/${characterId}`);
  };

  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onCardClick={navigateToDetails}
          isFavorite={isFavoritesList}
          onRemove={onRemoveFromFavorites}
        />
      ))}
    </div>
  );
};
export default CharactersList;
