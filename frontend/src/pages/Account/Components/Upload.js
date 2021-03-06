import React from 'react';
// import styled from 'styled-components';

import { UploadImage } from './UploadImage';
import { UploadProduct } from 'pages/Account/Components/UploadProduct';
// import { Card } from 'styledElements/Card';
import { H4 } from '../../../styledElements/Texts';
import { AccountPageContainer } from 'styledElements/Card';

// const UploadedProducts = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 500px;
//   height: 300px;
//   border: 1px solid black;
// `;

const Upload = () => {
  return (
    <>
      <H4 shadow="0 2px 2px black" backGroundColor="var(--wintergreen)">
        Upload a new prop
      </H4>

      <AccountPageContainer>
        <UploadImage />
        <UploadProduct />
      </AccountPageContainer>
    </>
  );
};

export default Upload;
