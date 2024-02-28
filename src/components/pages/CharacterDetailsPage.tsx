import { useParams } from 'react-router-dom';
import { useGetOneCharacterByIdQuery } from '../../store/redux/services/charactersApi';

type Params = {
  id: string;
};

const CharacterDetailsPage = () => {
  const params = useParams() as Params;
  const { data: character, isFetching } = useGetOneCharacterByIdQuery(
    params.id
  );

  return (
    <section className='flex flex-col items-center gap-8'>
      {isFetching ? <p>Loading...</p> : null}

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
            <h1 className='text-3xl font-bold mb-8'>{character.name}</h1>
            <div className='text-xl'>
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
          </div>
        </article>
      )}
    </section>
  );
};
export default CharacterDetailsPage;
