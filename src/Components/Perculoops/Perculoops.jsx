import React from 'react';
import './Perculoops.css';

const Perculoops = () => {


    return(
        
        <>
        <div id="seccion-perculoops" className='perculoops'>
            
            <div className='perculoops-indice'>
                <div className='perculoops-indice-semiCirculo'>
                    <h2>Perculoops</h2>
                </div>
            </div>
            <div className='contenedor-reproductor'>
                <div className='perculoops-reproductor'>
                    
                    <div className='reproductor-superior'>
                        <h4>Nombre de canción</h4>
                        <div className='perculoops-reproductor-controladores'>
                        
                        <button className='btn-stop'>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="#D96153" fill-opacity="0.8"/>
                                <rect x="9" y="9" width="17" height="17" fill="white"/>
                            </svg>
                        </button>
                        <button className='btn-play'>
                            <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24.0149" cy="23.0353" r="23.0353" fill="#D96153" fill-opacity="0.8"/>
                                <path d="M39.2515 23.0989L16.9505 36.896L16.6307 9.83267L39.2515 23.0989Z" fill="white"/>
                            </svg>
                        </button>
                        <button className='btn-pausa'>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="#D96153" fill-opacity="0.8"/>
                                <line x1="12.5" y1="8" x2="12.5" y2="28" stroke="white" stroke-width="3"/>
                                <line x1="22.5" y1="8" x2="22.5" y2="28" stroke="white" stroke-width="3"/>
                            </svg>

                        </button>
                    
                        </div>
                    </div>
                    
                    {/* <div className='perculoops-reproductor-progreso'></div>
                    <div className='perculoops-reproductor-duracion'></div> */}
                    
                    
                    <div className='perculoops-reproductor-btn-sesion'>
                        <h5>Iniciá sesión para descargar los audios. Si no tenés cuenta, create una:</h5>
                        <button className='btn-crear btn-perculoops'>Crear usuarix</button>
                    </div>
                </div>

                <div class="perculoops-lista_de_temas">
                    <div class="item_1">
                        <div class="item-play">
                            <button className='btn-play'>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#B78780"/>
                                    <path d="M21 12.2406L8.41632 21.1561V3.41883L21 12.2406Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 1</p>
                        </div>

                        <div class="item-duracion">
                            <p>5:24</p>
                        </div>

                        <div class="item-descarga">
                            <button className='btn-descarga'>Descargar <i className="bi bi-download"></i></button>
                        </div>
                        
                    </div>

                    <div class="item_2">
                        <div class="item-play">
                            <button className="btn-play">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#B78780"/>
                                    <path d="M21 12.2406L8.41632 21.1561V3.41883L21 12.2406Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 2</p>
                        </div>

                        <div class="item-duracion">
                            <p>3:54</p>
                        </div>

                        <div class="item-descarga">
                            <button className='btn-descarga'>Descargar <i className="bi bi-download"></i></button>
                        </div>
                        
                        
                    </div>

                    <div class="item_3">
                        <div class="item-play">
                            <button className="btn-play">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#B78780"/>
                                    <path d="M21 12.2406L8.41632 21.1561V3.41883L21 12.2406Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 3</p>
                        </div>

                        <div class="item-duracion">
                            <p>1:44</p>
                        </div>

                        <div class="item-descarga">
                            <button className='btn-descarga'>Descargar <i className="bi bi-download"></i></button>
                        </div>
                        
                        
                    </div>

                    <div class="item_4">
                        <div class="item-play">
                            <button className="btn-play">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#B78780"/>
                                    <path d="M21 12.2406L8.41632 21.1561V3.41883L21 12.2406Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 4</p>
                        </div>

                        <div class="item-duracion">
                            <p>5:24</p>
                        </div>

                        <div class="item-descarga">
                            <button className='btn-descarga'>Descargar <i className="bi bi-download"></i></button>
                        </div>
                        
                        
                    </div>

                    <div class="item_5">
                        <div class="item-play">
                            <button className="btn-play">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#B78780"/>
                                    <path d="M21 12.2406L8.41632 21.1561V3.41883L21 12.2406Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 5</p>
                        </div>

                        <div class="item-duracion">
                            <p>3:54</p>
                        </div>

                        <div class="item-descarga">
                            <button className='btn-descarga'>Descargar <i className="bi bi-download"></i></button>
                        </div>
                        
                        
                    </div>

                    <div class="item_6">
                        <div class="item-play">
                            <button className="btn-play">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#B78780"/>
                                    <path d="M21 12.2406L8.41632 21.1561V3.41883L21 12.2406Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 6</p>
                        </div>

                        <div class="item-duracion">
                            <p>1:44</p>
                        </div>

                        <div class="item-descarga">
                            <button className='btn-descarga'>Descargar <i className="bi bi-download"></i></button>
                        </div>
                        
                        
                    </div>

                    <div class="item_7">
                        <div class="item-play">
                            <button className="btn-play">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#B78780"/>
                                    <path d="M21 12.2406L8.41632 21.1561V3.41883L21 12.2406Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 7</p>
                        </div>

                        <div class="item-duracion">
                            <p>3:54</p>
                        </div>

                        <div class="item-descarga">
                            <button className='btn-descarga'>Descargar <i className="bi bi-download"></i></button>
                        </div>
                        
                        
                    </div>

                    <div class="item_8">
                        <div class="item-play">
                            <button className="btn-play">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#B78780"/>
                                    <path d="M21 12.2406L8.41632 21.1561V3.41883L21 12.2406Z" fill="white"/>
                                </svg>
                            </button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 8</p>
                        </div>

                        <div class="item-duracion">
                            <p>1:44</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button className='btn-descarga'>Descargar <i className="bi bi-download"></i></button>
                        </div>
                        
                        
                    </div>

                </div>

            </div>

        </div>


        </>
        
    )
}

export { Perculoops }