import React from 'react';
import './AirportInfo.css';

//Following format of workshop
function AirportInfo() { 
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        async function fetchOMDB() {
            const searchParam = encodeURIComponent(query);
            const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6952c71f';
            console.log(apiURL);
            let reponse = await fetch(apiURL);
            response = await response.json();
            console.log(response.Search);
            setAirports  = (response.Search);
        }
        fetchOMDB();
        setQuery('');
    }
    return;
}

export default AirportInfo;
