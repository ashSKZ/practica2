const ataqueRapido = (caballeroDurmiendo) => {
  if (caballeroDurmiendo) {
    console.log("Se puede el ataque rápido");
  } else {
    console.log("No se puede el ataque rápido");
  }
}


const espiar = (caballeroDurmiendo, arqueroDurmiendo) => {
  if ((!caballeroDurmiendo && arqueroDurmiendo) || (caballeroDurmiendo && !arqueroDurmiendo)) {
    console.log("Se puede espiar");
  } else {
    console.log("No se puede espiar");
  }
}

const señalarPrisionero = (prisioneroDespierto, arqueroDurmiendo) => {
  if (prisioneroDespierto && arqueroDurmiendo) {
    console.log("Se puede señalar al prisionero");
  } else {
    console.log("No se puede señalar al prisionero");
  }
}

const prisioneroLibre = (prisioneroDespierto, caballeroDurmiendo, arqueroDurmiendo, perro) => {
  if (perro) {
    console.log("Tiene perro");
    if (arqueroDurmiendo) {
      console.log("El prisionero puede escapar");
    } else {
      console.log("El prisionero NO puede escapar");
    }
  } else {
      console.log("NO tiene perro");
    if (prisioneroDespierto) {
        console.log("El prisionero está despierto");
      if (caballeroDurmiendo && arqueroDurmiendo) {
        console.log("El prisionero puede escapar");
      } else {
        console.log("El prisionero NO puede escapar");
      }
    } else {
        console.log("El prisionero NO está despierto");
      console.log("El prisionero NO puede escapar");
    }
  }
}

const caballeroDurmiendo = true;
const arqueroDurmiendo = false;
const prisioneroDespierto = true;
const perro=false;

ataqueRapido(caballeroDurmiendo);
espiar(caballeroDurmiendo, arqueroDurmiendo);
señalarPrisionero(prisioneroDespierto, arqueroDurmiendo);

prisioneroLibre(prisioneroDespierto, caballeroDurmiendo, arqueroDurmiendo, perro); 