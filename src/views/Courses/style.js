import styled from "styled-components";


export const ContentLayout = styled.div`
  text-align: center;
`


export const CoursesContent = styled.div`
  display: flex;
  width: 100%;

  .card-course{
    background: #c4c4c4;
    border-radius: 22px;
    margin: 12px;
    padding: 12px;
    flex: 1;

    img{
      width: 100%;
      height: auto;
    }
  }
 `


export const ContactSection = styled.section`
  height: 100vh;
  text-align: center;
  
  .section{
    display: flex;
    justify-content: center;
    align-items: center;

    form{
      display: grid;
      flex: 1;
      padding: 25px;

      input{
        margin: 5px;
      }

      select{
        margin: 5px;
      }
      textarea{
        margin: 5px;
      }
    }

    img{
      flex: 1;
    }
  }
`