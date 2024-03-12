import { useState } from "react";



const PrintCountryCard = ({country,visitedHandel}) => { 
const {name,flags,population}=country;
const [visited,setVisited]=useState(true);

const handelClick=(country)=>{
// setVisited(!visited)
visitedHandel(country)
}


    return (

        <div className="card bg-gray-200 shadow-lg card-compact p-4">
            <div className="flagContainer h-3/6 flex justify-center">
            <img className="h-full " src={flags.png} alt="" />
            </div>
            <div className="card-body">
                <h4 className="card-title"> Name: {name.common}</h4>
                <p className="">Population: {population}</p>
            </div>
            <div className="bottomVContainer card-body">
             <button onClick={()=>{handelClick(country);}} className={visited?"btn btn-sm text-xl bg-gray-400":"btn text-xl btn-sm"} >Visited {visited&&  <span className="text-xl  font-bold">✓</span>}</button>

            </div>
            
        </div>
    );
};

export default PrintCountryCard;