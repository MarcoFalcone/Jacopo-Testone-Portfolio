import './About.css';

const About = (props) => (
  <div className="aboutcont">
    <img className="profilo" src="https://ik.imagekit.io/7ol7k87qcca/Boia/tarantino_ypl9_fRiD.jpeg?tr=h-800,w-500" />
    <div className="txt">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
    <div className="closeabout" onClick={props.close} />
  </div>
)


export default About;
