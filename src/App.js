import { Main } from './pages/mainFolder/main'
import { useEffect, useState } from 'react'
import { GlobalStyle } from './pages/mainFolder/globalStyle'
import { AppRoutes } from './routes'

export function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  })

  return (
    <>
      <GlobalStyle />
      <AppRoutes loading={loading}>
        <Main loading={loading} />
      </AppRoutes>
    </>
  )
}
