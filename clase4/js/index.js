const estudiantes = [
    {
        id:1,
        nombre: "Clara",
        edad:15
    },{
        id:2,
        nombre: "Lucas",
        edad:16
    },{
        id:3,
        nombre:"Juan",
        edad:18
    },
]

//filtro estudiantes por edad
const estudiantesMayores= estudiantes.filter(estudiante => estudiante.edad > 16);
console.log(estudiantesMayores);

//filtro estudiantes por id
const estudianteEncontrado= estudiantes.find(estudiante => estudiante.id === 2)
console.log(estudianteEncontrado)

//modifico la edad de Clara a 18
estudiantes.forEach(estudiantes =>{
    if (estudiantes.nombre === "Clara"){
        estudiantes.edad = 18;
    }
})

console.log(estudiantes)

//agrego un nuevo estudiante
const nuevoEstudiante = {id:4, nombre:"Nicolas",edad:19,};
estudiantes.push(nuevoEstudiante)

//elimino al estudiante con idd igual a 1
const estudianteEliminado= estudiantes.filter(estudiante => estudiante.id !== 1)
console.log(estudianteEliminado);

//ordeno los estudiantes de menor a mayor
const estudiantesOrdenados = estudiantes.sort((a,b) => a.edad, b.edad);
console.log(estudiantesOrdenados)

