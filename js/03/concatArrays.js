const concatArrays = (caracter, ...stringsArray) => {
    const flatenArrays = [...stringsArray].flat();
    const mySet = [...new Set(flatenArrays)];
    const cleanArray = mySet.filter(item => !item.includes(caracter));
    const trimmedArray = cleanArray.map(item => item.trimEnd());
    
    return trimmedArray;
}

export default concatArrays;

