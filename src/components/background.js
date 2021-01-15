import './background.css';

const Background = () => (
    <div className='wrap1'>
      <video className="background" src="https://ik.imagekit.io/7ol7k87qcca/Boia/anteprima_sito_FULL_HD_bn_W6g7spedU.mp4" type="video/mp4" autoPlay loop muted playsInline ></video>
      <video className="backgrounddevice" src="https://ik.imagekit.io/7ol7k87qcca/Boia/anteprima_sito_FULL_HD_bn_VERTICALE_xAGfn7HEi.mp4" type="video/mp4" autoPlay loop muted playsInline ></video>
      <div className='shroud'></div>
    </div>
  );

export default Background;
