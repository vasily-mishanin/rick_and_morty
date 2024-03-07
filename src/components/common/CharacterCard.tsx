import { Character } from '../../types';

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
export default CharacterCard;
