// export function Home() {
//     ❌ let name = "React"

import { useState } from "react"

//     const handleChange = () => {
//        ❌ name = "JavaScript"
//        ❌ document.querySelector("h2").textContent = "This is " + name
//         console.log(name)
//     }

//     return <>
//         <h1>Welcome to Home page</h1>
//         <h2>This is {name}</h2>
//         <button onClick={handleChange}>Change name</button>
//     </>
// }


export function Home() {
    const [state, setState] = useState("React");


    const handleChange = () => {
        // state[1]("Javascript")
        setState("Javascript")

    }

    return <>
        <h1>Welcome to Home page</h1>
        <h2>This is {state}</h2>
        <button onClick={handleChange}>Change name</button>
    </>
}


export function About() {
    return <h1>Welcome to About page</h1>
}