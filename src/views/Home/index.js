import { useState } from 'react';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';

import { api } from '../../services/api';

import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';

import { Container, LoadStyle } from './style';
import animationData from '../../assets/animation/78494-loader.json'

function Home(){
  const [ isLoad, setIsLoad ] = useState(false);
  const [ data, setData ] = useState({}); 
  const [ zipcode, setZipCode ] = useState({});
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleZipValue = (e) => {
    e.preventDefault();
    setIsLoad(true);
    api.get(`${zipcode}/json`).then(
      res => {
        setData(res.data)
      }
    ).catch( err => toast.error('Algo deu errado') ).finally(
      () => setTimeout( () => {
        setIsLoad(false)
      }, 600)
    )
  }

  if(isLoad){
    return (
      <LoadStyle>
        <Lottie
          options={defaultOptions}
          width={300}
          height={300}
        />
      </LoadStyle>
    )
  }
  return(
    <>
      <HeaderComponent />
      <Container>
        <div className="first-section">
        <h1>Home</h1>
        <form onSubmit={handleZipValue}>
          <input 
            type="text" 
            placeholder="informe seu CEP" 
            onChange={ e => setZipCode(e.target.value)}
          />
          <input type="submit" value="Consultar" />
        </form>
        <hr />
        <div>
          <p>Logradouro: { data?.logradouro } </p>
          <p>Bairro: { data?.bairro }</p>
          <p>Cidade: { data?.localidade }</p>
          <p>Estado: { data?.uf }</p>
        </div>
        </div> 
      </Container>
      <FooterComponent />
    </>
  )
}

export default Home;