export class students{
    Nombre: string;
    Apellido: string;
    Edad: Date;
    Conduce: Boolean;
    
    constructor(
        Nombre: string,
        Apellido: string,
        Edad: Date,
        Conduce: Boolean
        

    ){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad;
        this.Conduce = Conduce
        
    }
}