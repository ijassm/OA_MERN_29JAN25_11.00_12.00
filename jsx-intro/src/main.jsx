import { Component } from "react";
import { createRoot } from "react-dom/client";
// import App, { About, Home, Demo } from "./App";
import { Home, About } from "./Function"


// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoritecolor: "red", count: 0 };
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoritecolor: "yellow" })
//         }, 1000)
//         // setInterval(() => {
//         //     this.setState({ count: this.state.count + 1 })
//         // }, 3000)
//     }
//     render() {
//         return (
//             <>
//                 <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//                 <h1>Count is {this.state.count}</h1>
//             </>
//         );
//     }
// }


// Create a root instance


// class Header extends Component {
//     constructor(props) {
//         super(props);
//         console.log(props, "props");
//         this.state = { favoritecolor: "red" };
//     }
//     static getDerivedStateFromProps(props, state) {
//         console.log("getDerivedStateFromProps called📞");
//         console.log(props, "props");
//         console.log(state, "state");

//         // return { favoritecolor: props.favcol };
//         return null
//     }
//     changeColor = () => {
//         this.setState({ favoritecolor: "blue" });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//                 <button type="button" onClick={this.changeColor}>Change color</button>
//             </div>
//         );
//     }
// }


const root = createRoot(document.getElementById("root"))

// new Header()
root.render(
    <>
        <Home />
        <About />
    </>
)