# Rick and Morty UI  

Вспоминай множество выносящих мозг персонажей культовых сезонов Rick and Morty.  

Проект собран на React + TypeScript + Vite.

В проекте использован API: https://rickandmortyapi.com/  

Развернутое приложение: https://rickandmortyaston.netlify.app  

## 1 уровень (необходимый минимум)  

- [x] Реализованы Требования к функциональности
- [x] Для хранения учетных записей пользователей использован [Firebase Auth](https://firebase.google.com/docs/auth)
- [x] Для хранения Избранного и Истории поиска используется LocalStorage

     ### React
- [x]  Проект написан на функциональных компонентах
- [x]  Есть разделение на умные (pages) и глупые компоненты
- [x]  Есть рендеринг списков
- [x]  Релизованы формы: Регистрация, Вход, Поиск
- [x]  Есть применение Context API - для храннения состояния аутентификации
- [x]  Есть применение предохранителя (Error Boundaries)
- [x]  Есть кастомный хук - `useClickOutside` - для скрытия подсказок поиска при клике вне формы
- [x]  PropTypes используются в компоненте `CharacterCard` и `ProtectedRoute`
- [x]  Debounce прием используется в компоненте `SearchBar`
- [x]  React.lazy + Suspense используются на странице `CharactersPage`

    ### Redux
- [x]  Redux Toolkit использован в проекте
- [x]  Созданы слайсы: `favoritesSlice`, `searchHistorySlice`  
- [x]  Создано и используется кастомное middleware `localStorageMiddleware`  
- [x]  Используется RTK Query - `charactersApi`
- [x]  Используется Transforming Responses -  в `getSuggestsBySearchText` - для получения подсказок

## 2 уровень (необязательный)  

- [x] Проект написан на TypeScript  
- [x] Использован Firebase - частично - только для хранения данных аунтентификации  
