import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [quote, setQuote] = useState([]);
  const [random, setRandom] = useState();
  const [loading, setLoading] = useState(true)
  
  const fetchQuote = async () => {
    
    
    try{
      const res = await axios.get("https://type.fit/api/quotes");
      console.log(res);
      setQuote(res.data);
    } catch (error){
      console.log(error);
    }

  };
   useEffect(() => {
    
      fetchQuote();
    
   }, []);
   
   const oneQuote = () => {
    let  randomNum = Math.floor(Math.random() * quote.length);
    setRandom(quote[randomNum]);
    setLoading(false)

   }
    
  return (
    <div className="container">
      <button className='btn' onClick={oneQuote} > quote of the day </button>
      {
        loading? <h2> loading...  </h2>
      : quote &&
      <div className='quote'>
        <h3>{random.text}</h3>
        <p>{random.author}</p>
      </div>
      }
     
    </div>
  )
}

export default App;