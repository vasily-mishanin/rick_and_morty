import { useEffect, useState } from 'react';
import { Character, CharactersResponse } from '../../types';

const CharactersPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage] = useState(1);

  useEffect(() => {
    const getCharacters = async (page: number) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/character?page=${page}`
        );
        const data: CharactersResponse = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log('Error while fetching Characters', error);
      }
    };
    getCharacters(currentPage);
  }, []);

  return (
    <section>
      <div className='flex gap-6 flex-wrap justify-center'>
        {characters
          ? characters.map((character) => (
              <article className='w-44'>
                <div className='w-40 mb-3'>
                  <img src={character.image} alt={character.name} />
                </div>
                <p className='text-center'>
                  {character.name}{' '}
                  <span className='text-sm'>({character.status})</span>
                </p>
              </article>
            ))
          : null}
      </div>
    </section>
  );
};
export default CharactersPage;
