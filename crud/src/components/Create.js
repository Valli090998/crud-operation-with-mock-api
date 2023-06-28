import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [Checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const postData = async () => {
        console.log(firstName);
        console.log(lastName);
        console.log(Checked);
        
        await axios.post(API_URL, {
            firstName,
            lastName,
            Checked,
        
            
        })
        navigate('/read')
    }
    return (
        <Form className='form'>
            <Form.Field>
                <label>First Name</label>
                <input value={firstName}
                    onChange={event => setfirstName
                        (event.target.value)} placeholder="Enter First Name" />
            </Form.Field>
            <br />
            <Form.Field>
                <label>Last Name</label>
                <input value={lastName}
                    onChange={event => setlastName
                        (event.target.value)}
                    placeholder="Enter Last Name" />
            </Form.Field>
            <br />
            <Form.Field>
                <Checkbox checked={Checked}
                    onChange={() => setChecked(!Checked)}
                    label="Agree the terms & conditions" />
                    
            </Form.Field>
            <br/>
            <Button onClick={postData}> Submit </Button>
        </Form>
    )
}

export default Create
