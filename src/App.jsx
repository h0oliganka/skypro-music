import { Main } from './pages/mainFolder/main'
import { useState } from 'react'
import { GlobalStyle } from './pages/mainFolder/globalStyle'
import { AppRoutes } from './routes'
import { UserContext } from './context/user'
import { Provider } from 'react-redux'
import { store } from './pages/store/store'

export function App() {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')),
  );

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Provider store={store}>
        <GlobalStyle />
        <AppRoutes >
          <Main />
        </AppRoutes>
      </Provider>
    </UserContext.Provider>

  )
}
