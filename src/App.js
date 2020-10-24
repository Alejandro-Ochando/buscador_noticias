import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';
import ListadoNoticias from './components/ListadoNoticias';


function App() {
  
  //Definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() => {
    
    const consultarAPI = async () => {
      
      const url =`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=fc7f5116acc04ed9a6c083119be519f4`
      const respuesta = await axios.get(url);

      guardarNoticias(respuesta.data.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
