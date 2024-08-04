import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Home-rent.jpg';
import freshBurger from '../../assets/HMS.jpg';
import hipsster from '../../assets/Smart_recommend.jpg';
import fitLift from '../../assets/Online.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Arjun28-L/Online-_property_Booking"
          h3="Home Heaven"
         
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Arjun28-L/Hms"
          h3="Hospital Management System"
         
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Arjun28-L/Smart_Recommendation"
          h3="Smart Recommendation"
         
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Arjun28-L/Hotel-Vehicle_Booking_System"
          h3="Online Hotel & Vechile Renting"
          
        />
      </div>
    </section>
  );
}

export default Projects;
