import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import {Hero} from '../../Components/Hero/Hero'


const Navbar = () => {

    const [mostrarHamb, setMostrarHamb] = useState (true);


    return(
        <>
        <div className='navbar-renglon-redes'>
               <div className='navbar-contenedor-renglon'>
                    <div className="nav-redes">
                                
                        <div><a href=""><i className="bi-facebook btn-facebook"></i></a></div>
                        <div><a href=""><i className="bi-instagram btn-instagram"></i></a></div>
                        <div><a href=""><i className="bi-youtube btn-youtube"></i></a></div>
                                
                    </div> 
                
                    <div className='nav-logueo'>
                        <button className='btn-inicio'>Iniciar sesión</button>
                        <button className='btn-crear'>Crear Usuarix</button>
                    </div>
                </div> 
               
        </div>

        <nav className='navbar'>
            <div className='navbar-contenedor'>

                    <div className="nav-logo">
                        <h1 className='nav-logo-texto'>PercuBateristasOnLine</h1>
                    </div>
                        
                    <div className='nav-contenedor-lista'>
                        <ul className={`nav-lista ${setMostrarHamb && "abierto"}`}>
                                <li><a href="#seccion-hero">Home</a></li>
                                <li><a href="#seccion-nosotrxs">Nosotrxs</a></li>
                                <li><a href="#seccion-perculoops">Perculoops</a></li>
                                <li><a href="#seccion-galeria">Imágenes</a></li>
                                <li><a href="#seccion-sesionista">Sesionista</a></li>
                                <li><a href="#seccion-contacto">Contacto</a></li>
                                
                         </ul>
                    </div>
                        
                    <div className={`btn-hamburguesa ${setMostrarHamb && "abierto"}`} onClick={()=>{setMostrarHamb(!setMostrarHamb)}}>
                        
                        <div className=''><i className="bi-list btn-hamburguesa-icono"></i></div>
                        
                    </div>                   
                
            </div>

        </nav>
        <Hero abierto={mostrarHamb}/>
        
        </>
        
    )
}

export { Navbar }