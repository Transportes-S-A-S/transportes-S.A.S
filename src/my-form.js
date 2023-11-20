import { LitElement, html } from "lit-element";
import styleLogin from '../src/my-formStyle'

export class MyElement extends LitElement{

    static get styles(){
        return [styleLogin];
    }

    render() {
        return html `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <title>REGISTRO VEHICULO</title>
        </head>
        <body>

            <nav class="row" >

                <nav class="col-sm" >
                    <div class="row" > 

                        
                    </div>

                    <div class="card card reg">
                        
                        <a href="#""><div class="card-header titulo til"><img src="img/x.png" width="20px" height="20px" text-align:left"></a>

                            <center><h1> Registar </h1><h3>ruta</h3></center>
                            <center>-------<img src="img/autobus-escolar.png" width="20%" height="20%" style="float: center;">------</center>
                            <center>_______________________________________</center>

                        </div>
                        <div class="card-body ">
                            
                            <form class="formulario" @submit="${this._handleSubmit}">
                            
                                <div class="form-group form" >
                                    <center style="font-size: 25px;"> Ruta</center>
                                    
                                    <center><input id="nombreRuta" type="text" class="p" name="Nombre ruta" placeholder="Nombre ruta" required></center>
                                </div>
                                
                                <div class="form-group form p" >
                                    <center style="font-size: 25px;">Lugar Inicio ruta</center>
                                    
                                    <center><input id="InRuta" type="text" class="p" name="Lugar Inicio ruta" placeholder="Lugar Inicio ruta" required></center>
                                </div>

                                <div class="form-group form p" >
                                    <center style="font-size: 25px;">Lugar Fin ruta</center>
                                    
                                    <center><input id="FiRuta" type="text" class="p" name=" Lugar Fin ruta" placeholder="Lugar Fin ruta" required></center>
                                </div>

                                <div class="form-group form p" >
                                    <center style="font-size: 25px;">Horario</center>
                                    
                                    <center><input type="text" id="Hora" class="p" name="Horario" placeholder="Horario" required></center>
                                </div>

                                <div class="form-group form p" >
                                    <center style="font-size: 25px;">Consorcio</center>
                                    
                                    <center><input type="text" id="consorcio" class="p" name="Consorcio" placeholder="Consorcio" required></center>
                                </div>
                                
                                <div class="button">
                                    <center style="font-size: 25px;"><button type="submit" class="btn btn-primary boton til">Registar</button></center>
                                </div>
                                <br>
                            </div>
                        
                        
                            </form>
                        </div>
                    </div>
                    
                </nav>

            </nav>
            
        </body>
        </html>

        `;
    }
    _handleSubmit(event) {
        event.preventDefault();
        // Lógica de manejo de envío del formulario
        const nombreRuta = this.shadowRoot.getElementById('nombreRuta').value;
        const InRuta = this.shadowRoot.getElementById('InRuta').value;
        const FiRuta = this.shadowRoot.getElementById('FiRuta').value;
        const Hora = this.shadowRoot.getElementById('Hora').value;
        const consorcio = this.shadowRoot.getElementById('consorcio').value;

        // Realiza acciones con los datos del formulario
       
        let Rutas=[]
        let Ruta=[nombreRuta, InRuta, FiRuta, Hora, consorcio]
        Rutas.push(Ruta)
        alert("La Ruta fue registrada \n" +Rutas)
      }
}

customElements.define('my-form', MyElement)