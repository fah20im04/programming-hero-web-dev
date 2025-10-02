import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        if (password.length < 6) {
            setError('Passwor must be six carrecter or long')
        }
        else {
            setError('')
        }

    }

    const handleEmiailChange = e => {
        setEmail(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handlePasswordOnChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value);

        // if(password.length<6){
        //     setError('Passwor must be six carrecter or long')
        // }
        // else{
        //     setError('')
        // }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={handleNameChange} placeholder='name'/>
                <br />
                <input type="email" onChange={handleEmiailChange} defaultValue={email} name="email" placeholder='email' required />
                <br />
                <input type="password" name="password" placeholder='password'
                    onChange={handlePasswordOnChange} defaultValue={password} required />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;