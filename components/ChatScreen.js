import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth } from '../firebase';

function ChatScreen() {
    //assists in getting the user details
    const [user] = useAuthState(auth);


  return (
    <Container>
        <h1>This is a chat</h1>
    </Container>
  )
}

export default ChatScreen;

const Container = styled.div``;