import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutBox}>
      <h2>
        <strong>Sobre el Proyecto</strong>
      </h2>
      <p>{`En este proyecto de modulo 3, aprendimos a utilizar bases de datos relacionales (SQL), también el implementar funciones de servicio  con transactions, pero lo mas importante fue que aprendimos a utilizar TypeScript (TS) . Las herramientas utilizadas fueron TS, TypeOrm, PostgresSQL, y Express.

En el apartado de front aprendimos a utilizar Vite+React, concretamente aprendimos sobre como crear componentes, sobre useState, useEffect, sobre forms y Formik, tambien sobre rutas (react-router-dom), y sobre la utilización del context. Las herramientas utilizadas fueron: Vite+React, Axios, y react-router-dom`}</p>
    </div>
  );
};

export default About;
