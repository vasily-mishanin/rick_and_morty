import { Character } from '../../types';
import PropTypes from 'prop-types';

type Props = {
  character: Character;
  onCardClick: (itemId: string) => void;
  isFavorite?: boolean;
  onRemove?: (itemId: string) => void;
};

const CharacterCard = ({
  character,
  isFavorite,
  onCardClick,
  onRemove,
}: Props) => {
  const characterId = character.id.toString();

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) onRemove(characterId);
  };

  return (
    <article
      key={character.id}
      className='w-44 hover:cursor-pointer'
      onClick={() => onCardClick(characterId)}
    >
      <div className='w-40 mb-3'>
        <img src={character.image} alt={character.name} />
      </div>
      <p className='text-center mb-6'>
        {character.name}
        <span className='text-sm'>{`(${character.status})`}</span>
      </p>
      {isFavorite ? (
        <button
          className={`px-2 py-1 text-sm self-center rounded mt-4 hover:bg-opacity-80 transition-colors bg-orange-400`}
          onClick={handleRemove}
        >
          Убрать из избранного
        </button>
      ) : null}
    </article>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.oneOf(['Alive', 'Dead', 'unknown']),
    gender: PropTypes.oneOf(['Female', 'Male', 'Genderless', 'unknown']),
    image: PropTypes.string,
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
    created: PropTypes.string,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  onRemove: PropTypes.func,
};

export default CharacterCard;
