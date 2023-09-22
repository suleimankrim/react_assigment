import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Beers,BeersArray } from './types/BeersTypes';
import Card from './components/Card';

function App() {
  const [beersData, setbeersData] = useState<BeersArray>()
  useEffect(() => {
    const fetchData= async()=>{
    const {data} =await axios.get('https://api.punkapi.com/v2/beers');
      setbeersData(data);
    }
    fetchData();
  }, [])
  if (beersData === undefined) {
    return null;
  }
  
  return (
  <div className="grid grid-cols-3 gap-5 w-screen h-screen p-20 overflow-x-hidden">
    {
      beersData.map((beer:Beers,id)=>{
        return(
          <Card key={id} image={beer.image_url} name={beer.name}/>
        )
      })
    }
  </div>
  )
}

export default App
