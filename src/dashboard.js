import { LitElement, html } from "lit-element";
import styleDashboard from '../src/dashboardStyle.js'
export class MyElement extends LitElement{
    static get styles(){
        return[styleDashboard];
    }
    render(){
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c628e42b8b.js" crossorigin="anonymous"></script>
        <div class="row ">
        
        <div class="col-sm-3 dashboard o">
            <div class="col-sm b  ">
                <strong><h3>Home</h3></strong>
            </div>
            <hr>
            <div class="col-sm opciones">
                <i class="fa-solid fa-pen icono"></i> Registrar ruta
            </div>
            <div class="col-sm opciones">
                <i class="fa-solid fa-truck-fast icono"></i>Registrar ingreso y salida
            </div>
            <div class="col-sm opciones">
                <i class="fa-solid fa-location-dot icono"></i>Consultar ingreso y salida
            </div>
            <div class="col-sm opciones">
                <i class="fa-solid fa-location-dot icono"></i>Consultar mapa
            </div>
            <br>
            <hr class="linea">
        </div>
    
        `
        ;
    }
}
customElements.define('my-dash', MyElement)