import './Cinema.css';

const Cinema = (props) => (
  <div class="cinema">
    <video class="trailer" src="https://ik.imagekit.io/7ol7k87qcca/Boia/test3_EWn2WabAq.mp4" type="video/mp4" controls></video>
    <div class="closecinema" onClick={props.closeCinema}></div>
  </div>
)


export default Cinema;
