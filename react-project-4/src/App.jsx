
import { useState } from 'react'
import './App.css'
// import Card from './components/Card'
import Button from './components/button'
function App() {

const [count, setCount]=useState(0);
function handleClick(){
  setCount (count+1);
}
  return (
    <div>
      <Button incrementCount={handleClick} 
      text="Click Me">
        <h1>{count}</h1>
        </Button>


    {/* <Card name="Niyati Jhalani">
<h1>Best web-dev course</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipis</p>
  <p>hello everyone my name is niyatiiii</p>
  
    </Card>
    <Card children="mein ek child hun">

    </Card>

 */}


    </div>
  )
}

export default App
