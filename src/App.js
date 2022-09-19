import { AppRoutes } from "./routes";
import { useState } from "react";
import { Authorization } from "./pages/login";



function App() {
  
  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ login: "taradam" });
  const handleLogout = () => setUser(null);


  return (
    <div className="App">
      <div className="App-layout">
        <Authorization
        user={user}
        onAuthButtonClick={user ? handleLogout : handleLogin}/>
        
      </div>
    </div>
  );
}

export default App;