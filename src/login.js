import { LitElement, html } from "lit-element";
import login_style from './login_style.js'
export class MyElement extends LitElement{
    static get styles(){
        return[login_style];
    }
    render(){
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c628e42b8b.js" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/c628e42b8b.js" crossorigin="anonymous"></script>

        <div class="container-fluid">
    <div class="row">
        <div clas="col-sm-1"></div>
        <div class="col-sm-10 text-center">
           <img src="" class="logo-index-login">
        </div>
        <div clas="col-sm-1"></div>
    </div>

    <div class="row">
        <div class="col-sm-4">
            
        </div>
        <div class="col-sm-4">

            <div class="card bg-body-danger card-box">
                <div class="port ">
                    <div class="text-center">
                        <h3>
                            Registrar ingreso 
                        </h3 >
                    </div>
                </div>
                
                <form class="card-login" method="post" action="">

                    <br>

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Nombre">
                        <label for="floatingInput">Nombre</label>
                      </div>
                    
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Apellido">
                        <label for="floatingInput">Apellido</label>
                      </div>
                    
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="No. placa">
                        <label for="floatingInput">Placa</label>
                      </div>
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control" id="floatingInput" placeholder="Hora de ingreso">
                        <label for="floatingInput">Hora de ingreso</label>
                      </div>
                    
                    <div class="form-floating mb-3">
                        <input type="time" class="form-control" id="floatingInput" placeholder="Hora de salida">
                        <label for="floatingInput">Hora de salida</label>
                      </div>
                    <br>
                    <div class="text-center">
                        <button class="my-button">Registrar</button>
                                            </div>
                    <br>
                    <div class="d-grid gap-2 text-center">
                        <a href="#" class="Link_reset-pass">Volver</a>
                    </div>
                    
                </form>
            </div>

        </div>
        
    </div>
    
        `
        ;
    }
}
customElements.define('my-login', MyElement)