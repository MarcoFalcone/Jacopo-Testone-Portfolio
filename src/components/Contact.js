import './Contact.css';

const Contact = (props) => (
  <div>
    <a class="mail" href="mailto:mfalcone.dev@gmail.com">jacopo.testone@gmail.com</a>
    <div className="closecontact" onClick={props.close} />
  </div>
)


export default Contact;
