import React from "react";

import profissional from "./assets/profissional.jpeg"
import projetos from "./assets/projetos.png"
import barbearia from "./assets/barbearia.png"
import converter from "./assets/converter.png"
import tempo from "./assets/tempo.png"

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
  Myprojects,
  ProjectsImg,
  Imagens,
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
              Desenvolvedor Front end
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
                <div>Html</div>
                <div>Css</div>
                <div>Javascript</div>
                <div>Git</div>
                <div>GitHub</div>
                <div>React.js</div>
                <div>Node.js</div>
                <div>PostgreSql</div>
                <div>Docker</div>
                <div>Styled-Components</div>
              </Myskillstwo>
            </Skills>
          </>
          <>
            <Myprojects>
              Meus Projetos
              <ProjectsImg>
                <div>
                  <Imagens alt='projetos' src={projetos} />
                  <p> Neste projeto utilizei eu utilizei o
                    framework React.js, junto com ele utilizei
                    o styled-components.
                    Aqui desenvolvi dua tela onde podemos colocar
                    o nome e a idade de qualquer pessoa e ficara
                    gravado na outra tela, usei o node.js como back-end.
                  </p>
                </div>
                <div>
                  <Imagens alt='projetos' src={barbearia} />
                  <p>
                    Neste projeto utilizei eu utilizei o
                    framework React.js, junto com ele utilizei
                    o styled-components.
                    Aqui desenvolvi dua tela onde podemos colocar
                    o nome e a idade de qualquer pessoa e ficara
                    gravado na outra tela, usei o node.js como back-end.
                  </p>
                </div>
                <div>
                  <Imagens alt='projetos' src={tempo} />
                  <p>
                    Neste projeto utilizei eu utilizei o
                    framework React.js, junto com ele utilizei
                    o styled-components.
                    Aqui desenvolvi dua tela onde podemos colocar
                    o nome e a idade de qualquer pessoa e ficara
                    gravado na outra tela, usei o node.js como back-end.
                  </p>
                </div>
                <div>
                  <Imagens alt='projetos' src={converter} />
                  <p>
                    Neste projeto utilizei eu utilizei o
                    framework React.js, junto com ele utilizei
                    o styled-components.
                    Aqui desenvolvi dua tela onde podemos colocar
                    o nome e a idade de qualquer pessoa e ficara
                    gravado na outra tela, usei o node.js como back-end.
                  </p>
                </div>
              </ProjectsImg>
            </Myprojects>
          </>
        </Container>
      </>
    </>
  )
}

export default App;
