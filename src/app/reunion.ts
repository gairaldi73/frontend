import { Time } from "@angular/common";

export class Reunion {
    private nombre: string = "";
    private fecha: Date = new Date();
    private hora: string = "08:00";
    private duracion: number = 1;
    private participantes?: Array<string> =[];
    private detalle?: string = "";

    constructor(nombre: string, fecha: Date, hora: string, duracion: number, participantes?: Array<string>, detalle?: string){
        this.nombre = nombre;
        this.fecha = fecha;
        this.hora = hora;
        this.duracion = duracion;
        this.participantes = participantes;
        this.detalle = detalle;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre:string) {
        this.nombre = nombre;
    }
    getFecha(){
        return this.fecha;
    }
    setFecha(fecha:Date){
        this.fecha = fecha;
    }
    getHora(){
        return this.hora;
    }
    setHora(hora:string){
        this.hora = hora;
    }
    getDuracion(){
        return this.duracion;
    }
    setDuracion(duracion:number){
        this.duracion = duracion;
    }
    getParticipantes(){
        return this.participantes;
    }
    setParticipantes(participantes:Array<string>){
        this.participantes = participantes;
    }
    getDetalle(){
        return this.detalle;
    }     
    setDetalle(detalle:string){
        this.detalle = detalle;
    }
      
}
const reunion1 = new Reunion("DESARROLLO", new Date(2024, 3, 21), "09:00", 2, ["John", "George", "Alan"], "Desarrollando la WEB");
const reunion2 = new Reunion("TESTING", new Date(2024, 3, 21), "11:00", 2, ["John", "George", "Alan"], "Probando la WEB");
const reuniones: Array<Reunion> = [reunion1, reunion2];
reuniones.forEach((reunion)=>{
    console.log(reunion.getNombre, " ", reunion.getFecha, " ", reunion.getHora);
});
