import SearchBar from '../search/SearchBar';
import { useGetCharactersQuery } from '../../store/redux/services/charactersApi';
//import CharactersList from '../CharactersList';
import Spinner from '../common/Spinner';
import React, { Suspense } from 'react';
import { delay } from '../../utils/delay';
const LazyCharactersList = React.lazy(async () => {
  await delay(1500);
  return import('../CharactersList');
});

const CharactersPage = () => {
  const { data, isFetching } = useGetCharactersQuery();

  const characters = data?.results;

  return (
    <section className='flex flex-col items-center gap-8'>
      <SearchBar />
      {isFetching ? <Spinner /> : null}
      {characters ? (
        <Suspense
          fallback={
            <h1 className='text-2xl'>Нарошно ленивая загрузка компонента...</h1>
          }
        >
          <LazyCharactersList characters={characters} />
        </Suspense>
      ) : null}
    </section>
  );
};
export default CharactersPage;
