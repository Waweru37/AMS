import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import AthletesList from './Pages/AthletesList';  
import AddAthlete from './Pages/AddAthlete';  
import AthleteDetails from './Pages/AthleteDetails';  
import About from './Pages/About'; 


function RoutesTree() { 
    return (
        <div > 
        <Routes> 

        <Route path="AthletesList" element={<AthletesList/>}/>
		<Route path="AddAthlete" element={<AddAthlete/>}/>
	    <Route path="AthleteDetails" element={<AthleteDetails/>}/>
    	<Route path="About" element={<About/>}/>
         
        </Routes> 
        </div> 
     ); 
    } 
    
export default RoutesTree;