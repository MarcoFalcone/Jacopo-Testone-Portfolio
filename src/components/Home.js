import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import { useTranslation } from 'react-i18next';

import '../styles/Home.css';

const Footer = (props) => (
  <footer className='links'>
    <a className="mail" href="mailto:jacopotestone@gmail.com">jacopotestone@gmail.com</a>
    <a href="https://www.imdb.com/name/nm7320332/" target='_blank' rel="noreferrer"><img alt="" class="imdb" src="https://ik.imagekit.io/7ol7k87qcca/tr:w-1292,h-533,cm-extract,x-378,y-756/Boia/logo-imdb-computer-icons-imdb-69c3645192c9fa3f482f47169a89d42d_1__u3I3-KecS.png" /></a>
    <a href="https://www.instagram.com/jacopotestone/" target='_blank' rel="noreferrer"><img alt="" class="insta" src="https://ik.imagekit.io/7ol7k87qcca/Boia/insta_tPGHuiq7Z.png" /></a>
  </footer>
)

const Home = (props) => {

  const { t } = useTranslation();

  return (
    <div className='main'>
      <section className='name'>
        <p className='copy'>&copy; 2021</p>
        <header className='first'>jacopo</header>
        <header className='second'>testone</header>
      </section>
        <nav className="bar">
          <p className="About" id="about" onClick={props.showAbout}>{t('about')}</p>
          <div className="divide"></div>
          <p className="Works" onClick={props.showWorks}>{t('works')}</p>
          <div className="divide"></div>
          <p className="Projects" onClick={props.showProjects}>{t('projects')}</p>
        </nav>
        <Transition
           native
           items={props.state}
           from={{ opacity: 0, marginTop: -100 }}
           enter={{ opacity: 1, marginTop: 0 }}
           leave={{ opacity: 0, marginTop: -100 }}
           config={{ mass: 1, tension: 80, friction: 17 }}
           >
           {show =>
             show && (props =>
               <animated.div style={props}>
               <Footer />
               </animated.div>)
           }
        </Transition>
    </div>
)
}

export default Home;
