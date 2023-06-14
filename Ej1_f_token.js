let token=[];
let txt;
let rta=0;
let cont=0;
let i=0;
let forcey;

function buscatoken(txt){
    for(x of txt){
        token.push(x);
        i++;
        if(x==" "||i==txt.length){
            for (y of token){
                forcey=Number(y);
                rta+=forcey;
            }
            if (rta-rta===0){
                cont++;
            }
            token=[];
            rta=0;
        }
    }
    console.log("Cantidad de token: "+cont);
}


buscatoken("G4t0 M1 51 Fus"); //Ingresar palabra
