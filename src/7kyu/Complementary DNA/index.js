function DNAStrand(dna){
    return dna.replace(/./g, (char)=> DNAStrand.pairs[char] );
}

DNAStrand.pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C' 
};