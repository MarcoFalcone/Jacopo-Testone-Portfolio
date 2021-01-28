import React from 'react'
import { Spring, Transition, animated } from 'react-spring/renderprops'
import '../styles/Works.css';
import '../styles/Trailer.css';
import { content } from './Content'

const Card = (props) => (
  <div class='work'>
    <img class='img' src={props.img} />
    <p class='info'>{props.info}</p>
    <p class="title" onClick={props.showTrailer1 || props.showTrailer2 || props.showTrailer3}>{props.title}</p>
  </div>
)

const Cards = (props) => (
    <div class="workscont">
      <Card img={content[0].img} info={content[0].info} showTrailer1={props.showTrailer1} title={content[0].title}/>
      <Card img={content[1].img} info={content[1].info} showTrailer2={props.showTrailer2} title={content[1].title}/>
      <Card img={content[2].img} info={content[2].info} />
      <Card img={content[3].img} info={content[3].info} showTrailer3={props.showTrailer3} title={content[3].title}/>
      <div class="closeworks" onClick={props.close}></div>
    </div>
)

const Trailer = (props) => (
  <div>
    <iframe class="trailer" src={props.trailer} type="video/mp4" controls allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
    <div class="closetrailer" onClick={props.closeTrailer}></div>
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
              config={{ duration: 500 }}
              >
              {show =>
                show && (props =>
                  <animated.div className='workscont' style={props}>
                  <Cards showTrailer1={this.showTrailer1} showTrailer2={this.showTrailer2} showTrailer3={this.showTrailer3} />
                  <div class="closeworks" onClick={this.props.close}></div>
                  </animated.div>)
              }
            </Transition>
            <Transition
              native
              items={this.state.lightbox}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              config={{ duration: 500 }}
              >
              {show =>
                show && (props =>
                  <animated.div class="cont" style={props}>
                   <Trailer trailer={this.state.trailer} closeTrailer={this.closeTrailer} />
                  </animated.div>)
              }
            </Transition>
          </div>
      )
      }
    }



export default Works;
