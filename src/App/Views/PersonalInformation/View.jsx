import "./index.css";

const View = () => {
  return (
    <>
      <div className="datos-personales">
        <h2>Datos Personales</h2>
        <ul>
          <li>
            <strong>NOMBRE:</strong> RAMIRO ANDRES GARCIA URUETA
          </li>
          <li>
            <strong>FECHA DE NACIMIENTO:</strong> 05/10/2002
          </li>
          <li>
            <strong>EDAD:</strong> 20
          </li>
          <li>
            <strong>ESTADO CIVIL:</strong> Soltero
          </li>
          <li>
            <strong>LINKEDIN:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/ramiro-andrés-garcía-urueta-524536248/"
              target="_blank"
              style={{
                color: "white"
              }}
            >
              Perfil de LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default View;