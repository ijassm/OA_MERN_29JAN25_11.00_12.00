import React from 'react'

export const Component4 = ({ data }) => {
    console.log(data);

    return (
        <div>
            <h1>Component4 is render</h1>
            <p>{data}</p>
        </div>
    )
}
