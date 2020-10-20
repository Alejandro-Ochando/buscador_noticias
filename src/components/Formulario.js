import React from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    return ( 

        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra tus Noticias por categoria</h2>
                
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large deep-orange lighten-1`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>

     );
}
 
export default Formulario;