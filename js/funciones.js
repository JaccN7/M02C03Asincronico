function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz: " + i);
        } else {
            if (i % 3 == 0) {
                console.log("Fizz: " + i);
            } else if (i % 5 == 0) {
                console.log("Buzz: " + i);
            } else {
                console.log("Número: " + i);
            }
        }
    }
}

function game() {
    console.log("1.- Piedra | 2.- Papel | 3.- Tijeras")
    var seleccion = parseInt(document.querySelector('[name=optGame]:checked').value);
    console.log("Opción del jugador: "+ seleccion);
    var random = Math.floor((Math.random() * 3) + 1);
    console.log("Valor random: " + random)

    if (seleccion == random) {
        document.getElementById("juego").innerHTML = ('<h4 class="centrar">EMPATE</h4><br/><p class="centrar"><img src="images/empate.jpg" width="75%" height="75%" /></p><br/><p class="centrar"><button type="submit" class="btn btn-primary centrar" onclick="volveraJugar()">Volver a Intentarlo</button></p>');
    } else {
        if(seleccion==2 && random==1 || seleccion==3 && random==2 || seleccion==1 && random==3){
            document.getElementById("juego").innerHTML = ('<h4 class="centrar">¡¡¡GANASTE!!!</h4><br/><p class="centrar"><img src="images/ganaste.jpg" width="75%" height="75%" /></p><br/><p class="centrar"><button type="submit" class="btn btn-primary centrar" onclick="volveraJugar()">Volver a Intentarlo</button></p>');
        }else{
            document.getElementById("juego").innerHTML = ('<h4 class="centrar">¡¡¡PERDISTE!!!</h4><br/><p class="centrar"><img src="images/nelson.jpg" width="75%" height="75%" /></p><br/><p class="centrar"><button type="submit" class="btn btn-primary centrar" onclick="volveraJugar()">Volver a Intentarlo</button></p>');
        }
        
    }
}

function volveraJugar() {
    document.getElementById("juego").innerHTML = ('<h4> JavaScript Básico - Ejercicio asincrónico 05 </h4><br /><h5> Juguemos Piedra, Papel y Tijeras!</h5><form role="form" onsubmit="game()"><label class="radio-inline"><input type="radio" name="optGame" value="1" required><img src="images/roca.png" class="img" /></label><label class="radio-inline"><input type="radio" name="optGame" value="2"><img src="images/hoja-en-blanco.png" class="img" /></label><label class="radio-inline"><input type="radio" name="optGame" value="3"><img src="images/tijeras.png" class="img" /></label><br/><br/><button type="submit" class="btn btn-primary">Jugar</button></form>');
}