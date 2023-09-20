import Card from "./Card";
import styled from 'styled-components'

const DivSt = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:flex-start;
gap:15px;
text-decoration: none;
/* heigth:; */
`;


const Containers = ({characters, onClose}) => {

    return (
      <DivSt>
        {characters.map(({id,image,name,status,specie,origin,gender,key}) => (
          <Card
          key={id}
          onClose={onClose}
            id={id}
            name={name}
            image={image}
            status={status}
            specie={specie}
            origin={origin}
            gender={gender}
          />
        ))}</DivSt>
    );
}
export default Containers;