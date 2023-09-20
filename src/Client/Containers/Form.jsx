import {useState} from 'react'
import validation from './validation.js';
import { Input,Button,P,Container } from './StyledComponents.jsx';

function Form (props)  {
    const {login} = props
    
    
    const [userData, setUserData] = useState({
      user: '',
      password: ''
    })
    
    const [errors, setErrors] = useState({
      user: '',
      password: ''
    })
    const handleChange = (event) => {
      
      const {name, value} = event.target

      setUserData({
          ...userData,
          [name]: value
      })
        
      setErrors(validation({
          ...userData,
          [name]: value
      }))
    }

   const handleSubmit = (event)=> {
    event.preventDefault()
    login(userData)

   }

    return (
      <Container>

        <form onSubmit={handleSubmit}>

          <label>Usuario : </label>
          <br />
          <Input
          
          type="email"
          placeholder="Ingresa tu Email..."
          name='user'
          onChange={handleChange}
          value={userData.user}  
          // autocomplete="email"
          />
          
          <P>{errors.user}</P>

          
          <label>Contraseña : </label>
          <br />
          <Input
            
            type="password"
            placeholder="Ingresa tu Password..."
            value={userData.password}
            name='password'
            onChange={handleChange}
            // autocomplete="new-password"
            />
            
           
            <P>{errors.password }</P>
            <br />
          <Button type='submit'>Login</Button>

        </form>

      </Container>
    );
}
export default Form;