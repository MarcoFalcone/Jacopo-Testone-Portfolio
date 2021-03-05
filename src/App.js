import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'

import Background from './components/background';
import Flags from './components/Flags';
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Projects from './components/Projects'

import './styles/App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      home : true,
      page : ''
    }
  }

  showAbout = () => {
    this.setState({
      home : false
    })
    setTimeout(() =>
    this.setState({
      page : <About close={this.close} />
    }), 400)
  }

  showProjects = () => {
    this.setState({
      home : false
    })
    setTimeout(() =>
    this.setState({
      page : <Projects close={this.close} />
    }), 400)
  }

  showWorks = () => {
    this.setState({
      home : false
    })
    setTimeout(() =>
    this.setState({
      page : <Works close={this.close} />
    }), 400)
  }

  close = () => {
    this.setState({
      page : '',
      home : true
    })
  }

  render() {

        return (
        <div>
          <Background />
          <Transition
            native
            items={this.state.home}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ duration: 400 }}
            >
            {show =>
              show && (props =>
                <animated.div style={props}>
                  <Flags />
                </animated.div>
              )
            }
          </Transition>
          <Transition
             native
             items={this.state.home}
             from={{ opacity: 0, marginTop: -100 }}
             enter={{ opacity: 1, marginTop: 0 }}
             leave={{ opacity: 0, marginTop: -100 }}
             config={{ mass: 1, tension: 100, friction: 20 }}
             >
             {show =>
               show && (props =>
                 <animated.div className='wrap' style={props}>
                  <Home state={this.state.home} showAbout={this.showAbout} showWorks={this.showWorks} showProjects={this.showProjects} />
                 </animated.div>)
             }
          </Transition>
          <Transition
            native
            items={this.state.page}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={{ duration: 400 }}
            >
            {show =>
              show && (props =>
                <animated.div style={props} children={show} />)
            }
          </Transition>
        </div>
      )
      }
    }



export default App;
