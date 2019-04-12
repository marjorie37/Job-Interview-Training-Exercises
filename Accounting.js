
    // Write an expression using higher-order array methods (say, filter and reduce) to compute the total value of the machines in the inventory array.

   
    const inventory = [
      {type:   "machine", value: 5000},
      {type:   "machine", value:  650},
      {type:      "duck", value:   10},
      {type: "furniture", value: 1200},
      {type:   "machine", value:   77}
    ]
  
    let totalMachineValue = inventory.filter(x => x.type === "machine").map(y => y.value).reduce((acc, curr) => acc + curr)
  
  
    console.log(totalMachineValue) // 5727
    // console.log(t);