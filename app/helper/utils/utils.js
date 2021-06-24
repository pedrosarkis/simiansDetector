module.exports ={
    compareMatrices: (matriceA, matriceB) => matriceA.join('') === matriceB.join(''),
    checkIsArray: dna =>  Array.isArray(dna),
    checkDnaMatchPattern: (dna, pattern) => pattern.test(dna),
    checkIfMatriceIsNXN: matrice => !matrice.some(subArray => subArray.length !== matrice.length),
}