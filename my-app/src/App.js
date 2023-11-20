import React from "react";

import profissional from "../src/assets/profissional.jpeg"

import {
  Header,
  H2,
  Ul,
  Li,
  Container,
  P,
  Image,
  ContainerSobre,
  Dev,
  Main,
  Title,
  Aboutme,
  Skills,
  Myskillsone,
  Myskillstwo,
  Stripe,
} from './styles'

function App() {

  return (
    <>
      <Header>
        <H2>Mateus Miranda</H2>
        <Ul>
          <Li>Home</Li>
          <Li>Sobre</Li>
          <Li>Projetos</Li>
          <Li>Contatos</Li>
        </Ul>
      </Header>
      <>
        <Container>
          <ContainerSobre>
            <P>
              Eu sou o Mateus Miranda!
              Desenvolvedor Web
            </P>
            <Image alt='Minha-foto' src={profissional} />
          </ContainerSobre>
          <Dev>
            Como desenvolvedor front-end, minha missão é
            fornecer um serviço de alta qualidade aos usuários,
            criando experiências incríveis e interfaces extremamente agradáveis.
          </Dev>
          <>
            <Main>
              <Title>
                Sobre Mim
              </Title>
              <Aboutme>
                Aqui você encontrará mais infotmações sobre mim, o que eu faço e minha habilidades atuais principalmente em termos de programação e tecnologia
              </Aboutme>
            </Main>
          </>
          <>
            <Skills>
              <Myskillsone>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Myskillsone>
              <Stripe>
              
              </Stripe>
              <Myskillstwo>
                Html    Css    Javascript
                GitHub   Git    React.js
                Node.js    PostgreSql
                Docker    Styled-Components
              </Myskillstwo>
            </Skills>

          </>
        </Container>
      </>
    </>
  )
}

export default App;
