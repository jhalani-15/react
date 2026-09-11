
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
 const [Isloggedin, Setloggedin]=useState(true);

// if(Isloggedin){
// return 
// (<LogoutBtn/>
// )}
// else{
// return (
// <LoginBtn/>
// )}

// <div>
//   {Isloggedin ? <LogoutBtn /> : <LoginBtn />}
// </div>

return (
  <div>
    <h1>Welcome to react series </h1>
  </div>
)

}

export default App
