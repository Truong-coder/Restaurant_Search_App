import axios from "axios";

// reuse
export default axios.create({
    // The baseURL property is going to be essentially the route URL that we want to make the request to
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 
        "Bearer Ox1dPyMFowdC1KnQxkg5khZeHnh2CEFUatNpYxFFTcppxtOeJhcBe3QzvCUyl3vDsE_ToYeaIJgnv142pnstFlAeSs6CQ6qIv7vS9tmzPzJhNhgnSFIlgE0AdCmzYnYx",

    },
});

// get request
// yelp.get('/search')

