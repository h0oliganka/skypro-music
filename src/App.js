import { Main } from './components/mainFolder/main'
import { useEffect, useState } from 'react'
import { GlobalStyle } from './components/mainFolder/globalStyle'

export function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })

  return (
  <>
  <GlobalStyle />
  <Main loading={loading} />
  </>
  )
}
