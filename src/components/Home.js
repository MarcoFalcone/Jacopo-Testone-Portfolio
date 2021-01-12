import './Home.css';

const Home = (props) => (
    <div className='main'>
      <div className='name'>
        <span className='first'>Jacopo</span>
        <span className='second'>Testone</span>
    </div>
        <div className="bar">
          <div className="About" onClick={props.showAbout}>ABOUT</div>
          <div className="divide"></div>
          <div className="Works" onClick={props.showWorks}>WORKS</div>
          <div className="divide"></div>
          <div className="Contact" onClick={props.showContact}>CONTACT</div>
        </div>
    </div>
)


export default Home;
