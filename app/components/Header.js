import React from "react";
import styles from './Header.module.css';

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className={styles.header}>
          <a href="/#">DataSync</a>
          <a href="/home" >Home</a>
          <a href="/company" >Company</a>
          <a href="/marketplace" >Marketplace</a>
          <a href="/features" >Feature</a>
          <a href="/contact" >Contact</a>
    </div>
  );
}