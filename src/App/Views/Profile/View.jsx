import "./index.css";

const View = () => {
  return (
    <>
      <div className="perfil-academico">
        <h2>Educación</h2>
        <p>
          Actualmente estoy cursando el cuarto año (8 semestre) en Ingeniería de
          Sistemas en la Universidad [CUC].
        </p>

        <h2>Teconologias Frontend</h2>
        <ul>
          <li>Desarrollo aplicaciones con React de forma Avanzada</li>
          <li>Conocimiento general sobre desarrollo de aplicaciones en Kotlin</li>
          <li>HTML, CSS, Javascript</li>
        </ul>

        <h2>Teconologias Backend</h2>
        <ul>
          <li>Desarrollo de servicios REST con ExpressJS</li>
          <li>Desarrollo de servicios REST con .Net Core</li>
          <li>Desarrollo de servicios SOAP implementando WSS</li>
          <li>Manejo de bases de datos NoSQl - MongoDB, DynamoDB</li>
          <li>Manejo de bases de datos SQL - SQL Server, PostgreSQL</li>
          <li>Implementacion de tecnologias en tiempo real con WebSockets</li>
        </ul>

        <h2>Lenguajes de Programacion</h2>
        <ul>
          <li>Java</li>
          <li>C#</li>
          <li>Rust</li>
          <li>Bash</li>
          <li>Javascript/Typescript</li>
        </ul>
      </div>
    </>
  );
};

export default View;
