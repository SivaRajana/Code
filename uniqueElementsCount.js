const arr = [-1,-1,-2,0,1,1,1,2,2,3]

//using default filter method
console.log(arr.filter((e,i)=>{
    return arr.indexOf(e) === i
}).length)


//using frequency object
const frequency = {}
arr.forEach(each =>{
    frequency[each] = (frequency[each] || 0) + 1
})
console.log(Object.keys(frequency).length)

//using pointers
let left = 0
let right = 1
let count = 0

while(left < arr.length){
    arr[left] - arr[right] === 0 ? right++ : (left = right, count++, right++);
}
console.log(count)

function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  let left = 0
  let right = 1
  while(right < arr.length){
      arr[left] - arr[right] === 0 ? right++:(++left, arr[left] = arr[right], right++)
    
  }
  console.log(left+1)
}

countUniqueValues([-1,-1,-2,0,1,1,1,2,2,3])
