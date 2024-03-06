import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { removeSearchItem } from '../../store/redux/searchHistorySlice';

const SearchHistoryPage = () => {
  const { searchHistory } = useAppSelector((state) => state.history);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className='flex flex-col items-center gap-8'>
      <h1 className='text-xl'>История поиска</h1>
      {searchHistory.length < 1 ? <p>Пока ничего нет в истории</p> : null}
      <ul>
        {searchHistory.map((item) => (
          <li key={item.url} className='mb-1'>
            <div className='history-item flex items-center gap-4  '>
              <button
                className='px-1 rounded text-xs border hover:bg-orange-300 hover:bg-opacity-75 transition-colors'
                onClick={() => dispatch(removeSearchItem({ url: item.url }))}
              >
                Удалить
              </button>
              <p
                className='cursor-pointer opacity-85 hover:opacity-100'
                onClick={() => navigate(item.url)}
              >
                <span className='text-xl text-slate-300'>{item.text}</span>
                {' ➡ '}
                <span className='text-blue-400'>{item.url}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SearchHistoryPage;
