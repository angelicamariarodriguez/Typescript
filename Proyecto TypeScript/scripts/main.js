import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Practicas", 20, 90, true, 2019),
    new Curso("Ingeniera de Software", 15, 99, true, 2018),
    new Curso("Pruebas", 25, 50, false, 2020),
    new Curso("Principios", 30, 75, true, 2020)];
export var ap = new Aprendiz("Angelica", "Rodriguez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.
    getElementById("texto-busqueda");
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursos(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursos(ap.cursos);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2>\n    <img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + " </td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + " </td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos Certificados</b></td>\n    <td>" + numeroCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
function mostrarCursos(cursos) {
    var cursosTbody = document.createElement("tbody");
    var estado = cursos.map(function (c) { return (c.calificacion > 60) ? 'green' : 'red'; });
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + curso.nombre + "</td>\n        <td>" + curso.horas + "</td>\n        <td style = \"color:" + estado[index] + "\">" + curso.calificacion + "</td>\n        <td>" + curso.certificado + "</td>\n        <td>" + curso.anio + "</td>";
        cursosTbody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);
}
