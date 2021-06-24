'use strict';

const {
    DNA_SEQUENCE_LETTERS
 } = require('../helper/consts/constants');

 const {
    checkIsArray,
    checkDnaMatchPattern
 } = require('../helper/utils/utils');

module.exports = (req, res, next) => {
    try {
        const { dna } = req.body;

        if(!checkIsArray(dna)) {
            return res.status(302).json({
                error: 'Dna must be an array'
            })
        }

        if(checkDnaMatchPattern(dna.join(',').toUpperCase, DNA_SEQUENCE_LETTERS)) {
          return res.status(302).json({
                error: 'The dna sequence provided contain invalid letters'
            })
        }
        next();

    } catch (error) {
        throw Error;
    }
}