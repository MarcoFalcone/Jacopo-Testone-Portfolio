import './About.css';

const About = (props) => (
  <div className="aboutcont">
    <img className="profilo" src="https://ik.imagekit.io/7ol7k87qcca/Boia/index_Y7Z2b_opFvv9.jpg?tr=h-800,w-500" />
    <div className="txt">I am an independent filmmaker. Since 2013 I shot some short movies and videoclip between many different countries. I spent three years working and studying between England and Spain.
I work for some production companies since 2015, my aim is to come across new people in the film industry to build a team to shot a feature film.</div>
    <div className="closeabout" onClick={props.close} />
  </div>
)


export default About;
