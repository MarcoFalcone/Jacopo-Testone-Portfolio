import { useTranslation } from 'react-i18next';

import '../styles/About.css';

const About = (props) => {
  const { t } = useTranslation();
  return (
  <div className='wrap'>
    <div className="aboutcont">
      <img alt="" className="profilo" src="https://ik.imagekit.io/7ol7k87qcca/Boia/index_Y7Z2b_opFvv9.jpg?tr=h-800,w-500" />
      <p className="txt">{t('txt')}</p>
      <div className="closeabout" onClick={props.close} />
    </div>
  </div>
)
}


export default About;
