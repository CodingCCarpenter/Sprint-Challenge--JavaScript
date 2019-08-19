//ATTN!!! PARTS WERE COMMENTED OUT TO MAKE STRETCH WORK

// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype REFACTOR ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
//FROM PROTOTYPE.JS
// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }

  class CuboidMaker {
      constructor(length, width, height) {
          this.length = length;
          this.width = width;
          this.height = height;
      }
        //ORIGINAL
        // volume = function(){
        //     return (this.length * this.width * this.height)
        // }
        // surfaceArea = function(){
        //     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
        // }
  }
  
  class CubeMaker extends CuboidMaker{
      constructor(length, width, height){
          super(length, width, height);
          this.volume = function(){
            return (this.length * this.width * this.height)
          }
          this.surfaceArea = function(){
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
        }
      }
  }
  //FROM PROTOTYPE.JS
//   CuboidMaker.prototype.volume = function() {
//     return (this.length * this.width * this.height)
//   };
  
  //FROM PROTOTYPE.JS
//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
//   };
  
 
//   const cuboid = new CuboidMaker(4, 5, 5); //ORIGINAL   
  const cuboid = new CubeMaker(4, 5, 5);
  
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//COMMENTED OUT PARTS OF ABOVE TO MAKE THIS WORK, SINCE IT WAS ALMOST SORT OF ALREADY DONE THE FIRST TIME AROUND.