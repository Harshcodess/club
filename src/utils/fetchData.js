export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
         method: "GET",
         headers: {
           "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
           "X-RapidAPI-Key":
             "e1d28da472mshb7ed3c1e3d152efp1597efjsn7b5e9fdaea6a",
         },
       };

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
