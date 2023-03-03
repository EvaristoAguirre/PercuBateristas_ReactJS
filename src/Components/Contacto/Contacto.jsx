import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return(
        
        <>
        <div className="contacto">
            <div className='contacto-indice'>
                <div id="seccion-contacto" className='contacto-indice-semiCirculo'>
                    <h2>Contacto</h2>
                </div>
            </div>
                
            <div className='contacto-tarjeta'>
                <div className='contacto-tarjeta_A'>
                    <form className='tarjeta_A-form' action="">
                        <label htmlFor="">Nombre:</label>
                        <input type="text" maxLength={30} minLength={1}/>
                        <label htmlFor="" >Correo:</label>
                        <input type="email" name="email" id="email" required/>
                        <label htmlFor="">Comentario:</label>
                        <textarea name="" id="" cols="5" rows="5"></textarea> 
                        <button className='tarjeta_A-form-bnt' onClick={""}>Enviar</button>  
                    </form>
                </div>
                <div className='contacto-tarjeta_B'>
                    <div className='tarjeta_B-texto'>
                        <h4>Seguinos en nuestras redes</h4>   
                    </div>   
                    <div className='tarjeta_B-redes'>
                        
                        <div><a href="https://www.facebook.com/facuberjeli98?mibextid=ZbWKwL" target={'_blank'} rel="noreferrer"><i className="bi-facebook btn-facebook-2"></i></a></div>
                        <div><a href="https://instagram.com/facundoberjeli?igshid=ZDdkNTZiNTM=" target={'_blank'} rel="noreferrer"><i className="bi-instagram btn-instagram-2"></i></a></div>
                        <div><a href="https://youtube.com/@percubateristasonline" target={'_blank'} rel="noreferrer"><i className="bi-youtube btn-youtube-2"></i></a></div>
                        
                    </div>
                </div>
            </div>
                
        </div> 
        
        </>
           
        
       
        
    )
}

export { Contacto }