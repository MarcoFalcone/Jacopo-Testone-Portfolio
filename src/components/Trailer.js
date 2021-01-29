import '../styles/Trailer.css';

const Trailer = (props) => (
  <div className="cont">
    <iframe className="trailer" src="https://www.youtube.com/embed/_-6Pf3JhvcA" type="video/mp4" controls></iframe>
    <div className="closetrailer" onClick={props.closeTrailer}></div>
  </div>
)


export default Trailer;
