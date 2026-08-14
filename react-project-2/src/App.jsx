import Usercard from "./components/usercard";
import './App.css';
   import gandhi from './assets/gandhi.webp'
      import mp from './assets/mps.webp'
        import pc from './assets/pc.webp'
function App() {
  

  return (
    <div className='container'>
    <Usercard name="Mahatma Gandhi" desc="Freedom fighter" image={gandhi} style={{"border-radius":"10px"}} />
        <Usercard name="Maharana Pratap" desc="Yodha" image={mp}/>
            <Usercard name="PrithviRaj Chauhan" desc="Chauhan Dynasty" image={pc} />
    </div>
  )
}

export default App
