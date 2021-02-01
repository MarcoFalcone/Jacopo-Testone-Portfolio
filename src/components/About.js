import '../styles/About.css';

const About = (props) => (
  <div className='wrap'>
    <div className="aboutcont">
      <img className="profilo" src="https://ik.imagekit.io/7ol7k87qcca/Boia/index_Y7Z2b_opFvv9.jpg?tr=h-800,w-500" />
      <p className="txt">Films have always been my passion, my purpose. I spent my 20’s in traveling, studying abroad and watching movies. Then I started working with cinema, writing movies and directing videos. Now that I’ve just begun the thirties I’m ready to shoot my first feature film. In the meanwhile, I feel confident with working for production companies to keep contacts in the movie industry.</p>
      <div className="closeabout" onClick={props.close} />
    </div>
  </div>
)


export default About;
