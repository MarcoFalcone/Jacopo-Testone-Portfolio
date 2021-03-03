import { useTranslation } from 'react-i18next';

import '../styles/About.css';

const About = (props) => {
  const { t } = useTranslation();
  return (
  <div className='wrap'>
    <div className="aboutcont">
      <img alt="" className="profilo" src="https://ik.imagekit.io/7ol7k87qcca/Boia/WhatsApp_Image_2021-03-02_at_18.24.55_lwNsb3E3CZLJ.jpeg" />
      <p className="txt">{t('txt')}</p>
      <div className="closeabout" onClick={props.close} />
    </div>
  </div>
)
}


export default About;
