import styled from "styled-components";
import Search from "./components/search";
import "./styles.css";

const Title = styled.p`
  font-size: 2rem;
  color: #eeeeee;
  letter-spacing: 0.15em;
  line-height: 2em;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: #eeeeee;
  letter-spacing: 0.15em;
  line-height: 2em;
`;

export default function App() {
  return (
    <div className="App">
      <Title>Welcome to Book Info</Title>
      <SubTitle>Helps in searching technology books information</SubTitle>
      <Search />
    </div>
  );
}
