import { Character } from '../../types';

type Props = {
  character: Character;
  onCardClick: (itemId: string) => void;
  isFavorite?: boolean;
  onActionClick?: (itemId: string) => void;
};

const CharacterCard = ({
  character,
  isFavorite,
  onCardClick,
  onActionClick,
}: Props) => {
  const characterId = character.id.toString();

  const handleAction = (
    e: React.MouseEvent,
    callback: (id: string) => void
  ) => {
    e.stopPropagation();
    callback(characterId);
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
      {isFavorite && onActionClick ? (
        <button
          className={`px-2 py-1 text-sm self-center rounded mt-4 hover:bg-opacity-80 transition-colors bg-orange-400`}
          onClick={(e) => handleAction(e, onActionClick)}
        >
          Убрать из избранного
        </button>
      ) : null}
    </article>
  );
};
export default CharacterCard;
