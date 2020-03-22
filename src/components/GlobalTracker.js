import React,{useState,useEffect} from 'react';
import Axios from 'axios';


 const GlobalTracker = () => {

  
    const [confirmed,setConfirmed]=useState(0)
    const [recovered,setRecovered]=useState(0)
    const [deaths,setDeaths]=useState(0)
    const [Update,setUpdate]=useState(0)


    useEffect(() =>  {
         Axios.get('https://covid19.mathdro.id/api')
        
   
        .then(res=>[
            setConfirmed(res.data.confirmed.value),
            setRecovered(res.data.recovered.value),
            setDeaths(res.data.deaths.value),
            setUpdate(res.data.lastUpdate),
            
           
        ])
           
         .catch(err=>{
                console.log(err)
            })
    // eslint-disable-next-line
    },[]);
  
   

    return (
        <div className="container text-center">
            <h3 className="text-white">LastUpdate: {Update}</h3>
            <h1 className="text-white">Coronavirus COVID-19 Global Cases</h1>
    
              <div class="row">
    <div class="col-sm card bg-warning">
        <h3>Total confirmed</h3>
      {confirmed}
    </div>
    <div class="col-sm card  bg-success">
        <h3>Total recovered</h3>
      {recovered}
    </div>
    <div class="col-sm card bg-danger">
        <h3>Total deaths</h3>
      {deaths}
    </div>
  </div>
            
        </div>
    )
}
export default GlobalTracker;
