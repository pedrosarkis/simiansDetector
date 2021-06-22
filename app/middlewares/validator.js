'use strict';

const {
    DNA_SEQUENCE_LETTERS
 } = require('../helper/consts/constants');

module.exports = (req, res, next) => {
    try {
        const { dna } = req.body;

        if(!Array.isArray(dna)) {
            return res.status(302).json({
                error: 'Dna must be an array'
            })
        }
        //aqui talvez tenha que validar pra ver se não é um array de obj, ou aray de numero ou coisas assim.

        const containsOnlyValidLetters = DNA_SEQUENCE_LETTERS.test(dna.join('').toUpperCase());

        if(!containsOnlyValidLetters) {
          return res.status(302).json({
                error: 'The dna sequence provided contain invalid letters'
            })
        }
        next();

    } catch (error) {
        throw Error;
    }
}