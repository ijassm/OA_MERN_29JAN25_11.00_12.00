import React from "react";
import { createRoot } from "react-dom/client";


// Functional Component
function Child1() {
  return <>
    <p>React is Declarative</p>
    <p>React is Declarative</p>
  </>

}
function Child2() {
  return <>
    <p>We can build Single Page Application with react</p>
    <p>We can build Single Page Application with react</p>
  </>

}
function Child3(a) {
  return <>
    <p>React is fast and efficient</p>
    <p>React is fast and efficient</p>
  </>

}


// Class Component
class Child4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state_data1: props.data1,
      state_data2: props.data2
    }
  }


  static getDerivedStateFromProps(props, state) {
    console.log(props, "props");
    console.log(state, "state");
    return {
      state_data1: "data updated1",
      state_data2: "data updated2",
    };
  }

  render() {
    return <>
      <p>React is {this.state.state_data1}</p>
      <p>React is {this.state.state_data2}</p>
    </>
  }
}

function Child5({ data1, data2 }) {
  // console.log(data1, "data1");
  // console.log(data2, "data2");

  return <>
    <p>I am learning {data1}</p>
  </>

}

let data = "react"

// console.log(`I am learning ${data}`);


function App() {
  return <main>
    <h1>hello react</h1>
    <Child1 />
    <Child2 />
    <Child3 />
    <Child4 data1={"Efficient"} data2={"scalable"} />
    {/* {Child4({data1})} */}
    <Child5 data1={data} data2={"JS"} />
    {/* {Child5(data)} */}
  </main>
}

// Create a root instance
const root = createRoot(document.getElementById("root"))

root.render(<App />)
