import React from 'react';

import styled from 'styled-components';

import { H4, P } from 'styledElements/Texts';
import { AccountPageContainer } from 'styledElements/Card';

import bin from '../../../images/bin.png';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid black;
  margin: 1em;
  padding: 1em;

  & > img {
    height: 25px;
  }

  & > input {
    height: 25px;
    width: 25px;
  }

  & > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Messages = () => {
  return (
    <>
      <H4 shadow="0 2px 2px black" backGroundColor="var(--wintergreen)">
        Inbox
      </H4>

      <AccountPageContainer>
        <MessageContainer>
          <input type="checkbox" />
          <P>This is a sample message</P>
          <img src={bin} alt="delete bin"></img>
        </MessageContainer>
        <MessageContainer>
          <input type="checkbox" />
          <P>This is a sample message.</P>
          <img src={bin} alt="delete bin"></img>
        </MessageContainer>
      </AccountPageContainer>
    </>
  );
};

export default Messages;
