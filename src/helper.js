class Helper {

  static arrayCheck(arr1) {
    if (arr1.length > 9) {
      return false;
    }
    var arr2 = arr1.filter(x => x>0)
    arr2.sort();
    for(var i = 0; i < arr2.length; i++) {
      if (arr2[i] === arr2[i-1]){
        return false;
      }
    }
    return true;
  }


}

export default Helper;
