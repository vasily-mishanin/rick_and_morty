import { useState } from 'react';

type Props = {
  queryText: string;
  onChange: (text: string) => void;
  onSubmit: (query: string) => void;
  onFocus: () => void;
};

const SearchForm = ({ queryText, onChange, onSubmit, onFocus }: Props) => {
  const [searchText, setSearchText] = useState(queryText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    onChange(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(searchText);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-72'>
      <div className='search-wrapper flex justify-between gap-2 border-2 p-1 rounded hover:border-green-200 transition-colors'>
        <input
          className='border-none'
          type='text'
          name='search'
          id='search'
          value={searchText}
          onChange={handleChange}
          onFocus={onFocus}
        />
        <button
          className='p-1 px-2  bg-green-400 rounded hover:bg-opacity-80 transition-colors'
          type='submit'
        >
          Искать
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
