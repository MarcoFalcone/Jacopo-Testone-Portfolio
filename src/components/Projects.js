import '../styles/Projects.css';

const Projects = (props) => (
  <div className="projectWrap">
   <section className='header'>
     <header className='titolo'>FELICE PER SEMPRE</header>
     <p>(WORK IN PROGRESS)</p>
   </section>
   <img alt='' className='page1' src="https://ik.imagekit.io/7ol7k87qcca/Boia/WhatsApp_Image_2021-03-02_at_18.36.39_wWqvXRJznCQb.jpeg" />
   <img alt='' className='page2' src="https://ik.imagekit.io/7ol7k87qcca/Boia/WhatsApp_Image_2021-03-02_at_18.36.14_0U6dtWXl7.jpeg" />
   <a className="more" href="mailto:jacopotestone@gmail.com">LEARN MORE</a>
    <div className="closeproject" onClick={props.close} />
  </div>
)


export default Projects;
