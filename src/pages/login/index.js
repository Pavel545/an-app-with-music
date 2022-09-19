import { NavLink } from "react-router-dom";


export const Authorization = ({ user, onAuthButtonClick })=> {
  
    return (
      <div>
        
        <p>Залогинитесь</p>
        <button onClick={onAuthButtonClick}>
            {user ? 'Sign out':'Sign in'}
        </button>
        <NavLink
              to="/content"
            >Главная </NavLink>
            
      </div>
    );
  }