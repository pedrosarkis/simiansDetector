module.exports ={
    compareMatrices: (matriceA, matriceB) => matriceA.join('') === matriceB.join(''),
    checkIsArray: dna =>  Array.isArray(dna),
    checkDnaMatchPattern: (dna, pattern) => pattern.test(dna),

}