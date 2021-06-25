'use strict';

const {
    DNA_SEQUENCE_LETTERS
 } = require('../helper/consts/constants');

 const {
    checkIsArray,
    checkDnaMatchPattern,
    checkIfMatriceIsNXN,
    removeSubArrays
 } = require('../helper/utils/utils');

module.exports = (req, res, next) => {
    try {
        let dna = req.body.dna;

        if(!dna) {
            return res.status(302).json({
                error: 'Dna key not provided'
            })
        }

        if(!checkIsArray(dna)) {
            return res.status(302).json({
                error: 'Dna must be an array'
            })
        }
        dna = removeSubArrays(dna);

        if(!checkIfMatriceIsNXN(dna)) {
            return res.status(302).json({
                error: 'Dna provided is not a NxN'
            })
        }

        if(!checkDnaMatchPattern(dna.join('').toUpperCase(), DNA_SEQUENCE_LETTERS)) {
          return res.status(302).json({
                error: 'The dna sequence provided contain invalid letters'
            })
        }
        req.body.dna = dna;
        
        next();

    } catch (error) {
        console.log(error);
        throw Error;
    }
}