import "./index.css";

const View = () => {
  return (
    <>
      <div className="experiencia-academica">
        <h2>Experiencia Académica</h2>

        <div className="proyecto">
          <h3>Proyecto de Sistema ERP</h3>
          <p>
            Realice un sistema erp para una tienda como proyecto de practica personal.
            Este sistema poseia menejo de inventario, administracion de recursos, 
            sistema de facturacion y muchas otras funcionalidades que me permitieron
            entender el como se compone una aplicacion de este tipo. El Backend 
            fue construido en NodeJS y la base de datos fue de mongo. Fue el primero proyectos
            con el que pude explotar los conocimientos que tenia acumulado para esos momentos.
          </p>
        </div>

        <div className="proyecto">
          <h3>Proyecto de Manejador de Archivos como base de datos</h3>
          <p>
            Durante el desarrollo del tercer segundo, se nos presento la persistencia de datos.
            Mediante implementacion de un sistema de archivos planos y binarios. Este manejador funciono 
            como una libreria que me permitia moldear las clases 
            como si fuesen las entidades de una base de datos, algo parecido al first code. Se programo
            en java e implementaba la programacion Reflexiva para el manejo de las clases y el parseo
            de los datos guardados en binario/texto plano a instancias de sus resepectivas objetos. Ademas esto, 
            permitia indicarle al manejador, que propiedad de la clase seria una llave primaria y 
            traia una funcionalidad interna que le indicaba que campos serian hasheados, esto como medida
            de seguridad al momento de guardar contraseñas.

          </p>
        </div>

        <div className="proyecto">
          <h3>Desarrollo de una libreria para el enfoque de firts code</h3>
          <p>
            En el trabajo se me presento una problematica, y es que era tedioso escribir
            manualmente la estructura de una tabla sql a codigo. Esto llevo a que 
            me replanteara lo que debia de hacer para evitar este tipo de inconvenientes.
            A partir de ello escribi una libreria que por ahora, tiene unicamente 
            soporte para postresSql. Consiste en que en un archivo d.ts, declaras tus entidades
            mediante una nomemclatura, y sus campos se representaban como propiedades, esto
            se hace mediante el uso types <strong>(Typescript)</strong>.
            Al final despues de definir la entidad, se procedia a usar un CLI en el que
            con un flag o comando, este iniciaria a pasar esos types a esquema ya en codigo
            de la tabla o tablas que se deseen modelar.
          </p>
        </div>
      </div>
    </>
  );
};

export default View;
