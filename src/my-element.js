import { LitElement, html } from "lit-element";
import stylesScss from './my-elementStyle';

export class MyElement extends LitElement { 
    static get styles() {
        return [stylesScss];
    }
    render() {
        return html`
        <body>
        <driv id="principal">
            <header>
                <driv id="logo"><img src="img/Blue Simple Logistic Truck.png" width="150" height="150">
                </driv>
                <nav class="menu">
                    <ul>
                        <li class="actual"><a href="index.html"><br>Inicio</a></li>
                        <li><a href="Registro.html"><br>Registrarse</a></li>
                        <li><a href="ingresar.html"><br>Ingresar</a></li>
                    </ul>
                </nav>
    
            </header>
    
            <section id="MISION">
                <article>
                    <h2>
                        Misión
                    </h2>
                    <p>
                        Ser una empresa competitiva en el servicio público de transporte, comprometida en el mejoramiento
                        continuo a fin de fidelizar a sus clientes a través de la estrategia organizacional, parque
                        automotor renovado, tecnología de vanguardia y sustentabilidad con el medio ambiente, propendiendo
                        por el desarrollo económico y social.
                        <center><img src="img/R.jpg" width="500" height="200"></center>
                    </p>
    
                </article>
            </section>
            <aside>
                <h2> Nuestros servicios </h2>
                <center>
                    <h3>Servicio Premium Vip</h3>
                </center>
                <center><img src="img/Sin título.png" width="50" height="50"></center>
                <center>
                    <h3>Servicio Diamante</h3>
                </center>
                <center><img src="img/Sin título.png" width="50" height="50"></center>
                <center>
                    <h3>Servicio Platino Plus</h3>
                </center>
                <center><img src="img/Sin título.png" width="50" height="50"></center>
                <center><a href=""><br>Ver más</a></li>
                </center>
            </aside>
    
            <img src="img/Sin título2.png" width="1287" height="200"></center>
    
            <footer>
                <b> INFORMACIÓN DEL CONTACTO </b>
                <p> Dirección: Cra 78 #9-58, Bogota-Castilla<br>
                    Teléfono: 3227838432<br>
                    <b>copyright &copy; 2023-Bogotá</b>
                </p>
            </footer>
    </body>
        `;
    }
}

customElements.define('my-element', MyElement);