import './App.css';
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import React from 'react';
import AddUser from './components/AddUser';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
    const { loginWithRedirect,logout, isAuthenticated, isLoading, user} = useAuth0();

    console.log('user : ' , user);
    return (
      <div className='container'> 
        <Navbar title ="User App"/>
        <hr/>

        {isLoading ? <p>Loading...</p> : isAuthenticated
          ? (
              <>
                <div>
                  <img src={user.picture} alt={user.name}/>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
                <button className="btn btn-secondary w-20" onClick={() => logout()}>LoginOut</button><hr /><AddUser/><Users/>
              </>
            )
          : (<button className="btn btn-primary w-25" onClick={() => loginWithRedirect()}>Login</button>)
        }
      </div>
    );
  
}
export default App;
