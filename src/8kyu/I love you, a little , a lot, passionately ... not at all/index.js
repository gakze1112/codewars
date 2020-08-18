function howMuchILoveYou(nbPetals) {
    return ['not at all','I love you','a little','a lot','passionately','madly'].find((element,index) => index === (nbPetals%6));
}

// 最佳解
const pharses = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly'
];

function howMuchILoveYou(nbPetals) {
    return pharses[nbPetals%pharses.length];
}