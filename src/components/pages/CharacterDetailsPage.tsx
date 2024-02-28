import { useParams } from 'react-router-dom';

const CharacterDetailsPage = () => {
  const params = useParams();
  return (
    <section className='flex flex-col items-center gap-8'>
      DETAILS - {params.id}
    </section>
  );
};
export default CharacterDetailsPage;
