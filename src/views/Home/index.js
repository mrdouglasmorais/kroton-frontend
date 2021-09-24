import { useState } from 'react';
import api from '../../services/api';

import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';

function Home(){
  const [ isLoad, setIsLoad ] = useState(false);
  const [ data, setData ] = useState({}); 
  const [ zipcode, setZipCode ] = useState({}); 

  const handleZipValue = (e) => {
    e.preventDefault();
    setIsLoad(true);
    api.get(`${zipcode}/json`).then(
      res => {
        setData(res.data)
      }
    ).catch( err => alert('Algo deu errado') ).finally(
      () => setIsLoad(false)
    )
  }

  if(isLoad){
    return (<h1>Carregando</h1>)
  }
  return(
    <>
      <HeaderComponent />
      <div>
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
      <FooterComponent />
    </>
  )
}

export default Home;