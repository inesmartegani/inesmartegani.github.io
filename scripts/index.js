/* comentario multilínea
*/

//comentario de una sola línea


// Cambia el estilo del input a visible, toma el valor del texto del parrafo con id "text-acercade" y lo muestra en consola
function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText; //innerText cambia el valor
    console.log(texto);
};

// Saca el texto escrito, permite escribir uno nuevo y lo muestra en pantalla y en la consola
function myFunction2(valor){
    document.getElementById("text-acercade").innerText =valor;
};

function logMessage(message){
    console.log(message + "<br>");
};

 // Controla si se presiono un enter
 let textarea=document.getElementById("edit-acercade")
 textarea.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if(e.key=="Enter"){
         document.getElementById("edit-acercade").style.display="none"
    }
 });


//carga el contenido de un archivo de texto y lo muestra en el parrafo
function showFile(input){
    let file = input.files[0];
    alert(`File name: ${file.name}`);// ej algun archivo.txt
    alert(`Last modified: ${file.lastModified}`); // ej 1554644

    let reader = new FileReader(); //objeto reader de tipo FileReader
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        document.getElementById("text-acercade").innerText=reader.result;
    };
reader.onerror = function() {
    console.log(reader.error);
    };    
    
};