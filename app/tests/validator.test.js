const utils = require('../helper/utils/utils');
const constants = require('../helper/consts/constants');

describe("Utils", () => {

    it('Dna is not an array - return false', () => {
        expect(utils.checkIsArray(constants.DNA_NOT_ARRAY)).toStrictEqual(false);
    })

    it('Dna contains invalid letters - return false', () => {
        expect(utils.checkDnaMatchPattern(constants.DNA_INVALID_CHARACTER, constants.DNA_SEQUENCE_LETTERS)).toStrictEqual(false);
    })

    it('Dna it"s not a nXn - return false', () => {
        expect(utils.checkIfMatriceIsNXN(constants.DNA_NOT_N_X_N)).toStrictEqual(false);
    })
})