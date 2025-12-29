function stopAllSounds() {
  // Seleciona todos os elementos de áudio
  const sounds = document.querySelectorAll("audio");

  // Pausa cada som e reinicia o tempo para o início
  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0; // Reinicia o áudio para o começo
  });
}

// document.getElementById("ABC").addEventListener("click", (ev) => {
//   stopAllSounds();
//   ev = document.getElementById("AaBbCc");
//   ev.play();
// });

document.getElementById("ANA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Anapolis");
  ev.play();
});

document.getElementById("BPB").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("BotafogoPB");
  ev.play();
});

document.getElementById("BRU").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Brusque");
  ev.play();
});

document.getElementById("CAX").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Caxias");
  ev.play();
});

document.getElementById("CON").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Confianca");
  ev.play();
});

// document.getElementById("CSA").addEventListener("click", (ev) => {
//   stopAllSounds();
//   ev = document.getElementById("CentroSportivoAlagoano");
//   ev.play();
// });

document.getElementById("FIG").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Figueirense");
  ev.play();
});

document.getElementById("FLO").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Floresta");
  ev.play();
});

document.getElementById("GFC").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Guarani");
  ev.play();
});

document.getElementById("ITA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Itabaiana");
  ev.play();
});

document.getElementById("ITU").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Ituano");
  ev.play();
});

// document.getElementById("LON").addEventListener("click", (ev) => {
//   stopAllSounds();
//   ev = document.getElementById("Londrina");
//   ev.play();
// });

document.getElementById("MAR").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Maringa");
  ev.play();
});

// document.getElementById("NAU").addEventListener("click", (ev) => {
//   stopAllSounds();
//   ev = document.getElementById("Nautico");
//   ev.play();
// });

// document.getElementById("PON").addEventListener("click", (ev) => {
//   stopAllSounds();
//   ev = document.getElementById("PontePreta");
//   ev.play();
// });

// document.getElementById("RET").addEventListener("click", (ev) => {
//   stopAllSounds();
//   ev = document.getElementById("Retro");
//   ev.play();
// });

// document.getElementById("SBE").addEventListener("click", (ev) => {
//   stopAllSounds();
//   ev = document.getElementById("SaoBernardo");
//   ev.play();
// });

// document.getElementById("TOM").addEventListener("click", (ev) => {
//   stopAllSounds();
//   ev = document.getElementById("Tombense");
//   ev.play();
// });

document.getElementById("YPI").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Ypiranga");
  ev.play();
});

document.getElementById("AMA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Amazonas");
  ev.play();
});

document.getElementById("PAY").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Paysandu");
  ev.play();
});

document.getElementById("FER").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Ferroviaria");
  ev.play();
});

document.getElementById("VOL").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("VoltaRedonda");
  ev.play();
});

document.getElementById("BAR").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Barra");
  ev.play();
});

document.getElementById("INL").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("InternacionalLimeira");
  ev.play();
});

document.getElementById("MAO").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("Maranhão");
  ev.play();
});

document.getElementById("STA").addEventListener("click", (ev) => {
  stopAllSounds();
  ev = document.getElementById("SantaCruz");
  ev.play();
});
