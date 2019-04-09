const sortColumn = (array, columnToSort, dataType, order) => {
    const sortedArray = array;

    let sortingFunction = null;

    if (dataType === 'number' && order === 'asc') {
        sortingFunction = (a, b) => a[columnToSort] - b[columnToSort];
    }

    if (dataType === 'number' && order === 'desc') {
        sortingFunction = (a, b) => b[columnToSort] - a[columnToSort];
    }

    if (dataType === 'string' && order === 'asc') {
        sortingFunction = (a, b) => a[columnToSort].localeCompare(b[columnToSort]);
    }

    if (dataType === 'string' && order === 'desc') {
        sortingFunction = (a, b) => b[columnToSort].localeCompare(a[columnToSort]);
    }

    return sortedArray.sort(sortingFunction);
}

export default sortColumn;