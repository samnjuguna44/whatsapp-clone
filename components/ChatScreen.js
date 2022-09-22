import React from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFile from "@material-ui/icons/AttachFile";
import Message from "./Message";
import { useCollection } from "react-firebase-hooks/firestore";
import { InsertEmoticon, Mic } from "@material-ui/icons";

function ChatScreen({ chat, messages }) {
  //assists in getting the user details
  const [user] = useAuthState(auth);
  const router = useRouter();

  //Snapshot to get messages from saved chats in database in ascending order and with time created
  //Give us all messages we will have in a given chat
  const [messagesSnapshot] = useCollection(
    db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  //function to show messages on the chat screen
  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...messagesSnapshot.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    }
  };

  return (
    <Container>
      <Header>
        <Avatar />

        <HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last seen ...</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer>
        {/* show messages */}
        {showMessages()}
        <EndOfMessage />
      </MessageContainer>

      <InputContainer>
        <InsertEmoticon />
        <Input />
        <Mic />
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;

const Container = styled.div``;

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }

  > p {
    font-size: 14px;
    color: gray;
  }
`;

const EndOfMessage = styled.div``;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
   padding: 30px;
   background-color: #e5ded8;
   min-height: 90vh;
`;

const InputContainer = styled.form`
   display: flex;
   align-items: center;
   padding: 10px;
   position: sticky;
   bottom: 0;
   background-color: white;
   z-index: 100; 
`;

const Input = styled.input`
   flex: 1;
   outline: 0;
   border: none;
   border-radius: 10px;
   background-color: whitesmoke;
   padding: 20px;
   margin-left: 15px;
   margin-right: 15px;
`;
