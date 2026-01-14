import { useState } from "react"

export default function Form() {
    //let [fullName, setFullName] = useState("Siddhi"); // init
    let [formData, setformData] = useState({
        fullName: "",
         password: "",
        userName: "",
       
    });

    // let handleNameChange = (event) => {
    //     //console.log(event.target.value);
    //     setFullName(event.target.value)
    // }
    let handleInputChange = (event) => {
        setformData((currData) => {
            return {
                ...currData,
                [event.target.name]: event.target.value
            };
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setformData({
            fullName: "",
            password: "",
            userName: "",
          
        })


    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input type="text" id="fullName" value={formData.fullName} name="fullName" placeholder="Enter Name" onChange={handleInputChange} />
            &nbsp;&nbsp;
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" value={formData.password} name="password" placeholder="Enter password" onChange={handleInputChange} />
            &nbsp;&nbsp;
            <label htmlFor="userName">User Name: </label>
            <input type="text" id="userName" value={formData.userName} name="userName" placeholder="Enter userName" onChange={handleInputChange} />
            &nbsp;&nbsp;
            <button>Submit</button>
        </form>
    )
}