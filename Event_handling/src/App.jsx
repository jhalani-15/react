import { useState } from 'react'

import './App.css'

function App() {
  function handleclick(){
    alert("I am clicked"); 
     
  }
  function mouse(){
    alert("Para ke upar mouse leke aye ho"); 
  }
  function handleinputchange(e){
    console.log("value till now: ", e.target.value);
}
function handlesubmit(e){
  e.preventDefault();
  //i am writing y custom behaviour down
  alert("Form submit kardu kya");
}


  return (
    <div>
    {/* immediate invokation */}
{/* <button onClick={alert("Button click hua h") }>
  click me
</button>  */}

<button onClick={() => alert("Button is clicked")}>
click me
</button> 
      {/* <form action="" onSubmit={handlesubmit}>
         <input type="text" onChange={handleinputchange}/>
     <button type='submit '>
      Submit
     </button>
      </form> */}


      {/* <p onMouseOver={mouse} style={{border:"1px solid black"}}>
        i am para





      </p>
      <button onClick={handleclick} 
      style={{border:"2px solid red"} }>
        Click me 
      </button> */}
    </div>
  )
}

export default App
