export default class Curso{
    constructor(nombreCurso, poster, numeroClases){
        this.nombreCurso = nombreCurso,
        this.poster = poster,
        this.numeroClases = numeroClases,
        this.inscritos = []
    }

    getNombre(){
        return this.nombreCurso
    }
    getPoster(){
        return this.poster
    }
    getNumeroClases(){
        return this.numeroClases
    }
    getInscritos(){
        return this.inscritos
    }

    setNombre(nombreCurso){
        this.nombreCurso = nombreCurso
    }
    setPoster(poster){
        this.poster = poster 
    }
    setNumeroClases(numeroClases){
        this.numeroClases = numerosClases
    }
    setInscritos(inscritos){
        this.inscritos = inscritos
    }


}