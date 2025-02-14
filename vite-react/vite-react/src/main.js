import react from "react";
import { createRoot } from 'react-dom/client'

const reactElement1 = react.createElement("article", { id: "top", className: "cls", style: { color: "red" } }, "React Element rendered ");
const reactElement2 = react.createElement("section", { id: "top", className: "cls", style: { color: "red" } }, "React Element rendered ");
const reactParentElement = react.createElement("main", { id: "top", className: "cls", style: { color: "red" } }, [reactElement1, reactElement2]);
const reactFragementElement = react.createElement(react.Fragment, {}, [reactElement1, reactElement2])
const htmlElement = document.createElement("main")

function Component() {
    return reactFragementElement
}

console.log(Component(), "component");


htmlElement.id = "top";
htmlElement.textContent = "HTML element";
htmlElement.className = "top";
htmlElement.style.color = "red";
htmlElement.appendChild(document.createElement("div"));
// console.log(htmlElement.style);
// document.querySelector("#app").appendChild(htmlElement);


createRoot(document.querySelector("#app")).render(Component())


// console.log(reactElement);
// console.log(htmlElement);


{/* <main>
    <section></section>
    <article></article>
</main> */}