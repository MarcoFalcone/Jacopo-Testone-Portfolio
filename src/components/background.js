import './background.css';

const Background = () => (
    <div className='wrap1'>
      <video className="background" src="https://ik.imagekit.io/7ol7k87qcca/Boia/background_mJA2Y46sAH7as.m4v" type="video/mp4" autoPlay loop muted playsInline ></video>
      <video className="backgrounddevice" src="test.mp4" type="video/mp4" autoPlay loop muted playsInline ></video>
      <div className='shroud'></div>
    </div>
  );

export default Background;
