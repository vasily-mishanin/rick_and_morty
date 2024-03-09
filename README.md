# Rick and Morty UI (Aston devs React Intensive)    

Вспоминай множество выносящих мозг персонажей культовых сезонов Rick and Morty.  

Проект собран на React + TypeScript + Vite.

В проекте использован API: https://rickandmortyapi.com/  

Развернутое приложение: https://rickandmortyaston.netlify.app  

## 1 уровень (необходимый минимум)  

- [x] Реализованы Требования к функциональности:  
      - Главная страница   
      - Страница персонажей /characters     
      - Страница с Единицей информации /characters/:id    
      - Страница Истории - /history  
      - Страница Избранное - /favorites  
      - Страница Регистрации - /signup  
      - Страница Входа - /signin  
      - Страница Профиля - /profile  
      Основные компоненты  
           - Кнопка Добавить/Удалить из Избранного   
           - Панель Поиска  
           - Карточка с Единицей информации   
- [x] Для хранения учетных записей пользователей использован [Firebase Auth](https://firebase.google.com/docs/auth)
- [x] Для хранения Избранного и Истории поиска используется [LocalStorage](https://github.com/vasily-mishanin/rick_and_morty/blob/main/src/store/redux/store.ts#L17C7-L17C29)

     ### React
- [x]  Проект написан на функциональных компонентах
- [x]  Есть разделение на умные (pages) и глупые компоненты 
- [x]  Есть рендеринг списков [characters](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/CharactersList.tsx#L11) и [suggests](https://github.com/vasily-mishanin/rick_and_morty/blob/main/src/components/search/Suggests.tsx#L28)
- [x]  Релизованы формы: [Регистрация](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/auth/FormSignUp.tsx#L12), [Вход](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/auth/FormSignIn.tsx#L12), [Поиск](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/search/SearchForm.tsx#L9)
- [x]  Есть применение [Context API](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/store/auth/AuthProvider.tsx#L19) - для храннения состояния аутентификации
- [x]  Есть применение предохранителя [Error Boundary](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/common/ErrorBoundary.tsx#L11)
- [x]  Есть кастомный хук - [useClickOutside](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/hooks/useClickOutside.ts#L3) - для скрытия подсказок поиска при клике вне формы
- [x]  PropTypes используются в компоненте [CharacterCard](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/common/CharacterCard.tsx#L49) и [ProtectedRoute](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/ProtectedRoute.tsx#L29)
- [x]  Debounce прием используется в компоненте [SearchBar](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/search/SearchBar.tsx#L30)
- [x]  React.lazy + Suspense используются на странице [CharactersPage](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/components/pages/CharactersPage.tsx#L7)

    ### Redux
- [x]  Redux Toolkit использован в проекте
- [x]  Созданы слайсы: [favoritesSlice](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/store/redux/favoritesSlice.ts#L15), [searchHistorySlice](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/store/redux/searchHistorySlice.ts#L17)  
- [x]  Создано и используется кастомное middleware [localStorageMiddleware](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/store/redux/store.ts#L17)  
- [x]  Используется RTK Query - [charactersApi](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/store/redux/services/charactersApi.ts#L11)
- [x]  Используется Transforming Responses -  в [getSuggestsBySearchText](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/store/redux/services/charactersApi.ts#L38C7-L38C24) - для получения подсказок

## 2 уровень (необязательный)  

- [x] Проект написан на Typescript  
- [x] Использован [Firebase](https://github.com/vasily-mishanin/rick_and_morty/blob/49a4f066bb357ed203b7ada3f60c79064d57eac3/src/store/auth/AuthProvider.tsx#L23) - частично - только для хранения данных аунтентификации  
