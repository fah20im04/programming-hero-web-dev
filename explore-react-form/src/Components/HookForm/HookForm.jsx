import React from 'react';
import useInputField from '../../Hooks/useInputHooks';

const HookForm = () => {
    const [name,nameOnChange] = useInputField('')
    const [email,emailOnChange] = useInputField('');
    const[pass,pasOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit',name,email,pass)
    }

    return (
        <div>
            <form onSubmit={ handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} placeholder='name'/>
                <br />
                <input type="email" name="email" defaultValue={email} onChange={emailOnChange} placeholder='Email'/>
                <br />
                <input type="password" defaultValue={pass} onChange={pasOnChange} name="pass" id="" placeholder='password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;