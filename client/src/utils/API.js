import axios from 'axios';

const search = async (query) => {
    axios.get(`https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=${query}`, { 
        headers: {
            'X-RapidAPI-Key': '9955ee2283mshf468a3708575933p1a5f7ajsn3523c1f4c315',
            'X-RapidAPI-Host': 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
        },
    })
}

export default { search };