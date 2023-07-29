import { Main } from './components/mainFolder/main'
import { useEffect, useState } from 'react'

export function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })

  return <Main loading={loading} />
}
