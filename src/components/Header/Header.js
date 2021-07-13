import React from 'react';

import Container from '../Container/Container';
import styles from './Header.module.css';

function Header({ title }) {
  return (
    <header className={styles.header}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
      </Container>
    </header>
  );
}

export default Header;
