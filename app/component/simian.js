'use strict';

//const { MAX_IN_A_ROW } = require('../helper/consts/constants');

const runMatrix = dna => {
    let fianchettoDiagonal = [];
    //fianchetto é uma forma de desenvolvimento do bispo no xadrez pelas longas diagonais
	let horizontal = [];
    let vertical = [];

    for(let row = 0; row < dna.length; row++) {
		const currentHorizontalLine = [];
        for(let column = 0; column < dna[row].length; column++) {
            if(row === column) {
                fianchettoDiagonal.push(dna[row][column]);
            }

			currentHorizontalLine.push(dna[row][column]);

			if(dna[row].length -1 === column) horizontal.push(currentHorizontalLine);

			if(!Array.isArray(vertical[column])) {
                handleVerticalAddition(vertical, dna[row][column], column);
                continue;
            }

            vertical[column].push(dna[row][column]);
        }
    }
    return {fianchettoDiagonal, vertical, horizontal};
}

const handleVerticalAddition = (array, dnaToAdd, column) => {
    array.push([]);
    array[column].push(dnaToAdd);
}

const checkSequence = chain => chain.some(dnaChain => getHasMoreThan3InARow(dnaChain));

const getHasMoreThan3InARow = dnaChain => {
    return dnaChain.some((value, index, dnaChain) => {
        return  index > 1 && value === dnaChain[index - 3] && value === dnaChain[index -2] && value === dnaChain[index - 1];
    })
}

module.exports = {
    checkSimianCombinations: dna => {
        const {horizontal, vertical, fianchettoDiagonal } = runMatrix(dna);

        return checkSequence([...horizontal, ...vertical, ...[fianchettoDiagonal]]);
    },
    getStats: dnaResearched => {
        const totalOfSimiansDetected = dnaResearched.filter(({isSimian}) => isSimian).length;

        const totalHumans = dnaResearched.length - totalOfSimiansDetected;

        return {
            countSimians: totalOfSimiansDetected,
            countHumans: totalHumans,
            ratio: totalOfSimiansDetected / totalHumans
        }
    }
}
