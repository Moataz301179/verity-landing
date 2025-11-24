import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [status, setStatus] = useState('checking')
  const API_URL = 'https://verity-backend-production.up.railway.app'

  useEffect(() => {
    axios.get(`${API_URL}/api/health`).then(() => setStatus('connected')).catch(() => setStatus('error'))
  }, [])

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>VERITY</h1>
      <p>AI Real Estate Platform</p>
      <div style={{ color: status === 'connected' ? '#86efac' : '#fca5a5' }}>
        ● {status === 'connected' ? 'Connected ✅' : 'Error ❌'}
      </div>
    </div>
  )
}

export default App
