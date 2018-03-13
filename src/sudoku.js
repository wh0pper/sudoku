// export function Triangle(side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }
//
// Triangle.prototype.equilateral = function() {
//   if (this.side1 === this.side2 && this.side2 === this.side3) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// Triangle.prototype.isosceles = function() {
//   if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// Triangle.prototype.scalene = function() {
//   if ((this.side1 != this.side2 && this.side1 != this.side3 && this.side2 != this.side3 ) && (this.side1 + this.side2 >= this.side3 && this.side2 + this.side3 >= this.side1 && this.side3 + this.side1 >= this.side2)) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// Triangle.prototype.isTriangle = function () {
//   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//     return false;
//   } else {
//     return true;
//   }
// };
