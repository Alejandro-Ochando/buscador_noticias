import React from 'react';
import styles from './Noticia.module.css';
import PropTypes from 'prop-types';


const Noticia = ({ noticia }) => {
    
    const { urlToImage, url, title, description, source } = noticia;
    
    const imagen = (urlToImage  || description) 
        ?   
            <div className="card-image">
                <img src={urlToImage} alt={title}/>
                <span className="card-title">{source.name}</span>
            </div>
        : 
            null;       


    return ( 
            <div className="col s12 m12 l11">
                <div className={`${styles.color} ${styles.margen} card`}>
                    {imagen}
                    <div className="card-content">
                    <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" amber darken-2  waves-effect waves-light btn "
                        >Ver Noticia Completa</a>
                    </div>
                </div>
            </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
};

export default Noticia;