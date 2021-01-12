import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'


import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Cinema from './components/Cinema'
import Contact from './components/Contact'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      home : true,
      about : false,
      works : false,
      cinema : false,
      contact : false
    }
    this.showAbout = this.showAbout.bind(this)
    this.showWorks = this.showWorks.bind(this)
    this.showCinema = this.showCinema.bind(this)
    this.showContact = this.showContact.bind(this)
    this.close = this.close.bind(this)
    this.closeCinema = this.closeCinema.bind(this)
  }

  showAbout()  {
    this.setState({
      home : false,
      about : true
    })
  }

  showWorks()  {
    this.setState({
      home : false,
      works : true
    })
  }

  showCinema()  {
    this.setState({
      cinema : true,
      works : false
    })
  }

  showContact()  {
    this.setState({
      home : false,
      contact : true
    })
  }

  close()  {
    this.setState({
      home : true,
      about: false,
      works: false,
      contact: false
    })
  }

  closeCinema()  {
    this.setState({
      cinema : false,
      works: true
    })
  }


  render() {

      return (
        <div>
          <Transition
             native
             items={this.state.home}
             from={{ opacity: 0, marginTop: -100 }}
             enter={{ opacity: 1, marginTop: 0 }}
             leave={{ opacity: 0, marginTop: -100 }}
             config={{ mass: 1, tension: 180, friction: 45 }}
             >
             {show =>
               show && (props =>
                 <animated.div className='wrap' style={props}>
                  <Home showAbout={this.showAbout} showWorks={this.showWorks} showContact={this.showContact} />
                 </animated.div>)
             }
          </Transition>
          <Transition
            native
            items={this.state.about}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ duration: 500 }}
            >
            {show =>
              show && (props =>
                <animated.div className='wrap' style={props}>
                 <About close={this.close} />
                </animated.div>)
            }
          </Transition>
          <Transition
            native
            items={this.state.works}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ duration: 500 }}
            >
            {show =>
              show && (props =>
                <animated.div style={props}>
                 <Works close={this.close} showCinema={this.showCinema} />
                </animated.div>)
            }
          </Transition>
          <Transition
            native
            items={this.state.cinema}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ duration: 500 }}
            >
            {show =>
              show && (props =>
                <animated.div className='wrap' style={props}>
                 <Cinema closeCinema={this.closeCinema} />
                </animated.div>)
            }
          </Transition>
          <Transition
            native
            items={this.state.contact}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ duration: 500 }}
            >
            {show =>
              show && (props =>
                <animated.div className='wrap' style={props}>
                 <Contact close={this.close} />
                </animated.div>)
            }
          </Transition>
        </div>
      )
    }
  }



export default App;
