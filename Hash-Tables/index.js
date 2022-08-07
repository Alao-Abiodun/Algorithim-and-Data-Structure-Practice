// class HashTables {
//   constructor(size) {
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i)) % this.data.length;
//     }
//     return hash;
//   }
// }

// const myHashTable = new HashTables(50);
// console.log(myHashTable._hash("sksksksk"));

const addUp = (arr, sum) => {
  // loop from the first element in the array.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; i++) {
      console.log(arr[i]);
      // console.log(arr[i], arr[j]);
      // if (arr[i] + arr[j] === sum) {
      //   return true;
      // }
    }
    break;
  }
  return "None of the array create a sum";
};
addUp([10, 15, 3, 7], 17);
