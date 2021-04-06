import React from 'react';
import { Card } from '@material-ui/core';
import styled from '@emotion/styled';
import { getImage } from '../../avatars/avatarImages';

// const StyledCard = styled(Card)`
//   height: 100%;
// `;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  text-align: center;
  margin: auto;
`;

const AvatarImage = ({ type }: { type: string | null}) => {
  if (!type) return <></>;
  return (
    <Card style={{ backgroundColor: '#3d3d3d',   height: '100%'}} >
        <StyledImg src={getImage(type)} alt="avatar"/>
    </Card>
  );
};


export default AvatarImage;
