import React, { Component } from 'react';
import './Layout.css';
import './Components.css';
import './App.css';
import Navbar from './component/navbar/navbar'

const menuItems = [
  {
    label: "arquitectura de marca",
    divId: "arquitectura-de-marca",
    className: "",
    lastWord: "magenta",
    id: 0
  },
  {
    label: "diseño editorial",
    divId: "diseño-editorial",
    className: "",
    lastWord: "menta",
    id: 1
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="main-section first-section">
          <div className="main-span first-slide">
            <Sidespan/>
            <h1 className="top-buffer">MANUEL VILLALOBOS</h1>
            <div className="separator"><h1 className="color-purple subline">ARBOLEDA</h1></div>
            <h3>Arquitectura <span className="color-magenta">de marca</span><br/> Diseño <span className="color-menta">Editorial</span></h3>
            <h3 className="tel"><span className="color-purple">+57</span> 318 637 8476</h3>
            <h5><span className="bold">villalobos</span>arboleda<span className="color-purple">@</span>gmail<span className="color-purple">.com</span></h5>
          </div>
        </section>
        <section>
          <div className="main-span second-slide color-back-magenta" id="arquitectura-de-marca">
            <div className="section-title">
              <span className="title"><span className="color-magenta">manuel villalobos</span><br/>arboleda</span>
            </div>
            <div className="title"><h1>ARQUITECTURA DE</h1></div>
            <div className="right-nav-bar">
              <h1>MARCA</h1>
              <ul>
                <li><span>2Live</span></li>
                <li><span>Qiao</span></li>
                <li><span>Café & Bohemia</span></li>
                <li><span>Mocoa Samay</span></li>
                <li><span>Gran Maestro</span></li>
                <li><span>Varios</span></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={0}/>
            <div className="left-nav-bar text-left">
              <span className="title">2LIVE LIGHTSTYLE</span>
              <p className="color-pink">Colectivo de producción
                audiovisual con énfasis
                en fashion, beauty y
                corporativa. Es el proyecto
                personal de tres artistas
                que se materializa en una
                marca con un objetivo
                innovador y de status,
                trabajan en torno a los
                estilos de vida LIFESTYLE de
                personalidades, celebridades
                e influenciadores con
                empresas reconocidas en
                Colombia</p>
              <a href="http://www.2livestyle.com/" className="color-magenta">www.2livestyle.com</a>
                <footer className="text-left">
                  <span className="uppercase">portafolio de <span className="color-pink">diseño</span> <span className="name bold"><span className="color-magenta">manuel villalobos</span> arboleda</span></span>
                </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/2live1.png" alt="" style={{width: '100%'}}/></div>
              <div className="footer text-left"><img src="images/2live2.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={0}/>
            <div className="left-nav-bar text-left">
              <span className="title uppercase">qiao <br/> medicina alternativa</span>
              <p className="color-pink">Un grupo de tres médicos
                generales con estudios en
                medicina alternativa decidió
                convertir en realidad un
                sueño... un proyecto. Éste es el
                resultado de la fusión de dos
                conceptos precisos: La Vara
                de Asclepio, que representa
                la medicina (de una menara
                más tradicional); y el Yin Yang
                que sintetiza los principios de
                equilibrio de las corrientes de
                pensamiento oriental.</p>
              <a href="http://www.qiao.com.co/" className="color-magenta">www.qiao.com.co</a>
              <footer className="text-left">
                <span className="uppercase">portafolio de <span className="color-pink">diseño</span> <span className="name bold"><span className="color-magenta">manuel villalobos</span> arboleda</span></span>
              </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/qiao.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={0}/>
            <div className="left-nav-bar text-left">
              <span className="title uppercase">almar<br/>La cevichería</span>
              <p className="color-pink">Un grupo de tres médicos
                generales con estudios en
                medicina alternativa decidió
                convertir en realidad un
                sueño... un proyecto. Éste es el
                resultado de la fusión de dos
                conceptos precisos: La Vara
                de Asclepio, que representa
                la medicina (de una menara
                más tradicional); y el Yin Yang
                que sintetiza los principios de
                equilibrio de las corrientes de
                pensamiento oriental.</p>
              <a href="http://www.qiao.com.co/" className="color-magenta">www.qiao.com.co</a>
              <footer className="text-left">
                <span className="uppercase">portafolio de <span className="color-pink">diseño</span> <span className="name bold"><span className="color-magenta">manuel villalobos</span> arboleda</span></span>
              </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/almar.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={0}/>
            <div className="left-nav-bar text-left no-break small">
              <span className="title uppercase">A. HOTEL MOCOA SAMAY</span>
              <p className="color-pink">Complejo turístico ubicado<br/>en Putumayo.</p>
              <span className="title uppercase">B. CAFÉ GRAN MAESTRO</span>
              <p className="color-pink">Tienda y marca de café.</p>
              <span className="title uppercase">C. ANGÉLICA BERNAL</span>
              <p className="color-pink">Deportista paralímpica<br/>de alto rendimiento.</p>
              <span className="title uppercase">D. LORD CAMVS</span>
              <p className="color-pink">Marca personal.</p>
              <span className="title uppercase">E. STRATEGOS</span>
              <p className="color-pink">Cabezote para publicación<br/>periódica de historia bélica.</p>
              <span className="title uppercase">F. CIUDAD MULTIPLE</span>
              <p className="color-pink">Tesis de pregrado de<br/>Carolina Guachetá.</p>
              <span className="title uppercase">G. MIDNIGHT SUN CHESS</span>
              <p className="color-pink">Ajedrez temáico de ángeles<br/>y demonios.</p>
              <span className="title uppercase">H. RUGELES DURÁN</span>
              <p className="color-pink">Arquitectos.<br/>Propuesta de renovación.</p>
              <span className="title uppercase">J. KAVIAR DESAYUNOS</span>
              <p className="color-pink">Servicio especial a domicilio</p>
              <footer className="text-left">
                <span className="uppercase">portafolio de <span className="color-pink">diseño</span> <span className="name bold"><span className="color-magenta">manuel villalobos</span> arboleda</span></span>
              </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/samay.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span second-slide color-back-menta" id="diseño-editorial">
            <div className="section-title">
              <span className="title"><span className="color-menta">manuel villalobos</span><br/>arboleda</span>
            </div>
            <div className="title uppercase"><h1>Diseño</h1></div>
            <div className="right-nav-bar">
              <h1>EDITORIAL</h1>
              <ul>
                <li><span>Angélica Bernal Villalobos</span></li>
                <li><span>Boceto</span></li>
                <li><span>Shock</span></li>
                <li><span>Ciudad Múltiple</span></li>
                <li><span>Varios</span></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={1}/>
            <div className="left-nav-bar text-left">
              <span className="title">Angélica Bernal Villalobos<br/>Deportista Paralímpica</span>
              <p className="color-menta">Un grupo de tres médicos
                generales con estudios en
                medicina alternativa decidió
                convertir en realidad un
                sueño... un proyecto. Éste es el
                resultado de la fusión de dos
                conceptos precisos: La Vara
                de Asclepio, que representa
                la medicina (de una menara
                más tradicional); y el Yin Yang
                que sintetiza los principios de
                equilibrio de las corrientes de
                pensamiento oriental.</p>
              <a href="http://www.qiao.com.co/" className="color-menta">www.qiao.com.co</a>
              <footer className="text-left">
                <span className="uppercase">portafolio de <span className="color-menta">diseño</span> <span className="name bold"><span className="color-menta">manuel villalobos</span> arboleda</span></span>
              </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/ab.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={1}/>
            <div className="left-nav-bar text-left">
              <span className="title">BOCETO LA REVISTA</span>
              <p className="color-menta">Edición general y concepto
                gráfico de Boceto. Revista
                institucional de Taller 5 Centro
                de Diseño. Este proyecto reúne
                estudiantes del los últimos
                semestres de fotografía y
                diseño gráfico para crear
                semestralmente una revista que
                maneje temas de interés común
                para todos los estudiantes de
                diseño. Esta versión de Boceto
                alcanzó tal nivel de complejidad
                que duró un año y medio en
                circulación.</p>
              <a href="http://www.taller5.edu.co/" className="color-menta">www.taller5.edu.co</a>
              <footer className="text-left">
                <span className="uppercase">portafolio de <span className="color-menta">diseño</span> <span className="name bold"><span className="color-menta">manuel villalobos</span> arboleda</span></span>
              </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/boceto.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={1}/>
            <div className="left-nav-bar text-left">
              <span className="title">REVISTA SHOCK</span>
              <p className="color-menta">Proceso de selección del equipo
                editorial de El Espectador,
                Cromos y Shock.
                Todos los artículos, recursos
                fotográficos y fuentes fueron
                dados para formular una
                propuesta de diagramación
                ajustándose a los parámetros
                del manual de estilos gráficos
                de la revista Shock.</p>
              <a href="http://www.shock.co/" className="color-menta">www.shock.co</a>
              <footer className="text-left">
                <span className="uppercase">portafolio de <span className="color-menta">diseño</span> <span className="name bold"><span className="color-menta">manuel villalobos</span> arboleda</span></span>
              </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/shock.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={1}/>
            <div className="left-nav-bar text-left">
              <span className="title">CIUDAD MÚLTIPLE</span>
              <p className="color-menta">Portafolio de arquitectura de
                Carolina Guacheta, realizado
                para aplicar a estudios de
                maestría en Londres.
                Maneja tres proyectos: dos
                concursos y su trabajo de grado
                realizado en el año 2009. Esta
                propuesta de diseño explora
                una paleta de colores vivos para
                cada capítulo, logrando una
                visual impactante y clara para la
                presentación de los proyectos
                arquitectónicos.</p>
              <footer className="text-left">
                <span className="uppercase">portafolio de <span className="color-menta">diseño</span> <span className="name bold"><span className="color-menta">manuel villalobos</span> arboleda</span></span>
              </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/cm.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
        <section>
          <div className="main-span third-slide">
            <Navbar menuItems={menuItems} index={1}/>
            <div className="left-nav-bar text-left small">
              <span className="title">A.QUINTO DE NOVIEMBRE</span>
              <p className="color-menta">
                <span className="numerator">A1.</span> Páginas internas.<br/>
                <span className="numerator">A2.</span> Contraportada.</p>
              <span className="title">B. CULTURA TUMACO</span>
              <p className="color-menta">Poster infográfico del desarrollo
                inmaterial y producción cultural
                de la comunidad indígena
                Tumaco-La Tolita.</p>
              <span className="title">C. TUBOLETA.COM</span>
              <p className="color-menta">Vive Tu Boleta, look & feel para
                campaña publicitaria de redes
                sociales.</p>
              <span className="title">D. BROCHURE OPTILENTES</span>
              <p className="color-menta">Portafolio corporativo
                de la principal óptica del
                departamento del Putumayo.</p>
              <span className="title">E. MAGAZINE SUR</span>
              <p className="color-menta">Revista institucionas de
                historia y teoría del diseño.</p>
              <footer className="text-left">
                <span className="uppercase">portafolio de <span className="color-menta">diseño</span> <span className="name bold"><span className="color-menta">manuel villalobos</span> arboleda</span></span>
              </footer>
            </div>
            <div className="body">
              <div className="banner text-left"><img src="images/quinto.png" alt="" style={{width: '100%'}}/></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function Sidespan() {
  return (
    <div className="first-span">
      <div className="second-span">
      </div>
    </div>
  )
}

export default App;
