import { useEffect, useState } from "react";
import PrintCountryCard from "./printCountryCard";



const LoadCountriesData = () => {

    const [allCnt, setallCnt] = useState([])
    useEffect(() => {

        // fetch(`https://restcountries.com/v3.1/all`)
        fetch('localApi.json')
            .then(res => res.json())
            .then(data => setallCnt(data))
    }, [])

    const getLdata = () => {


        const localData = localStorage.getItem('card')

        if (localData) {

            return JSON.parse(localData)
        }
        else {

            return []

        }
    }

    const [visitedCnt, setVisitedCnt] = useState([])

    let xx = 1;
    const visitedHandel = (country) => {
        xx = xx + 1

        const data = { name: country.name.common, flag: country.flags.png }

        const cardData = getLdata();
        let cc = cardData.some(item => item.name === data.name)
        if (cc) {
            let ll = cardData.filter((word) => word.name!==data.name)
            // setVisitedCnt(ll)
            localStorage.clear();
            localStorage.setItem('card', JSON.stringify(ll))
            setVisitedCnt(ll)
        }
        else {
            cardData.push(data)
            localStorage.setItem('card', JSON.stringify(cardData))
            setVisitedCnt(cardData)
        }

    }


    useEffect(() => {
        setVisitedCnt(getLdata())

    }, [])




    return (
        <div>

            <div className="p-5 m-5 border-4">
                <h2 className="text-center text-4xl font-semibold">Visited Countries List</h2>
                <h5 className="text-2xl font-bold">Total Visited: {visitedCnt.length}</h5>
                <div className=" flex flex-wrap py-4 gap-3">
                    {
                        visitedCnt.map((i) =>

                            <div key={i.name + xx} className=" bg-gray-200 p-1 border-4 rounded-xl flex flex-col items-center">
                                <h3 className="text-xl font-semibold">{i.name}</h3>
                                <div className=" w-24 p-3 ">
                                    <img className="" src={i.flag} alt="" />
                                </div>
                            </div>)

                    }

                </div>
            </div>
            <div className=" grid grid-cols-3 gap-3">
                {
                    allCnt.map((country) =>

                        <PrintCountryCard key={country.ccn3 + xx} visitedHandel={visitedHandel} country={country}></PrintCountryCard>
                    )
                }
            </div>

        </div>
    );
};

export default LoadCountriesData;