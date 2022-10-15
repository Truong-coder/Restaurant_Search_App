// add in all the logic that related to search request to the yelp API

import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    // add code to make request to yelp API
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    // Call this function to make API request

    const searchApi = async searchTerm => {
        console.log('Hi there!');
        // make a get type HTTP request and access the /search route
        // if we pass in a params property to the argument #2 of a Axios call, any key value pairs we put inside will
        // be automatically appended onto our request URL
        try {
            const response = await yelp.get('/search', {
            // Parameters should be in query string

                params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
        } catch (err) {
        setErrorMessage('Something went wrong');
        }
    };
    // Call searchApi when component is first rendered /
    //  searchApi('pasta') / BAD CODE
    useEffect(() => {
        searchApi('pasta');
    }, []);
        return [searchApi, results, errorMessage];
};

