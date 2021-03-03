import React from 'react'

import '../styles/background.css';

class Background extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded : false
    }
  }

  componentDidMount() {  // fadein video when it's fully loaded
   if (this.video) {
     this.video.addEventListener("loadeddata", () => {
       this.setState({
         loaded : true
       })
     });
   }
 }

 componentWillUnmount() {
   if (this.video) {
     this.video.removeEventListener("loadeddata", () => {
     });
   }
 }


  render () {
    return (
    <div className='wrap1'>
      <video style={{ opacity: this.state.loaded ? 1 : 0,transition: "opacity, .5s ease-in-out"}} ref={ref => (this.video = ref)} className="background" src="https://ik.imagekit.io/7ol7k87qcca/Boia/background_mJA2Y46sAH7as.m4v" type="video/mp4" autoPlay loop muted playsInline ></video>
      <video style={{ opacity: this.state.loaded ? 1 : 0,transition: "opacity, .5s ease-in-out"}} ref={ref => (this.video = ref)} className="backgrounddevice" src="https://ik.imagekit.io/7ol7k87qcca/Boia/test2_Jn1t11jPW.m4v" type="video/mp4" autoPlay loop muted playsInline ></video>
      <div className='shroud'></div>
    </div>
    )
  }
}

export default Background;
