import styledForm from 'styled-components'


//<---------Styles-------->//
export const Container = styledForm.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
height: 300px;
background-color:hsla(20,100%,60%, 0.7);
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
width: 500px; 
margin: 0 auto; 
font-size:20px;
color:hsl(77.94117647058823, 100%, 60%);
`;
export const P = styledForm.p`
color:red;
background-color:hsl(0, 0%, 0%);
`; 
export const Input = styledForm.input`
  font-size:20px;
  color:hsl(32, 100%, 50%);
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

`;
export const Button = styledForm.button`
  font-size: 20px;
  padding: 10px 20px; /* Añade un poco de espacio alrededor del botón */
  background-color: #ff9100;
  color: #daf10a;
  border: none;
  margin:10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: yellow;
    color:black;
    
  }
`;
export const StH2 = styledForm.h2`
box-shadow: 0 4px 8px hsla(60,70%,60%, 0.99);
background-color: hsla(120,25%,60%, 0.80);
display:flex;
text-decoration: none;


`;
export const CardContainer = styledForm.div`
width: 300px;
background-color: grey;
border-radius: 10px;
box-shadow: 0 4px 8px hsla(60,70%,60%, 0.99);
margin: 10px;
padding: 20px;
background-color: hsla(250,50%,75%, 0.4);
flex-direction: column;
align-items: center;
text-decoration: none;
`;
//<---------StylesEnd-------->//