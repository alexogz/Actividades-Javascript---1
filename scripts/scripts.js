function comparar(){
    let texto1 = document.getElementById("texto1").value;
    let texto2 = document.getElementById("texto2").value;
    
    if(texto1 == texto2){
        document.getElementById("equal").innerHTML = "=";
    }else{
        document.getElementById("equal").innerHTML = "X";
    }
}

document.getElementById("texto1").addEventListener("keyup", comparar, false);
document.getElementById("texto2").addEventListener("keyup", comparar, false);


function Contador(){
    let texto3 = document.getElementById("texto3").value;
    let resultado = texto3.length;

    
    console.log (resultado);
    document.getElementById("resultado").innerHTML = resultado;
    
}

document.getElementById("texto3").addEventListener("keyup", Contador, false);

function Juntar(){
    let texto4 = document.getElementById("texto4").value;
    let texto5 = document.getElementById("texto5").value;
    let resultado2 = texto4 + texto5;
    
    document.getElementById("resultado2").innerHTML = resultado2;
    //console.log (resultado2);
   
}

document.getElementById("texto4").addEventListener("keyup", Juntar, false);
document.getElementById("texto5").addEventListener("keyup", Juntar, false);

function Raiz(){
    let texto6 = document.getElementById("texto6").value
    let resultado3 = Math.sqrt(texto6).toFixed(2);

    document.getElementById("resultado3").innerHTML = resultado3;
    
}

document.getElementById("texto6").addEventListener("keyup", Raiz, false);


let header = document.getElementById('header')
let footer = document.getElementById('footer')

function cambiarColor1(){
    header.style.background = "grey";
    footer.style.background = "grey";
}

function cambiarColor2(){
    header.style.background = "blue";
    footer.style.background = "blue";
}

function cambiarColor3(){
    header.style.background = "pink";
    footer.style.background = "pink";
}


document.getElementById("button1").addEventListener('click', cambiarColor1, false);
document.getElementById("button2").addEventListener('click', cambiarColor2, false);
document.getElementById("button3").addEventListener('click', cambiarColor3, false);


let altura = document.getElementById('alto');
let anchura = document.getElementById('ancho');
let imagen = document.getElementById('imagen');


function cambiarTamaño() {
    let nuevaAltura = altura.value;  
    let nuevaAnchura = anchura.value; 


    if (nuevaAltura !== "") {
        imagen.style.height = nuevaAltura + 'px';  
    }
    
    if (nuevaAnchura !== "") {
        imagen.style.width = nuevaAnchura + 'px';  
    }
}


altura.addEventListener('input', cambiarTamaño);
anchura.addEventListener('input', cambiarTamaño);


