import React from 'react';
import Diego from './img/Diego.jpg'
import Nacha from './img/nacha.jpg'
import Jan from './img/jan.jpg'

function Content() {
  return (
    <main class="content shadow">
        <h2 class="title">Integrantes</h2>
    
        <div class="subjects">
            <section class="subject">
                <h3>Diego Troncoso</h3>
                <img src= {Diego} alt="Foto de Diego Troncoso" class="profile-pic"/>
                <p>Ingeniería Civil Industrial</p>
            </section>
    
            <section class="subject">
                <h3>Ignacia Frega</h3>
                <img src= {Nacha} alt="Foto de Ignacia Frega" class="profile-pic"/>
                <p>Ingeniería Civil Industrial</p>
            </section>
    
            <section class="subject">
                <h3>Jan Moller</h3>
                <img src= {Jan} alt="Foto de Jan Moller" class="profile-pic"/>
                <p>Ingeniería Civil informática</p>
            </section>
        </div>

   </main>
  );
}

export default Content;