import { v4 as uuidv4 } from 'uuid';

const useSocket = (uuid: string) => {
  const WS_URL = process.env.REACT_APP_WS_URL;
  if (!WS_URL) {
    throw new Error('API URI not set');
  }

  // + "/client"
  const ws = new WebSocket(WS_URL);
  ws.onopen = () => {
    console.log('opening...');
    ws.send('hello server');
  };
  ws.onerror = (error) => {
    console.log('WebSocket error ' + error);
    console.dir(error);
  };
  ws.onmessage = (message) => console.log(message.data);

  return ws;
};

const clientId = uuidv4();

const Socket = () => {
  const ws = useSocket(clientId);
  //ws.send("some string");
  return (
    <>
      <button onClick={() => console.log('hey')}>Send</button>
    </>
  );
};

export default Socket;
