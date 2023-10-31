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
  
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg6} />
   
    </div>
    
    </article>

    <article>
            <div className="proj-imgbx">
    <img src={projImg5} />
 
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg4} />
   
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg3} />
 
    </div>
    
    </article> <article>
            <div className="proj-imgbx">
    <img src={projImg7} />
   
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg8} />
   
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg9} />
    
    </div>
    
    </article>
    <article>
            <div className="proj-imgbx">
    <img src={projImg10} />
    
    </div>
    
    </article>


  </section>
    
  )
}