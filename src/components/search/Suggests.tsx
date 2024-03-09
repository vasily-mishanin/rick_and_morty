import { Link } from 'react-router-dom';

import { useGetSuggestsBySearchTextQuery } from '../../store/redux/services/charactersApi';

const Suggests = ({ searchText }: { searchText: string }) => {
  const {
    data: suggests,
    error,
    isLoading,
  } = useGetSuggestsBySearchTextQuery(searchText);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        {error instanceof Response && error.status !== 404
          ? 'Internal server error'
          : null}
      </p>
    );
  }

  if (suggests) {
    return (
      <ul className='max-h-72 overflow-auto rounded'>
        {suggests.slice(0, 5).map((suggest) => (
          <li
            key={suggest.id}
            className=' px-2 mb-1 text-sm hover:bg-green-500'
          >
            <Link to={`/characters/${suggest.id}`}> {suggest.name}</Link>
          </li>
        ))}
      </ul>
    );
  }

  return null;
};
export default Suggests;
