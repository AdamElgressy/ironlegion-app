import styled from '@emotion/styled';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Drawer } from '@material-ui/core';
import Remove from '@material-ui/icons/Remove';
import { closeMissionAdder, openMissionAdder, unSelectAvatar } from './controlsSlice';
import MissionAdder from './MissionAdder';


const Container = styled.div`
  height: 100vh;
  width: 20vw;
`;

// const StyledImage = styled.img`
//   height: 60%;
//   width: 'auto';
// `;

const toggleMissionAdder = () => {
  
}


const SidePanel = () => {
 // const avatars = useAppSelector(state => state.avatars);
  const selectedAvatar = useAppSelector(state => state.controls.selectedAvatar);
  const dispatch = useAppDispatch();

  const open = selectedAvatar ? true: false;

  return (
    <Drawer open={open} variant={'persistent'} anchor={'left'}>
      <Container>
        <Remove onClick={() => dispatch(unSelectAvatar())} />
        <br/>
        <button onClick={() => dispatch(openMissionAdder())}>Show Mission Adder</button>
        <br/>
        <button onClick={() => dispatch(closeMissionAdder())}>Close Mission Adder</button>
        <br/>
        <br/>
        <br/>
        <MissionAdder />
      </Container>
    </Drawer>
  );
};

export default SidePanel;
