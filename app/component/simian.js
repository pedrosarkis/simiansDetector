'use strict';

//const { MAX_IN_A_ROW } = require('../helper/consts/constants');


const runMatrix = dna => {
    let fianchettoDiagonal = [];
    //fianchetto é uma forma de desenvolvimento do bispo no xadrez pelas longas diagonais
	let horizontal = [];
    let vertical = [];

    for(let i = 0; i < dna.length; i++) {
		const currentHorizontalLine = [];
        for(let j = 0; j < dna[i].length; j++) {
            if(i === j) {
                fianchettoDiagonal.push(dna[i][j]);
            }
			currentHorizontalLine.push(dna[i][j]);
			if(dna[i].length -1 === j) horizontal.push(currentHorizontalLine);

			if(!Array.isArray(vertical[j])) {
                handleVerticalAddition(vertical, dna[i][j], j)
                continue;
            }
            vertical[j].push(dna[i][j]);
        }
    }
    return {fianchettoDiagonal, vertical, horizontal};
}

const handleVerticalAddition = (array, dnaToAdd, j) => {
    array.push([]);
    array[j].push(dnaToAdd);
}

const checkSequence = chain => chain.some(dnaChain => getHasMoreThan3InARow(dnaChain));

// const getHasMoreThan3InARow = dnaChain => dnaChain.some((value, index, dnaChain) => index > 1 && value === dnaChain[index - 2] && value === dnaChain[index - 1]);

const getHasMoreThan3InARow = dnaChain => {
    return dnaChain.some((value, index, dnaChain) => {
        return  index > 1 && value === dnaChain[index - 3] && value === dnaChain[index -2] && value === dnaChain[index - 1]
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
