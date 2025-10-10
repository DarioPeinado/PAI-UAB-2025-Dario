/*<script>
        //RESPONDER A UNA PREGUNTA:
        let numero=prompt("Cuantos años tienes?");
        document.write(numero);
       
        //CONDICIONALES:
        let hora = 10;
        let text;
        if (hora > 0 && hora < 9) {
            text="Bona nit!";
        } else {
            text="Bon día!";
        }
        console.log(text);

        //Switch Case (Variables):
        let semafor = "verde";
        let text;
        //Switch Case (Condicionales):
        switch (semafor) {
            case "verde":
                text="Puedes pasar";
                break;
            case "naranja":
                text="Precaución";
                break;
            default:
                text="No puedes pasar";
        }

    </script>*/


let a = 10;
let b = 20;
let c = 5;
a = a + 3;
b = b + 4 - a;
c = a + b + c;
a = a + c;
b = 4;
c = c + 3 - b + 2;
console.log(a,b,c);