import type { FC } from "react";
import styles from "./Footer.module.scss";
// import logo from "shared/assets/images/logo.png";
import logo from "@/shared/assets/images/logo.png";
import { MultiContainer, Typography } from "@/shared/ui";
import { FOOTER_SECTIONS } from "@/shared/config/footer-nav";


export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <MultiContainer>
        <div className={styles.footerContent}>
          <div className={styles.brandInfo}>
            <img src={logo} alt="Логотип" className={styles.logo} />
            <Typography
              variant="bodyText"
              color="white"
              className={styles.copyright}
            >
              © 2025 All rights reserved.
            </Typography>
            <Typography
              variant="caption"
              color="white"
              className={styles.policyLinks}
            >
              <a href="/privacy-policy">Privacy Policy</a> |{" "}
              <a href="/terms-of-service">Terms of Service</a> |{" "}
              <a href="/cookies">Cookies Settings</a>
            </Typography>
          </div>

          <nav className={styles.footerNav}>
            {FOOTER_SECTIONS.map((section, i) => (
              <div key={i} className={styles.navSection}>
                <ul className={styles.navList}>
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.url} className={styles.navLink}>
                        <Typography variant="bodyText" color="white">
                          {link.title}
                        </Typography>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className={styles.brandInfo1}>
            <Typography
              variant="bodyText"
              color="white"
              className={styles.copyright1}
            >
              © 2025 All rights reserved.
            </Typography>
            <Typography
              variant="caption"
              color="white"
              className={styles.policyLinks1}
            >
              <a href="/privacy-policy">Privacy Policy</a> |{" "}
              <a href="/terms-of-service">Terms of Service</a> |{" "}
              <a href="/cookies">Cookies Settings</a>
            </Typography>
          </div>
        </div>
      </MultiContainer>
    </footer>
  );
};
