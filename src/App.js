import { Main } from './pages/mainFolder/main'
import { useState } from 'react'
import { GlobalStyle } from './pages/mainFolder/globalStyle'
import { AppRoutes } from './routes'


export function App() {
  const [user, setUser] = useState(null)

  const handleLogin = () => setUser({ login: 'hello', password: 'hello' })

  const handleLogout = () => setUser(null)

  return (
    <>
      <GlobalStyle />
      <AppRoutes>
        <Main onAuthButtonClick={user ? handleLogout : handleLogin} />
      </AppRoutes>
    </>
  )
}
