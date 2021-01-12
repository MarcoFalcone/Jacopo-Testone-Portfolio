import './Works.css';

const Works = (props) => (
    <div class="workscont">
      <div class="work 1">
        <img class="img" src="https://ik.imagekit.io/7ol7k87qcca/Boia/alien_vu0Bi9DXxNzmB.jpg?tr=h-700,w-500" />
        <p className="txt2">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="title" onClick={props.showCinema}>watch trailer</p>
      </div>
      <div class="work 2">
        <img class="img" src="https://ik.imagekit.io/7ol7k87qcca/Boia/alien_vu0Bi9DXxNzmB.jpg?tr=h-700,w-500" />
        <p className="txt2">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="title" onClick={props.showCinema}>watch trailer</p>
      </div>
      <div class="work 3">
        <img class="img" src="https://ik.imagekit.io/7ol7k87qcca/Boia/alien_vu0Bi9DXxNzmB.jpg?tr=h-700,w-500" />
        <p className="txt2">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="title" onClick={props.showCinema}>watch trailer</p>
      </div>
      <div class="work 4">
        <img class="img" src="https://ik.imagekit.io/7ol7k87qcca/Boia/alien_vu0Bi9DXxNzmB.jpg?tr=h-700,w-500" />
        <p className="txt2">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="title" onClick={props.showCinema}>watch trailer</p>
      </div>
      <div class="closeworks" onClick={props.close}></div>
    </div>
)

export default Works;
