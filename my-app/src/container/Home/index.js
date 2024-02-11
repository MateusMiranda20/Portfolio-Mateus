import React from "react";

import profissional from "../../assets/profissional.jpeg"
import projetos from "../../assets/projetos.png"
import barbearia from "../../assets/barbearia.png"
import converter from "../../assets/converter.png"
import tempo from "../../assets/tempo.png"

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
  MyContacts,
  ContactTitle,
  Contacts,
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
                <div></div>
                <div>Java</div>
              </Myskillstwo>
            </Skills>
          </>
          <>
            <Myprojects>
              Meus Projetos
              <ProjectsImg>
                <div>
                  <a href="https://cadastro-de-pessoas-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Imagens alt='projetos' src={projetos} />
                  </a>
                  <p> Neste projeto utilizei o
                    framework React.js, junto com 
                    o styled-components, na parte do back-end eu utilizei o node.js e API rest.
                  </p>
                </div>
                <div>
                  <a href="https://iridescent-blini-672674.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Imagens alt='projetos' src={barbearia} />
                  </a>
                  <p>
                    Neste projeto utilizei Html, Css e Javascript vanilla.
                    Trazendo uma solução de melhorias para o cliente como agendamento e precços de serviços.
                  </p>
                </div>
                <div>
                  <a href="https://previsaotempoestados.netlify.app/" target="_blanck" rel="noopener noreferrer">
                    <Imagens alt='projetos' src={tempo} />
                  </a>
                  <p>
                    Neste projeto usei o Html, Css e Javascript vanila.
                    Utilizei uma API para buscar em tempo real a previsão do tempo.
                  </p>
                </div>
                <div>
                  <a href="https://verdant-kheer-54d48c.netlify.app/" target="_blanck" rel="noopener noreferrer">
                    <Imagens alt='projetos' src={converter} />
                  </a>
                  <p>
                    Neste projeto utilizei Html, Css e Javascript vanilla.
                    Utilizei uma API para buscar em tempo real os valores das moedas indicadas no projeto.
                  </p>
                </div>
              </ProjectsImg>
            </Myprojects>
          </>
          <MyContacts>
            <ContactTitle>
              Meus contatos
            </ContactTitle>
            <Contacts>
                <li> <a href="https://www.linkedin.com/in/mateus-miranda-inacio/" target="_blanck" rel="noopener noreferrer">Linkedin</a></li>
                <li>Email</li>
                <li>Whatsapp</li>
            </Contacts>
          </MyContacts>
        </Container>
      </>
    </>
  )
}

export default App;
