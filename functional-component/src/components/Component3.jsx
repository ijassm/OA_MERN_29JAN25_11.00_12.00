import React from 'react'
import { Component4 } from './Component4'

export const Component3 = ({ data }) => {

    // console.log(data);

    return (
        <div>
            <h1>Component3 is render</h1>
            <Component4 data={data} />
        </div>
    )
}
