import { useState } from 'react'
import { Authorization } from '../../components/Authorization/Authorization'

function GreeterUser() {
    const [user, setUser] = useState(null)
    const handleLogin = () => setUser(true)
    const handleLogout = () => setUser(null)

    return (
        <div className="App">
            <div className="App-layout">
                <Authorization
                    user={user}
                    onAuthButtonClick={user ? handleLogout : handleLogin}
                />
            </div>
        </div>
    )
}

export default GreeterUser
