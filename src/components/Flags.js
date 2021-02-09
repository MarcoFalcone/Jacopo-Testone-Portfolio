import i18n from '../i18next'

import '../styles/Flags.css';

function Flags() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
 return (
    <div className='lang' id="lang">
    <img onClick={() => changeLanguage('en')} className='flag' src='https://ik.imagekit.io/7ol7k87qcca/Boia/uk_UhZQ6M9xz.png?tr=h-40,w-40' />
    <img onClick={() => changeLanguage('it')} className='flag' src='https://ik.imagekit.io/7ol7k87qcca/Boia/italy-national-flag_CDrrJm_o7m.jpeg?tr=h-40,w-40' />
    </div>
)
}

export default Flags
