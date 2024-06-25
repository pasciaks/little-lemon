import FooterContacts from "../FooterContacts/FooterContacts";
import FooterMenu from "../FooterMenu/FooterMenu";
import FooterSocialLinks from "../FooterSocialLinks/FooterSocialLinks";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer role="region" aria-label="Footer Section">
      <section className="box-shadow-disabled">
        <img
          src="../../images/restaurant.jpg"
          width="250"
          alt="Restaurant"
          className="img-responsive"
        />
      </section>
      <section>
        <FooterMenu></FooterMenu>
      </section>
      <section>
        <FooterContacts></FooterContacts>
      </section>
      <section>
        <FooterSocialLinks></FooterSocialLinks>
      </section>
    </footer>
  );
};

export default Footer;
