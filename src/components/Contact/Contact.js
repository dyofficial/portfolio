import { contact } from '../../portfolio';
import './Contact.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { whatsAppAnalyticsHandler } from '../../helpers/helper';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="links">
        <a href={`mailto:${contact.email}`}>
          <span type="button" className="btn btn--outline">
            Email me
          </span>
        </a>
        <a
          href={contact.whatsapp}
          target="_blank"
          style={{ marginLeft: '20px' }}
          className="link link--icon"
          onClick={whatsAppAnalyticsHandler}
        >
          <WhatsAppIcon style={{ fontSize: 45 }} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
