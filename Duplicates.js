
function removeDuplicates(array){
    return array.filter((x,i) => array.indexOf(x) === i)
}


console.log(removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7])) // [1, 3, 7, 9, 8]