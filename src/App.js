import "./App.css";
import styled from "styled-components";
import GenerateGridLayout from "./GenerateGridLayout";

function App() {
  return (
    <>
      <MainContainer>
        <SimpleContainer>
          <GenerateGridLayout></GenerateGridLayout>
        </SimpleContainer>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: #282c34;
`;

const SimpleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: white;
`;
