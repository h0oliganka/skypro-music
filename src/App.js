import { Main } from './pages/mainFolder/main'
import { useEffect, useState } from 'react'
import { GlobalStyle } from './pages/mainFolder/globalStyle'
import { AppRoutes } from './routes'

export function App() {
  const [user, setUser] = useState(null)

  const handleLogin = () => setUser({ login: 'hello', password: 'hello' })

  const handleLogout = () => setUser(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })

  return (
    <>
      <GlobalStyle />
      <AppRoutes user={user} loading={loading}>
        <Main
          loading={loading}
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
      </AppRoutes>
    </>
  )
}
