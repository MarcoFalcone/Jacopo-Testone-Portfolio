import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import { useTranslation } from 'react-i18next';

import '../styles/Works.css';
import '../styles/Trailer.css';
import { content } from './Content'

const Card = (props) => (
  <div className='work'>
    <img className='img' src={props.img} />
    <p className='info'>{props.info}</p>
    <p className="title" onClick={props.showTrailer1 || props.showTrailer2 || props.showTrailer3}>{props.title}</p>
  </div>
)


function Cards(props) {
  const { t } = useTranslation();
  return (
    <div className="workscont">
      <Card img={content[0].img} info={t('card1')} showTrailer1={props.showTrailer1} title={t('title')} />
      <Card img={content[1].img} info={t('card2')} showTrailer2={props.showTrailer2} title={t('title')} />
      <Card img={content[2].img} info={t('card3')} />
      <Card img={content[3].img} info={t('card4')} showTrailer3={props.showTrailer3} title={t('title')} />
      <div className="closeworks" onClick={props.close}></div>
    </div>
)
}

const Trailer = (props) => (
  <div>
    <iframe className="trailer" src={props.trailer} type="video/mp4" controls allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
    <div className="closetrailer" onClick={props.closeTrailer}></div>
  </div>
)

class Works extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards : true,
      lightbox : false,
      trailer : ''
    }

    this.closeTrailer = this.closeTrailer.bind(this)
    this.showTrailer1 = this.showTrailer1.bind(this)
    this.showTrailer2 = this.showTrailer2.bind(this)
    this.showTrailer3 = this.showTrailer3.bind(this)
  }

  showTrailer1()  {
    this.setState({
      cards : false,
      lightbox : true,
      trailer : content[0].trailer
    })
  }

  showTrailer2()  {
    this.setState({
      cards : false,
      lightbox : true,
      trailer : content[1].trailer
    })
  }

  showTrailer3()  {
    this.setState({
      cards : false,
      lightbox : true,
      trailer : content[3].trailer
    })
  }

    closeTrailer()  {
      this.setState({
        cards : true,
        lightbox : false
      })
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
                  <animated.div className='workscont' style={props}>
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
