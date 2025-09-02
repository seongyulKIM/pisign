
import { useState } from 'react'
import { loginWithPi } from './utils/piAuth'
import '../src/utils/pi'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = async () => {
    const result = await loginWithPi()
    if (result) {
      setUser(result)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>PiSign</h1>
      <p>파이 기반 책임 서명 플랫폼</p>

      {!user ? (
        <button onClick={handleLogin} style={{ padding: '10px 20px', marginTop: '10px' }}>
          Pi Wallet 로그인
        </button>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <p>👋 {user.username}님, 환영합니다!</p>
        </div>
      )}
    </div>
  )
}

export default App
