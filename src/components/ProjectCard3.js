import projImg1 from "../assets/img/Diseño/1.png";
import projImg2 from "../assets/img/Diseño/2.jpeg";
import projImg3 from "../assets/img/Diseño/3.png";
import projImg4 from "../assets/img/Diseño/4.png";
import projImg5 from "../assets/img/Diseño/5.png";
import projImg6 from "../assets/img/Diseño/6.png";
import projImg7 from "../assets/img/Diseño/7.png";
import projImg8 from "../assets/img/Diseño/8.png";
import projImg9 from "../assets/img/Diseño/9.jpg";
import projImg10 from "../assets/img/Diseño/10.png";
import projImg11 from "../assets/img/Diseño/11.jpg";


export const ProjectCard3 = ({ title, description, imgUrl }) => {
  return (
    
    <section id="galeria">
        <article>
            <div className="proj-imgbx">
    <img src={projImg1} />
    <div className="proj-txtx">
      <h4>Feed para instagram</h4>
      <span>Empresa de belleza</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg6} />
    <div className="proj-txtx">
      <h4>Publicidad para App</h4>
      <span>Empresa deportiva</span>
    </div>
    </div>
    
    </article>

    <article>
            <div className="proj-imgbx">
    <img src={projImg5} />
    <div className="proj-txtx">
      <h4>Feed de instagram y Facebook</h4>
      <span>Aplicación NES+</span>
    </div>
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg4} />
    <div className="proj-txtx">
      <h4>Publicidad para atraer a la comunidad</h4>
      <span>Empresa NES+</span>
    </div>
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg3} />
    <div className="proj-txtx">
      <h4>Post promocional</h4>
      <span>Empresa NES+</span>
    </div>
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg2} />
    <div className="proj-txtx">
      <h4>Mockup logo el Emunah</h4>
      <span>Distribuidora de productos de oficina y limpieza</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg7} />
    <div className="proj-txtx">
      <h4>Feed para distintas redes</h4>
      <span>Empresa de Marketing digital</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg8} />
    <div className="proj-txtx">
      <h4>Feed para distintas redes</h4>
      <span>Distribuidora de productos de oficina y limpieza</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg9} />
    <div className="proj-txtx">
      <h4>Flyer promocional para impresión</h4>
      <span>Consultorio dental</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg10} />
    <div className="proj-txtx">
      <h4>Horario de clases universitario</h4>
      <span>Tematica de Avatar</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg11} />
    <div className="proj-txtx">
      <h4>Mockup de Logo</h4>
      <span>Empresa de ropa</span>
    </div>
    </div>
    
    </article>
  </section>
    
  )
}