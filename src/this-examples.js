// "this" refers to the object that is executing the current function
// The value of "this" is determined by the how a function is called

// "this" keyword in global scope
export function Cat() {
  console.log("this ->", this); // this points to global window object
}

// "this" keyword in constructor function
export function Dog() {
  this.name = "felix";
  console.log(this); // Dog {name: "felix"}
}

// "this" keyword inside class
export class Mouse {
  constructor() {
    this.name = "mappy";
    console.log(this);
  }
}

export const video = {
  title: "Dark Knight",
  tags: ["thriller", "crime", "drama"],
  showTags: function () {
    let context = this; //"this" points to the video object since showTags is a method of video object
    this.tags.forEach(function (tag) {
      console.log(context, tag);
    });
  }
};

export function Identity() {
  this.name = "Saura";
  this.age = 26;
  this.printName = function () {
    let context = this;
    console.log(this.name + ", " + this.age);
    function showAge() {
      console.log("Age: ", context.age);
    }
    showAge();
  };
}

export function food(kind) {
  this.kind = kind;
  this.cook = cook;
  function cook(sec) {
    setTimeout(() => {
      console.log(this.kind + " cooked for " + sec + " seconds.");
    }, sec * 1000);
  }
}
