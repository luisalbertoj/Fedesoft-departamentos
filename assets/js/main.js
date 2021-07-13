let departamentos = [];
let select = document.getElementById('select');
let informacion = document.getElementById('informacion');
let botones = [];

const loadJSON = (callback)  => {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open("GET", "colombia.json", true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}
const render = () => {
    for (const departamento of departamentos) {
        const option = document.createElement('option');
        option.id = departamento.id;
        option.value = departamento.ciudades[0];
        option.text = departamento.departamento;
        botones.push(option);
        select.appendChild(option);
    }
    for (const boton of botones) {
        boton.onclick = function () {validacion(boton)};
    }    
};
const validacion = (elemento, ciudad, url) => {
    console.log(elemento);
    informacion.innerHTML = `
        <strong>Departamento: ${elemento.text}</strong>
        <br>
        <strong>Ciudad: ${ciudad}</strong>
        <br>
        <strong>Mas informacion: ${url}</strong>
        <br>
    `;
};

loadJSON(function (data) {
    departamentos = JSON.parse(data);
    console.log(departamentos);
    render();
});
