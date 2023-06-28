import React, {useState,useEffect} from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Update() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [Checked, setChecked] = useState(false);
  const [id, setId] = useState(false);
  const navigate = useNavigate();

  const updateuser = async() => {
      await axios.put(API_URL + id, {
        firstName,
        lastName,
        Checked
      })
      navigate('/read')
  }
  useEffect(()=> {
    setId(localStorage.getItem('id'))
    setfirstName(localStorage.getItem('firstName'))
    setlastName(localStorage.getItem('lastName'))
    setChecked(localStorage.getItem('checked'))
  },[])
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
            <Button onClick={updateuser}>Update</Button>
        </Form>
  )
}

export default Update
