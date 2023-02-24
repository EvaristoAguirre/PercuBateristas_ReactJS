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
                    <h4>Nombre de canción</h4>
                    <div className='perculoops-reproductor-progreso'></div>
                    <div className='perculoops-reproductor-duracion'></div>
                    <div className='perculoops-reproductor-controladores'>
                        
                    <button className='btn-stop'>Stop</button>
                    <button className='btn-play'>Play</button>
                    <button className='btn-pausa'>Pausa</button>
                    </div>
                </div>
                <div class="perculoops-lista_de_temas">
                    <div class="item_1">
                        <div class="item-play">
                            <button>Play</button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 1</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button className='btn-descarga'>Descarga</button>
                        </div>
                        
                        <div class="item-duracion">
                            <p>5:24</p>
                        </div>
                    </div>

                    <div class="item_2">
                        <div class="item-play">
                            <button>Play</button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 2</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button>Descarga</button>
                        </div>
                        
                        <div class="item-duracion">
                            <p>3:54</p>
                        </div>
                    </div>

                    <div class="item_3">
                        <div class="item-play">
                            <button>Play</button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 3</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button>Descarga</button>
                        </div>
                        
                        <div class="item-duracion">
                            <p>1:44</p>
                        </div>
                    </div>

                    <div class="item_4">
                        <div class="item-play">
                            <button>Play</button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 4</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button>Descarga</button>
                        </div>
                        
                        <div class="item-duracion">
                            <p>5:24</p>
                        </div>
                    </div>

                    <div class="item_5">
                        <div class="item-play">
                            <button>Play</button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 5</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button>Descarga</button>
                        </div>
                        
                        <div class="item-duracion">
                            <p>3:54</p>
                        </div>
                    </div>

                    <div class="item_6">
                        <div class="item-play">
                            <button>Play</button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 6</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button>Descarga</button>
                        </div>
                        
                        <div class="item-duracion">
                            <p>1:44</p>
                        </div>
                    </div>

                    <div class="item_7">
                        <div class="item-play">
                            <button>Play</button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 7</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button>Descarga</button>
                        </div>
                        
                        <div class="item-duracion">
                            <p>3:54</p>
                        </div>
                    </div>

                    <div class="item_8">
                        <div class="item-play">
                            <button>Play</button>
                        </div>

                        <div class="item-nombre">
                            <p>Nombre canción 8</p>
                        </div>
                        
                        <div class="item-descarga">
                            <button>Descarga</button>
                        </div>
                        
                        <div class="item-duracion">
                            <p>1:44</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>


        </>
        
    )
}

export { Perculoops }