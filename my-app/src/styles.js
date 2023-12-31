import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 60px;
    background-color: #470684;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 52%;
`
export const H2 = styled.h2`
    font-size: 25px;
    color: #fff;
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: row;

    
    :hover{
        color: #000;
        transition: 0.8s all;
    }
`
export const Li = styled.li`
    font-size: 15px;
    list-style: none;
    padding: 30px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
`

export const Container = styled.div`
    height: 100%;
    background-color: #000;
`
export const ContainerSobre = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   padding: 50px;
`

export const P = styled.p`
    color: #470684;
    font-size: 40px;
    font-weight: 700;
    width: 260px;
    line-height: 1.1;
`
export const Image = styled.img`
    width: 30%;
    border-radius: 50px;
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3), 0 0 10px 0 rgba(255, 255, 255, 0.10);
`
export const Dev = styled.p`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 1.1;
  padding: 10px 200px;
`
export const Main = styled.main`
    text-align: center;
    margin-top: 170px;
`
export const Title = styled.h1`
    color: #470684;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.1;
`
export const Aboutme = styled.p`
    margin-top: 38px;
    font-size: 23px;
    color: #fff;
    font-weight: 400;
    text-align: center;
    line-height: 1.1;
    padding: 9px 240px;
`
export const Skills = styled.p`
    margin-top: 80px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 27% 20% 20%;
    column-gap: 20px;
    justify-content: center;
    justify-items: center;
`
export const Myskillsone = styled.p`
    margin-top: 38px;
    font-size: 23px;
    color: #fff;
    font-weight: 400;
`
export const Myskillstwo = styled.p`
    margin-top: 38px;
    font-size: 23px;
    color: #fff;
    font-weight: 400;
`
export const Stripe = styled.p`
    background-color: #fff;
    width: 2%;
    height: 98%;
    border-radius: 50px;
`
