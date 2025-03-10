import React, { useState } from 'react'
import { Component2 } from './Component2'

export const Component1 = () => {
    const [data, setData] = useState("JS")
    return (
        <div>
            <h1>Component1 Render</h1>
            <button onClick={() => setData("REACT")} >Change Data</button>
            <Component2 data={data} />
        </div>
    )
}
