import React, { useState } from 'react';
import { Transition, animated } from 'react-spring/renderprops'
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'

import '../styles/Works.css';
import '../styles/Trailer.css';
import { content } from './Content'

const Card = (props) => {
  const [overlay, setOverlay] = useState("")

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1225px)'
  })

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  const toggleOver = () => {
    setOverlay(true)
  }

  const closeOver = () => {
    setOverlay(false)
  }

  return(
    <>
      {isDesktopOrLaptop &&
        <div className='work'>
          <img alt="" className='img' src={props.img} />
          <div className="over">
            <p className='title'>{props.title}</p>
            <p className='info'>{props.info}</p>
            <p className="button" onClick={props.showTrailer1 || props.showTrailer2 || props.showTrailer3}>{props.button}</p>
          </div>
        </div>
          }
      {isTabletOrMobileDevice && <div className='workcont'>
        <div className='work' onClick={toggleOver}>
          <img alt="" className='img' src={props.img} />
        </div>
          <Transition
            native
            items={overlay}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ duration: 100 }}
            >
            {show =>
              show && (anim =>
                <animated.div className="overlay" style={anim}>
                <div className="closeoverlay" onClick={closeOver}></div>
                  <p className='title'>
                  {props.title}
                  </p>
                  <p className='info'>{props.info}</p>
                  <p className="button" onClick={props.showTrailer1 || props.showTrailer2 || props.showTrailer3}>{props.button}</p>
                </animated.div>)
            }
          </Transition>
          </div>
          }
  </>
)
}

const Cards = (props) => {
  const { t } = useTranslation();
  return (
    <div className="workscont">
      <Card title={t('title1')} img={content[0].img} info={t('card1')} showTrailer1={props.showTrailer1} button={t('button')} />
      <Card title={t('title2')} img={content[1].img} info={t('card2')} showTrailer2={props.showTrailer2} button={t('button')} />
      <Card title={t('title3')} img={content[2].img} info={t('card3')} />
      <Card title={t('title4')}img={content[3].img} info={t('card4')} showTrailer3={props.showTrailer3} button={t('button')} />
    </div>
)
}

const Trailer = (props) => (
  <div>
    <iframe title="trailer" className="trailer" src={props.trailer} type="video/mp4" controls allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
    <div className="closetrailer" onClick={props.closeTrailer}></div>
  </div>
)

class Works extends React.Component {
  constructor() {
    super()
    this.state = {
      cards : true,
      lightbox : false,
      trailer : ''
    }
  }

  showTrailer1 = () => {
    this.setState({
      cards : false,
      lightbox : true,
      trailer : content[0].trailer
    })
  }

  showTrailer2 = () => {
    this.setState({
      cards : false,
      lightbox : true,
      trailer : content[1].trailer
    })
  }

  showTrailer3 = () => {
    this.setState({
      cards : false,
      lightbox : true,
      trailer : content[3].trailer
    })
  }

    closeTrailer = () => {
      this.setState({
        cards : true,
        lightbox : false
      })
    }

    showOverlay = () => {

    }

  render() {

        return (
          <div>
            <Transition
              native
              items={this.state.cards}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              config={{ duration: 400 }}
              >
              {show =>
                show && (props =>
                  <animated.div style={props}>
                  <Cards showTrailer1={this.showTrailer1} showTrailer2={this.showTrailer2} showTrailer3={this.showTrailer3} />
                  <div className="closeworks" onClick={this.props.close}></div>
                  </animated.div>)
              }
            </Transition>
            <Transition
              native
              items={this.state.lightbox}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              config={{ duration: 400 }}
              >
              {show =>
                show && (props =>
                  <animated.div className="cont" style={props}>
                   <Trailer trailer={this.state.trailer} closeTrailer={this.closeTrailer} />
                  </animated.div>)
              }
            </Transition>
          </div>
      )
      }
    }



export default Works;
