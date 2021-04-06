import React  from 'react';
import styled from '@emotion/styled';
import { avatarImages, getImage } from '../../avatars/avatarImages';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';


const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledToggleButton = styled(ToggleButton)`
  max-height: 100%;
  width: 150px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  margin: auto;
`;

const Avatars = ({defaultType, setType}: {
  defaultType: string,
  setType: React.Dispatch<React.SetStateAction<string>>
}) => {

  const handleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    type: string,
  ) => {
    setType(type);
  };

  return (
    <Container>
      <ToggleButtonGroup
        exclusive
        value={defaultType}
        onChange={handleChange}
        style={{   backgroundColor: '#505050' }}
      >
        {Object.keys(avatarImages).map(type =>
            <StyledToggleButton value={type} aria-label={type}>
              <StyledImg src={getImage(type)} alt="avatar"/>
            </StyledToggleButton>
          )
        }
      </ToggleButtonGroup>
    </Container>
  );
}


export default Avatars;
