import React,{useState,useEffect} from 'react';
import Axios from 'axios';


 const CountryTracker = () => {

  
    const [confirmed,setConfirmed]=useState(0)
    const [recovered,setRecovered]=useState(0)
    const [deaths,setDeaths]=useState(0)
    const [countries,setCountries]=useState([])
    const [SelectCountry,setSelectCountry]=useState('Bangladesh')

     const newSelectCountry=SelectCountry.replace(/\s/g,'')
 
    useEffect(() =>  {
           Axios.get('https://covid19.mathdro.id/api/countries')
            .then(res=>{
                const countries = Object.keys(res.data.countries)
                setCountries(countries)
            })  
            .catch(err=>{
                console.log(err)})
        // eslint-disable-next-line
            },[]) 
       
    
    useEffect(() =>  {
         Axios.get(`https://covid19.mathdro.id/api/countries/${newSelectCountry}`)
         
           .then(result=>[
            console.log(result.data.confirmed.value),
            setConfirmed(result.data.confirmed.value),
            setRecovered(result.data.recovered.value),
            setDeaths(result.data.deaths.value),
           
        ])
           
        .catch(err=>{
            console.log(err)
           
        })       
         // eslint-disable-next-line    
    })


    const onChange=e=>{setSelectCountry(e.target.value);}

    return (
        <div className="container text-center">
            <h1 className="text-white">Specific country update</h1>
        
          
            
              <div class="row">
              <div class="col-sm ">
              <div className="form-group">
            <select onChange={e=> onChange(e)} className="form-control">
                <option>Select Country(Default Bangladesh)</option>
            {countries.map((country,i)=>(
            <option key={i}>{country}</option>  
            ))}
            </select>
            </div>
               </div>
    <div class="col-sm card bg-warning">
        <h3>confirmed</h3>
      {confirmed}
    </div>
    <div class="col-sm card bg-success ">
        <h3>recovered</h3>
      {recovered}
    </div>
    <div class="col-sm card bg-danger">
        <h3>deaths</h3>
      {deaths}
    </div>
  </div>
            
        </div>
    )
}
export default CountryTracker;