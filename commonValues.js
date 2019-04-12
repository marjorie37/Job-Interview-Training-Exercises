function commonValues(values1, values2) {
    const tab = []
values1.forEach(elt => values2.forEach(el => elt === el ? tab.push(elt) : ""))
return tab.filter((elt, ind) => tab.indexOf(elt) === ind)
}


let result = commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7])
console.log(result);