import React from 'react';
import './App.css';
import GlobalTracker from './components/GlobalTracker';
import CountryTracker from './components/CountryTracker';
import Footer from './components/footer'


function App() {
  return (
 
    <div className="container card bg-dark">
   <GlobalTracker/>
   <div style={{marginTop:'50px'}}>
  <CountryTracker/>
  </div>
  <div style={{marginTop:'50px'}}>
  <Footer/>
  </div>
    </div>
    
  );
}

export default App;
