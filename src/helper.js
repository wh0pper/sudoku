class Helper {

  static arrayCompare(arr1) {
    var sorted1 = arr1;
    sorted1.sort();
    var arr2 = [1,2,3,4,5,6,7,8,9];
    if (sorted1.length != arr2.length) {
      return false;
    } else {
      for (var i=0; i<sorted1.length; i++) {
        if (sorted1[i] != arr2[i]) {
          return false;
        }
      }
      return true;
    }
  }

  // static arrayIntersect(arr1) {
  //   var arr2 = [1,2,3,4,5,6,7,8,9];
  //   var arr3 = arr1.filter(function(n) {
  //     return arr2.indexOf(n) !== -1;
  //   })
  //   console.log(arr3);
  //   return arr3;
  // }
}

export default Helper;
