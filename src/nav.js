import { LitElement, html } from "lit-element";
import styleNav from '../src/navStyle.js'
export class MyElement extends LitElement{
    static get styles(){
        return[styleNav];
    }
    render(){
        return html`
        <header>
        <img src="../img/bus.png" alt="Servicios de transportes" class="logo" style="border: 3px solid #000;">
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Iniciar Sesion</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        </header>
        `
        ;
    }
}
customElements.define('my-nav', MyElement)