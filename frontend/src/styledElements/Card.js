import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: grey;
  color: darkblue;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  min-height: 100px;
  width: 200px;
  background: grey;
  color: black;
`;

export const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 20rem;
  background: grey;
  color: white;
  border: 2px solid green;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 1px;
  padding: 0.5rem 0;
  width: 100vw;
  /* min-height: 10em; */
  background: lightgrey;
  padding-bottom: 10rem;
`;

export const BigSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  width: 100vw;
  height: 20em;
  background: lightgrey;
  & > .background {
    width: 100%;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.1em;
  padding-right: 1em;
  font-family: 'Lora', serif;
`;