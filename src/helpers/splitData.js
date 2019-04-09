const splitData = (array, chunk) => {
    const splittedArray = [];

    for (let i = 0, j = array.length; i < j; i+=chunk) {
        splittedArray.push(array.slice(i, i + chunk));
    }

    return splittedArray;
}

export default splitData;