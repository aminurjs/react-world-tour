import { useState } from 'react';
import './country.css';

const Country = ({country, handleVisitedCountries}) => {
    const {name, flags} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited': ''}`}>
            <img className='flag' src={flags.png} alt="" />
            <div>
                <h3>Name: {name?.common}</h3>
                <button onClick={() => handleVisited(true)}>{visited ? 'Visited': 'Visit'}</button>
                <button onClick={() => handleVisitedCountries(country)}>Add Visited</button>
            </div>
        </div>
    );
};

export default Country;