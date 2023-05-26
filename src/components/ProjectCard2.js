import projImg1 from "../assets/img/ilustracion/1.jpg";
import projImg2 from "../assets/img/ilustracion/2.png";
import projImg3 from "../assets/img/ilustracion/3.png";
import projImg4 from "../assets/img/ilustracion/4.png";
import projImg5 from "../assets/img/ilustracion/5.jpg";
import projImg6 from "../assets/img/ilustracion/6.PNG";


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
    <img src={projImg2} />
    <div className="proj-txtx">
      <h4>Flexo Ghots Trick</h4>
      <span>ilustración personalizada</span>
    </div>
    </div>
    
    </article>

  </section>
    
  )
}