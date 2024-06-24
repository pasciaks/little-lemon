import FooterContacts from "../FooterContacts/FooterContacts";
import FooterMenu from "../FooterMenu/FooterMenu";
import FooterSocialLinks from "../FooterSocialLinks/FooterSocialLinks";
import Logo from "../Logo/Logo";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer role="region" aria-label="Footer Section">
      <section>
        <Logo></Logo>
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
