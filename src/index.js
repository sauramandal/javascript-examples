import { Cat, Dog, Mouse, video, Identity, food } from "./this-examples";
import { removeDuplicatesBy } from "./array-operations";
import { deepCompare } from "./object-operations";

const key = "name";
const flightData = [
  { id: 1, name: "test1", src: "A", dest: "B" },
  { id: 2, name: "test2", src: "A", dest: "B" },
  { id: 3, name: "test1", src: "A", dest: "B" },
  { id: 4, name: "test1", src: "B", dest: "C" },
  { id: 5, name: "test3", src: "A", dest: "C" },
  { id: 6, name: "test4", src: "A", dest: "B" },
  { id: 7, name: "test1", src: "C", dest: "B" }
];
const person1 = {
  name: "Chris Anderson",
  address: {
    city: "Kolkata",
    state: "WB"
  }
};

const person2 = {
  address: {
    city: "Kolkata",
    state: "WB"
  },
  name: "Chris Anderson"
};

const results = removeDuplicatesBy(flightData, key);

console.log("results", results);

const areEqual = deepCompare(person1, person2);
console.log("Are objects equal ?", areEqual);
Cat();

let cat = new Dog(); // Dog {name: "felix"}

let mouse = new Mouse();
video.showTags();

let me = new Identity();
me.printName();

let soup = new food("soup");
soup.cook(2); // soup cooked for 2 seconds.
