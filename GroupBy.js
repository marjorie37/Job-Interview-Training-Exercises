// Write a function `groupBy(items, callback)`, which groups the elements by property.

  console.log(groupBy([
  {
    firstName: 'Jhon',
    lastName: 'Dou',
    birthYear: 1989,
    isActive: false
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    birthYear: 1989,
    isActive: false
  },
  {
    firstName: 'Alan',
    lastName: 'Rickman',
    birthYear: 1994,
    isActive: false,
  },
  {
    firstName: 'Somebody',
    lastName: 'Else',
    birthYear: 1989,
    isActive: true,
  },
  {
    firstName: 'Somebody',
    lastName: 'Man',
    birthYear: 1994,
    isActive: true,
  },
  ], (item, index, array) => [item.isActive])) 
  
  
function groupBy(items, callback){
return items.reduce((groups, item) => ({
  ...groups,
[callback(item)]: [...(groups[callback(item)] || []), item]
}), {})
}
  


  
  // { false: [{…}, {…}, {…}], true: [{…}, {…}] }