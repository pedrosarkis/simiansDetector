MAX_IN_A_ROW = 3;
DNA_SEQUENCE_LETTERS = /^[ATCG]+$/;
DNA_INVALID_CHARACTER = [
    "ADGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
]; //contains invalid character
DNA_NOT_ARRAY =  [
    "ATGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
].join(''); //String dna

DNA_NOT_N_X_N = [
    "ATGCG",
    "CAGTG",
    "TTATG",
    "AGAAG",
    "CCCCT",
    "TCACT"
  ]; //DNA 5x6

module.exports = {
    MAX_IN_A_ROW,
    DNA_SEQUENCE_LETTERS,
    DNA_INVALID_CHARACTER,
    DNA_NOT_ARRAY,
    DNA_NOT_N_X_N
}