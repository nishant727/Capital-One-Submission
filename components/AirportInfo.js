import React from 'react';
import './AirportInfo.css';
import './Movies'

//Following format of workshop
function AirportInfo() { 
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        async function fetchOMDB() {
            const searchParam = encodeURIComponent(query);
            const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6952c71f &s=${searchParam}&r=json';
            console.log(apiURL);
            let reponse = await fetch(apiURL);
            response = await response.json();
            console.log(response.Search);
            setAirports  = (response.Search);
        }
        fetchOMDB();
        setQuery('');
    }
    return {
        <div className = "movieinfo">
            <form onSubmit = {handleSubmit}>
               <label htmlFor = "queryInput"> Search Movie Name: </label>
                <input
                    id = "queryInput"
                    type = "text"
                    value = {query}
                    onChange = {e => setQuery(e.target.value)}
                    />
                    <button className = "search">Submit</button>
                    </form>
                    <Movies movies = {movies}></Movies>
                </div>);
    }
}

export default AirportInfo;
