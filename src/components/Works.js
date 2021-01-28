import React from 'react'
import { Spring, Transition, animated } from 'react-spring/renderprops'
import '../styles/Works.css';
import '../styles/Trailer.css';
import { content } from './Content'

const Trailer1 = (props) => (
  <div>
    <iframe class="trailer" src={content[0].trailer} type="video/mp4" controls allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
    <div class="closetrailer" onClick={props.closeTrailer}></div>
  </div>
)

const Trailer2 = (props) => (
  <div>
    <iframe class="trailer" src={content[1].trailer} type="video/mp4" controls allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
    <div class="closetrailer" onClick={props.closeTrailer}></div>
  </div>
)

const Trailer3 = (props) => (
  <div>
    <iframe class="trailer" src={content[3].trailer} type="video/mp4" controls allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
    <div class="closetrailer" onClick={props.closeTrailer}></div>
  </div>
)

const Card1 = (props) => (
  <div class='work'>
    <img class='img' src={props.img} />
    <p class='info'>{props.info}</p>
    <p class="title" onClick={props.showTrailer1}>WATCH TRAILER</p>
  </div>
)

const Card2 = (props) => (
  <div class='work'>
    <img class='img' src={props.img} />
    <p class='info'>{props.info}</p>
    <p class="title" onClick={props.showTrailer2}>WATCH TRAILER</p>
  </div>
)

const Card3 = (props) => (
  <div class='work'>
    <img class='img' src={props.img} />
    <p class='info'>{props.info}</p>
  </div>
)

const Card4 = (props) => (
  <div class='work'>
    <img class='img' src={props.img} />
    <p class='info'>{props.info}</p>
    <p class="title" onClick={props.showTrailer3}>WATCH SHOWREEL</p>
  </div>
)

const Cards = (props) => (
    <div class="workscont">
      <Card1 img={content[0].img} info={content[0].info} showTrailer1={props.showTrailer1}/>
      <Card2 img={content[1].img} info={content[1].info} showTrailer2={props.showTrailer2}/>
      <Card3 img={content[2].img} info={content[2].info} />
      <Card4 img={content[3].img} info={content[3].info} showTrailer3={props.showTrailer3}/>
      <div class="closeworks" onClick={props.close}></div>
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

    this.showTrailer1 = this.showTrailer1.bind(this)
    this.showTrailer2 = this.showTrailer2.bind(this)
    this.showTrailer3 = this.showTrailer3.bind(this)
    this.closeTrailer = this.closeTrailer.bind(this)
  }

    showTrailer1()  {
      this.setState({
        cards : false,
        lightbox : true,
        trailer : <Trailer1 closeTrailer={this.closeTrailer} />
      })
    }

    showTrailer2()  {
      this.setState({
        cards : false,
        lightbox : true,
        trailer : <Trailer2 closeTrailer={this.closeTrailer} />
      })
    }

    showTrailer3()  {
      this.setState({
        cards : false,
        lightbox : true,
        trailer : <Trailer3 closeTrailer={this.closeTrailer} />
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
                   {this.state.trailer}
                  </animated.div>)
              }
            </Transition>
          </div>
      )
      }
    }



export default Works;
