import React, {useState} from "react";

const NewForm = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')

    function tap() {
        alert("Successfully")
    }

    return(
        <div className="reg">
            <form>
                <h1>Registration</h1>
                <input name="name" type="text" placeholder="Enter your name"/>
                <input name="surname" type="text" placeholder="Enter your surname"/>
                <input name="email" type="text" placeholder="Enter your Email-adress"/>
                <button onClick={tap}>Tap to send</button>
            </form>
        </div>
    )
}
export default NewForm;