import projImg1 from "../assets/img/ilustracion/1.jpg";
import projImg2 from "../assets/img/ilustracion/2.png";
import projImg3 from "../assets/img/ilustracion/3.png";
import projImg4 from "../assets/img/ilustracion/4.png";
import projImg5 from "../assets/img/ilustracion/5.jpg";
import projImg6 from "../assets/img/ilustracion/6.PNG";
import projImg7 from "../assets/img/ilustracion/7.jpeg";
import projImg8 from "../assets/img/ilustracion/8.jfif";
import projImg9 from "../assets/img/ilustracion/9.jfif";
import projImg10 from "../assets/img/ilustracion/10.png";


export const ProjectCard2 = ({ title, description, imgUrl }) => {
  return (
    
    <section id="galeria">
        <article>
            <div className="proj-imgbx">
    <img src={projImg1} />
    <div className="proj-txtx">
      <h4>Avatar de tierra</h4>
      <span>ilustración personalizada</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg6} />
    <div className="proj-txtx">
      <h4>Atardecer en Italia</h4>
      <span>ilustración personalizada</span>
    </div>
    </div>
    
    </article>

    <article>
            <div className="proj-imgbx">
    <img src={projImg5} />
    <div className="proj-txtx">
      <h4>31 minutos</h4>
      <span>ilustración personalizada</span>
    </div>
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg4} />
    <div className="proj-txtx">
      <h4>Overwatch Zenyatta</h4>
      <span>ilustración personalizada</span>
    </div>
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg3} />
    <div className="proj-txtx">
      <h4>Link y Malon</h4>
      <span>ilustración personalizada</span>
    </div>
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg7} />
    <div className="proj-txtx">
      <h4>Invitación de cumpleaños</h4>
      <span>ilustración de vectores</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg8} />
    <div className="proj-txtx">
      <h4>Han solo/Super crooks</h4>
      <span>ilustración personalizada</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg9} />
    <div className="proj-txtx">
      <h4>La historia de una vida</h4>
      <span>Obra propia</span>
    </div>
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg10} />
    <div className="proj-txtx">
      <h4>KirbyPanada</h4>
      <span>Mascota de una empresa</span>
    </div>
    </div>
    
    </article>


  </section>
    
  )
}