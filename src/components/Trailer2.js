import './Trailer.css';

const Trailer2 = (props) => (
  <div class="cont">
    <iframe class="trailer" src="https://www.youtube.com/embed/RFWGJMVBKDE" type="video/mp4" controls></iframe>
    <div class="closetrailer" onClick={props.closeTrailer}></div>
  </div>
)


export default Trailer2;
