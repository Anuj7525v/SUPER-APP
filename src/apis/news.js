import axios from "axios";


//const NEWS_API = process.env.REACT_APP_NEWS_API_KEY;
//const  NEWS_API = '1a873025f16247e79ed484f9e374f605'
export const fetchNewsData = async () => {
    let countryCode;
    if (localStorage.getItem("countryCode")) {
        countryCode = localStorage.getItem("countryCode");
        console.log(countryCode, " from localstorage");
    } else {
      /*  if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                fetchCountryCode(coords.latitude, coords.longitude).then((output) => {
                    countryCode = output;
                    console.log(countryCode, " from fetchLocation2");
                });
            });
        } */
            countryCode = await getCountryCodeFromGeolocation();
    }
     try{
    const { data, status } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=1a873025f16247e79ed484f9e374f605`
    );
    if (status === 200 && data.articles.length > 0 ) {
        return data.articles[0];
    }
    else{
        return null;
    }
}catch(error){
    console.log("Error fetching news data:",error);
    return null;
}
};


// Helper function to get country code using geolocation
const getCountryCodeFromGeolocation = async () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async ({ coords }) => {
                    try {
                        const countryCode = await fetchCountryCode(coords.latitude, coords.longitude);
                        resolve(countryCode);
                    } catch (error) {
                        console.error("Error fetching country code:", error);
                        resolve("us"); // Default to 'us' if there is an error
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    resolve("us"); // Default to 'us' if geolocation fails
                }
            );
        } else {
            console.error("Geolocation not supported");
            resolve("us"); // Default to 'us' if geolocation is not supported
        }
    });
};

const fetchCountryCode = async (latitude, longitude) => {
    try {
        const { data } = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const { countryCode } = data;
        localStorage.setItem("countryCode", countryCode);
        return countryCode;
    } catch (error) {
        console.error("Error fetching location:", error);
    }
};