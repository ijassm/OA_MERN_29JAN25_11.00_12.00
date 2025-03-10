import React, { useState } from 'react'

export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     if (name === "name") {
    //         setFormData({ name: value, email: formData.email, password: formData.password })
    //     } else if (name === "email") {
    //         setFormData({ email: value, name: formData.name, password: formData.password })
    //     } else {
    //         setFormData({ password: value, name: formData.name, email: formData.email })
    //     }
    // }


    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     if (name === "name") {
    //         setFormData({ ...formData, name: value })
    //     } else if (name === "email") {
    //         setFormData({ ...formData, email: value })
    //     } else {
    //         setFormData({ ...formData, password: value })
    //     }
    // }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }


    const handleSubmit = (e) => {
        // console.log(e);
        e.preventDefault();
        console.log(formData);
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} value={formData.password} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    )
}
