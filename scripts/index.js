import Curso from "./classes/Curso.js"

const element = document.getElementById("cursos")
// Imprime un curso en el DOM
// Recibe uin objeto de tipo Curso
function mostrarCurso(objetoCurso){
    const hijo = document.createElement("div")
    hijo.classList = "card"
    hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="${objetoCurso.getPoster()}" alt="${objetoCurso.getNombre()}"/>
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${objetoCurso.getNombre()}</h3>
            <div class="s-center">
                <span class="small">Cantidad de clases: ${objetoCurso.getNumeroClases()}</span>
            </div>
        </div>

        `
    element.appendChild(hijo)
}

const formulario = document.getElementById("formCursos")

// formulario.addEventListener("submit", e => {
//     e.preventDefault()
//     const target = e.target
//     const curso = new Curso(target.nombreCurso.value, target.poster.value, target.clases.value)
//     mostrarCurso(curso)
// })

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    const curso = new Curso(this.nombreCurso.value, this.poster.value, this.clases.value)
    mostrarCurso(curso)
})
