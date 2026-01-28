import React from 'react';
// IMPORTAÇÃO DO CSS MODULE (Importa como uma variável 'styles')
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.container}>
      <div className="container-fluid">
         <h1 className={styles.titulo}>
            <span className={styles.corX}>Tel</span>
            <span className={styles.corY}>l me</span>
         </h1>
         <p className="text-light">Catálogo de destilados</p>
      </div>
    </header>
  );
};

export default Header;