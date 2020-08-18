// 效能 : O(citiesOffered.length * citiesVisited.length) == O(n^2);
function conferencePicker (citiesVisited, citiesOffered) {
    const unvisited = citiesOffered.filter(current => !citiesVisited.includes(current));
    return unvisited.length ? unvisited[0] : 'No worthwhile conferences this year!';
}

// 優化
// O(n)
function conferencePicker (citiesVisited, citiesOffered) {
    const visited = new Set(citiesVisited);
    for(let current of citiesOffered){
        if(!visited.has(current)) return current;
    }

    return 'No worthwhile conferences this year!';
}