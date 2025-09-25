import React, { use } from 'react';

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    const { message } = countries
    
    return (
        <div>
            <h1>In the countries:{ countries.length }</h1>
            <p>Message :  {message} </p>
            
        </div>
    );
};

export default Countries;