import React from 'react';
import Noticia from './Noticia';

const ListadoNoticias = ({ noticias }) => {
    return ( 

        <div>
            { noticias.map(noticia => (
                <Noticia />
            ))}
        </div>

     );
}
 
export default ListadoNoticias;