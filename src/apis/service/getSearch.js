const getSearch = (typeText) => {
    return fetch(`https://content.guardianapis.com/search?show-elements=all&show-fields=all&page=1&page-size=15&q=${typeText}&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        return data; 
})
    .catch((error) => {
        console.log(error);
        throw error; 
});
};
export default getSearch;
