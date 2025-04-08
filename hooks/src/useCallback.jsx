import React, { useState, memo, useCallback } from "react";

// const Todos = memo(({ todos, addTodo }) => {
//     console.log("child render");
//     return (
//         <>
//             <h2>My Todos</h2>
//             {todos.map((todo, index) => (
//                 <p key={index}>{todo}</p>
//             ))}
//             <button onClick={addTodo}>Add Todo</button>
//         </>
//     );
// });


// const App = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);

//     const increment = () => {
//         setCount((c) => c + 1);
//     };

//     const addTodo = () => {
//         setTodos((t) => [...t, "New Todo"]);
//     };

//     return (
//         <>
//             <Todos todos={todos} addTodo={addTodo} />
//             <hr />
//             <div>
//                 Count: {count}
//                 <button onClick={increment}>+</button>
//             </div>
//         </>
//     );
// };

// export default App;

const Todos = memo(({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
});


const App = () => {
    console.log("App is rendered");

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, []);

    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default App;
