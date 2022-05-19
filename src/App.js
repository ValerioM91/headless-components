import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import "./index.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggler = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Wrapper className="App">
        <Button onClick={toggler}>Toggle Theme</Button>
        <TextWrapper>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit voluptates quam quibusdam, deserunt facilis fugit tenetur,
            aliquam molestiae, harum reiciendis voluptatibus eligendi? Eveniet
            sed perspiciatis repudiandae voluptates molestias vero quibusdam.
            Rerum, reprehenderit architecto inventore, cumque dolore qui ipsa
            eligendi asperiores consequatur nostrum hic provident molestias
            optio dolorum quis assumenda!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            cupiditate possimus numquam eveniet minus vel voluptatibus ea
            provident unde. Nobis placeat, soluta ipsa cupiditate at praesentium
            omnis dolorum veniam nostrum temporibus quo corporis, suscipit
            quidem nihil, sequi pariatur aspernatur necessitatibus fuga
            voluptate neque! Nihil molestiae molestias asperiores et eveniet
            maiores temporibus est incidunt voluptatum cumque tempora impedit
            inventore, veritatis doloribus.
          </p>
        </TextWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.default};
  min-height: 100vh;
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.padding.small};
  font-size: ${({ theme }) => theme.fontSize.content.medium};
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.button.default};
  border-radius: 5rem;
  border: none;
  font-weight: 700;
`;

const TextWrapper = styled.section`
  max-width: 50rem;
  margin: ${({ theme }) => theme.margin.large} auto;
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${({ theme }) => theme.fontSize.content.large};
  p {
    margin-bottom: ${({ theme }) => theme.margin.small};
  }
`;
