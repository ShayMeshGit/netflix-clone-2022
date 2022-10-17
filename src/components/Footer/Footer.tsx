import React from "react";
import Card from "../UI/Card";

//components
//styles
import styles from "./Footer.module.css";

const links = [
  {
    name: "FAQ",
    href: "https://help.netflix.com/en/node/412",
  },
  {
    name: "Help Center",
    href: "https://help.netflix.com/en/",
  },
  {
    name: "Account",
    href: "https://www.netflix.com/il-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount",
  },
  {
    name: "Media Center",
    href: "https://media.netflix.com/en/",
  },
  {
    name: "Investor Relations",
    href: "https://ir.netflix.net/ir-overview/profile/default.aspx",
  },
  {
    name: "Jobs",
    href: "https://jobs.netflix.com/",
  },
  {
    name: "Ways to Watch",
    href: "https://devices.netflix.com/en/",
  },
  {
    name: "Terms of Use",
    href: "https://help.netflix.com/legal/termsofuse",
  },
  {
    name: "Privacy",
    href: "https://help.netflix.com/legal/privacy",
  },
  {
    name: "Cookie Preferences",
    href: "https://www.netflix.com/il-en/#",
  },
  {
    name: "Corporate Information",
    href: "https://help.netflix.com/legal/corpinfo",
  },
  {
    name: "Contact Us",
    href: "https://help.netflix.com/en/contactus",
  },
  {
    name: "Speed Test",
    href: "https://fast.com/",
  },
  {
    name: "Legal Notices",
    href: "https://help.netflix.com/legal/notices",
  },
  {
    name: "Only on Netflix",
    href: "https://www.netflix.com/il-en/browse/genre/839338",
  },
];

const Header = () => {
  return (
    <Card className={styles.footerCard}>
      <footer className={styles.footer}>
        <a
          href="https://help.netflix.com/en/contactus"
          rel="noreferrer"
          target="_blank"
        >
          Questions? Contact us.
        </a>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} rel="noreferrer" target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </Card>
  );
};

export default Header;
