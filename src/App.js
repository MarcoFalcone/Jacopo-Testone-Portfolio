import React from 'react'
import { Spring, Transition, animated } from 'react-spring/renderprops'

import Background from './components/background';
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import Trailer from './components/Trailer'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      home : true,
      about : false,
      works : false,
      contact : false
    }

    this.showAbout = this.showAbout.bind(this)
    this.showWorks = this.showWorks.bind(this)
    this.showContact = this.showContact.bind(this)
    this.close = this.close.bind(this)
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

  render() {

        return (
        <div>
          <Spring
             from={{ opacity: 0 }}
             to={{ opacity: 1 }}
             >
             {props => <div style={props}>
             <Background />
             </div>}
          </Spring>
          <Transition
             native
             items={this.state.home}
             from={{ opacity: 0, marginTop: -100 }}
             enter={{ opacity: 1, marginTop: 0 }}
             leave={{ opacity: 0, marginTop: -100 }}
             config={{ mass: 1, tension: 70, friction: 15 }}
             >
             {show =>
               show && (props =>
                 <animated.div className='wrap' style={props}>
                  <Home state={this.state.home} showAbout={this.showAbout} showWorks={this.showWorks} showContact={this.showContact} />
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
                 <Works close={this.close} />
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
