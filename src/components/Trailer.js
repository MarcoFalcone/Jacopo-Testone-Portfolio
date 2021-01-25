import '../styles/Trailer.css';

const Trailer = (props) => (
  <div class="cont">
    <iframe class="trailer" src="https://www.youtube.com/embed/_-6Pf3JhvcA" type="video/mp4" controls></iframe>
    <div class="closetrailer" onClick={props.closeTrailer}></div>
  </div>
)


export default Trailer;
