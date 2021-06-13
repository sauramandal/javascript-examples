import { Cat, Dog, Mouse, video, Identity, food } from "./this-examples";

Cat();

let cat = new Dog(); // Dog {name: "felix"}

let mouse = new Mouse();
video.showTags();

let me = new Identity();
me.printName();

let soup = new food("soup");
soup.cook(2); // soup cooked for 2 seconds.
