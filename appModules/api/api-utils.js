async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console. log(error);
    }
};

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
};

module.exports = getRandomElement;
module.exports = getData;