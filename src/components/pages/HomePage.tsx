import RickAndMortyImage from '/rick-and-morty-portal.png';

const HomePage = () => {
  return (
    <section className='flex justify-center'>
      <div className='w-2/3'>
        <img src={RickAndMortyImage} alt='home page' />
      </div>
    </section>
  );
};
export default HomePage;
