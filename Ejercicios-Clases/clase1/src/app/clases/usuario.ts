export class Usuario {
    nombre: string;
    clave: string;

    constructor(nombre: string, clave : string){
        this.nombre = nombre;
        this.clave = clave;
    }

    mostrar(){
        console.log('Nombre: ' + this.nombre + 'Clave: '+ this.clave);
        
    }

}
