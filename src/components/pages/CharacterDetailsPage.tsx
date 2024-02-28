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
      DETAILS - {params.id}
      {JSON.stringify(character)}
    </section>
  );
};
export default CharacterDetailsPage;
