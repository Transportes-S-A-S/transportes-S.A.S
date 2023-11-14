import { LitElement, html } from "lit-element";
import login_style from './login_style.js'
export class MyElement extends LitElement{
    static get styles(){
        return[login_style];
    }
    render(){
        return html`
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Css/styles-nav.css">
    <title>Barra de Navegación</title>
</head>
<body>
    <header>
        <img src="img/bus.png" alt="Servicios de transportes" class="logo" style="border: 3px solid #000;">
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Iniciar Sesion</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>
</body>
</html>

    
        `
        ;
    }
}
customElements.define('my-login', MyElement)