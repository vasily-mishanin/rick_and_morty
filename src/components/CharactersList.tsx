import { Character } from '../types';

type Props = {
  characters: Character[];
};

const CharactersList = ({ characters }: Props) => {
  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      {characters.map((character) => (
        <article key={character.id} className='w-44'>
          <div className='w-40 mb-3'>
            <img src={character.image} alt={character.name} />
          </div>
          <p className='text-center'>
            {character.name}{' '}
            <span className='text-sm'>({character.status})</span>
          </p>
        </article>
      ))}
    </div>
  );
};
export default CharactersList;
