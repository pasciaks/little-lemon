import React from "react";
import "./FooterSocialLinks.css";
import FacebookSVG from "../../assets/icon-facebook.svg";
import InstagramSVG from "../../assets/icon-instagram.svg";
import PinterestSVG from "../../assets/icon-pinterest.svg";
import SnapchatSVG from "../../assets/icon-snapchat.svg";
import YelpSVG from "../../assets/icon-yelp.svg";

const socialmedia = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com",
    title: "Follow Little Lemon on Facebook",
    icon: FacebookSVG,
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.instagram.com",
    title: "Follow Little Lemon on Instagram",
    icon: InstagramSVG,
  },
  {
    id: 3,
    name: "Pinterest",
    href: "https://www.pinterest.com",
    title: "Follow Little Lemon on Pinterest",
    icon: PinterestSVG,
  },
  {
    id: 4,
    name: "Snapchat",
    href: "https://www.snapchat.com",
    title: "Follow Little Lemon on Snapchat",
    icon: SnapchatSVG,
  },
  {
    id: 5,
    name: "Yelp",
    href: "https://www.yelp.com",
    title: "Check out Little Lemon on Yelp",
    icon: YelpSVG,
  },
];

const FooterSocialLinks = (props) => (
  <ul className="FooterContactsListItems">
    {socialmedia.map((social) => (
      <li role="button" key={"li-" + social.id}>
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          title={social.title}
        >
          <img width="25" src={social.icon} alt={social.name} />
        </a>
      </li>
    ))}
  </ul>
);

export default FooterSocialLinks;
