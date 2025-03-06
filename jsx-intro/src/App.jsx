import { Component } from "react"

// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "JSX"
//         }
//         console.log("constructor called");

//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log("getDerivedStateFromProps is called");
//         return null
//     }

//     changeName = () => {
//         this.setState({
//             name: "React"
//         })
//     }

//     componentDidMount() {
//         console.log("componentDidMount is called");
//     }


//     render() {
//         console.log("render is called");
//         return <>
//             <h1>Hello {this.state.name}!</h1>
//             <button onClick={this.changeName}>Change</button>
//         </>
//     }
// }


// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "JSX"
//         }
//         console.log("constructor called");

//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log("getDerivedStateFromProps is called");
//         return null
//     }

//     changeName = () => {
//         this.setState({
//             name: "React"
//         })
//     }

//     componentDidMount() {
//         console.log("componentDidMount is called");
//     }

//     shouldComponentUpdate() {
//         console.log("shouldComponentUpdate is called");
//         return false;
//     }


//     render() {
//         console.log("render is called");
//         return <>
//             <h1>Hello {this.state.name}!</h1>
//             <button onClick={this.changeName}>Change</button>
//         </>
//     }
// }


// export class Home extends Component {
//     render() {
//         return <h1>Welcome Home</h1>
//     }
// }

// export class About extends Component {
//     render() {
//         return <h1>Welcome About</h1>
//     }
// }


// export class Demo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoritecolor: "red" };
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoritecolor: "yellow" })
//         }, 1000)
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         document.getElementById("div1").innerHTML =
//             "Before the update, the favorite was " + prevState.favoritecolor;
//     }
//     componentDidUpdate() {
//         document.getElementById("div2").innerHTML =
//             "The updated favorite is " + this.state.favoritecolor;
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//                 <div id="div1"></div>
//                 <div id="div2"></div>
//             </div>
//         );
//     }
// }

// export default Home;