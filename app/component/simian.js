'use strict';

const { MAX_IN_A_ROW } = require('../helper/consts/constants');

const runMatrix = dna => {
    const fianchettoDiagonal = [];
    //fianchetto é uma forma de desenvolvimento do bispo no xadrez pelas longas diagonais
	const horizontal = [];
    const vertical = [];
    const diagonal = [];
    const diagonalIndexes = {};

    for(let row = 0; row < dna.length; row++) {
		const currentHorizontalLine = [];
        for(let column = 0; column < dna[row].length; column++) {
            if(row === column) {
                fianchettoDiagonal.push(dna[row][column]);
            }

            if(row === 0 && column >= MAX_IN_A_ROW) {
                diagonalIndexes[column] = column;
                diagonal.push([dna[row][column]])
            }

            if(row !== 0 && diagonalIndexes[column]) {
                const index = Object.values(diagonalIndexes).findIndex(value => value === column);
                diagonal[index].push(dna[row][column - row]);
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
    return {fianchettoDiagonal, vertical, horizontal, diagonal};
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
        const {horizontal, vertical, fianchettoDiagonal, diagonal } = runMatrix(dna);

        return checkSequence([...horizontal, ...vertical, ...[fianchettoDiagonal], ...diagonal]);
    },
    getStats: dnaResearched => {
        const totalOfSimiansDetected = dnaResearched.filter(({ isSimian }) => isSimian).length;

        const totalHumans = dnaResearched.length - totalOfSimiansDetected;

        return {
            countSimians: totalOfSimiansDetected,
            countHumans: totalHumans,
            ratio: totalOfSimiansDetected / totalHumans
        }
    }
}
