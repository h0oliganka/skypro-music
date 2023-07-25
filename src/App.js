import Main from './components/main'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  })

  return <Main loading={loading} />
}

export default App
