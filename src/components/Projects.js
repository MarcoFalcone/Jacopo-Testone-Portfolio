import '../styles/Projects.css';

const Projects = (props) => (
  <div className="projectWrap">
   <section className='header'>
     <header className='titolo'>FELICE PER SEMPRE</header>
     <p>(WORK IN PROGRESS)</p>
   </section>
   <img alt='' className='page1' src="https://ik.imagekit.io/7ol7k87qcca/Boia/Felice_per_sempre_-_terza_stesura_prima_scena_pages-to-jpg-0001_Hv7EuYnLZ2AJ.jpg" />
   <img alt='' className='page2' src="https://ik.imagekit.io/7ol7k87qcca/Boia/ezgif-1-43d777a92742_GN19uaujhD.jpg" />
   <a className="more" href="mailto:jacopotestone@gmail.com">LEARN MORE</a>
    <div className="closeproject" onClick={props.close} />
  </div>
)


export default Projects;
