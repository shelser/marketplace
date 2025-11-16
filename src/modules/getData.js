const getData = (str) => {
    return fetch('https://test-df3dd-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
};

export default getData;


