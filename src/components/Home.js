import './Home.css';

const Home = (props) => (
    <div className='main'>
      <div className='name'>
        <p class='copy'>&copy; 2020</p>
        <p class='first'>jacopo</p>
        <p class='second'>testone</p>
    </div>
        <div className="bar">
          <div className="Works" onClick={props.showWorks}>WORKS</div>
          <div className="divide"></div>
          <div className="Contact" onClick={props.showContact}>PROJECTS</div>
          <div className="divide"></div>
          <div className="About" onClick={props.showAbout}>ABOUT</div>
        </div>
        <div class='links'>
        <a class="mail" href="mailto:jacopotestone@gmail.com">jacopotestone@gmail.com</a>
        <a href="https://www.imdb.com/name/nm7320332/" target='_blank'><img class="imdb" src="https://ik.imagekit.io/7ol7k87qcca/tr:w-1292,h-533,cm-extract,x-378,y-756/Boia/logo-imdb-computer-icons-imdb-69c3645192c9fa3f482f47169a89d42d_1__u3I3-KecS.png" /></a>
        <a href="https://www.instagram.com/jacopotestone/" target='_blank'><img class="insta" src="https://ik.imagekit.io/7ol7k87qcca/Boia/insta_tPGHuiq7Z.png" /></a>
        </div>
    </div>
)


export default Home;
