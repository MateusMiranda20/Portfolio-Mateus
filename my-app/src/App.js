import React from "react";

import profissional from "../src/assets/profissional.jpeg"

import { Header, H2, Ul, Li, Container, P, Image, ContainerSobre, Dev, } from './styles'

function App() {

  return (
    <>
      <Header>
        <H2>Matues Miranda</H2>
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
            <Image alt='Minha-foto' src={profissional} />
            <P>
              Eu sou o Mateus Miranda!
              Desenvolvedor Web
            </P>
          </ContainerSobre>
          <Dev>
            Como desenvolvedor front-end, minha missão é
            fornecer um serviço de alta qualidade aos usuários,
            criando experiências incríveis e interfaces extremamente agradáveis.
          </Dev>
        </Container>

      </>
    </>
  )
}

export default App;
