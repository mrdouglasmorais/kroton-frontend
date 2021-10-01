import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  padding: 12px 40px;
  align-items: center;
  justify-content: space-between;

  img{
    width: 150px;
    height: auto;
  }

  .link-content{
    margin-right: 40px;

    a{
      margin: 12px;
      text-decoration: none;
      background-color: #0C6DA9;
      color: #fff;
      padding: 8px;
      border-radius: 5px;
      transition: 0.6s;

      :hover{
        background-color: #25A4EA;
      }
    }
  }
`