import React from 'react'
import { Component3 } from './Component3'

export const Component2 = ({ data }) => {
    // console.log(data);

    return (
        <div>
            <h1>Component2 Render</h1>
            <Component3 data={data} />
        </div>
    )
}
