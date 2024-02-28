import { useAppSelector } from '../../store/redux/hooks';

const SearchPage = () => {
  const queryText = useAppSelector((state) => state.history.queryText);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSearch');
  };

  return (
    <section className='flex flex-col items-center gap-8'>
      <div>
        <form onSubmit={handleSearch}>
          <div className='search-wrapper flex gap-2 border-2 p-1 rounded hover:border-green-200 transition-colors'>
            <input
              className='border-none'
              type='text'
              name='search'
              id='search'
              value={queryText}
            />
            <button
              className='p-1 px-2  bg-green-400 rounded hover:bg-opacity-80 transition-colors'
              type='submit'
            >
              Искать
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default SearchPage;
