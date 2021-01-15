import './Contact.css';

const Contact = (props) => (
  <div class="socials">
    <a class="mail" href="mailto:mfalcone.dev@gmail.com">jacopotestone@gmail.com</a>
    <a href="https://www.instagram.com/jacopotestone/" target='_blank'><img class="insta" src="https://ik.imagekit.io/7ol7k87qcca/Boia/insta_tPGHuiq7Z.png" /></a>
    <div className="closecontact" onClick={props.close} />
  </div>
)


export default Contact;
