const getSports = (page,pageSize) => {
    return fetch(`https://content.guardianapis.com/search?section=sport&show-elements=all&show-fields=all&page=${page}&page-size=${pageSize}&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        return data; 
})
    .catch((error) => {
        console.log(error);
        throw error; 
});
};
export default getSports;
