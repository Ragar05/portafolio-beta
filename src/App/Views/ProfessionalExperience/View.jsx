import './index.css';

const View = () => {
    return (
        <>
            <div className="experiencia-profesional">
            <h2>Experiencia Profesional</h2>

            <div className="trabajo">
                <h3>CANGURO INTERNATIONAL</h3>
                <p>Cargo: Desarrollador de Software</p>
                <p>Tareas realizadas:</p>
                <ul>
                <li>Analizar los requerimientos y sugerencias de los usuarios.</li>
                <li>Diseñar y elaborar nuevos programas.</li>
                <li>Desarrollo de aplicaciones Web, Escritorio, Web API y Windows Mobile.</li>
                <li>Gestión de tecnología de la información</li>
                <li>Desarrollo de informes con Reporting Services.</li>
                </ul>
                <p>De 01/11/2021 a 02/07/2022 (Barranquilla-Colombia)</p>
            </div>

            <div className="trabajo">
                <h3>Silver Holdings</h3>
                <p>Cargo: Desarrollador Backend</p>
                <p>Funciones y Tareas realizadas:</p>
                <ul>
                <li>Desarrollo de Microservicios Rest.</li>
                <li>Intregrecion de los servicios de la empresa con bancos (Bancolombia) y pasarelas de pago.</li>
                <li>Diseño de bases de datos SQL.</li>
                <li>Automatizaciones de procesos mediante el uso funciones Lambda (AWS Lambda)</li>
                <li>Despliqgue de microservicios a nivel local para realizacion de pruebas</li>
                <li>Implementacion de los servicios en la nube ofrecidos por AWS y Azure Devops</li>
                </ul>
                <p>De 16/03/2022 - Actualmente</p>
            </div>
            </div>
        </>
    )
}

export default View;