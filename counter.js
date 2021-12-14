var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//var cambio = 0;
var secondi = 0;
var svg = '<svg viewBox="0 0 66 44">';
var campo = '<path class="i1" d="M 0 0 h66 v44 h-66 z "/> <path class="i3" d="M9 6 h48 m-48 4 h48 m-48 4 h48 m-48 4 h48 m-48 4 h48 m-48 4 h48 m-48 4 h48 m-48 4 h48 m-48 4 h48 m-48 4" />';

var stanza=svg+'<path class="i1" d="M 0 0 h66 v44 h-66 z "/> <path class="i2" d="M9 6 h48 v32 h-48 z "/> <path class="i3" d="M9 6 h48 v8 h-48 z m24 16 m0 8 h16 v4 h-16 z m-10 -8 h6 v4 h-6 z m0 8 h6 v4 h-6 z"/> <path class="i4" d="M33 18 h16 v12 h-16 z m0 12 m-10 -8h6 v-4 h-6 z m0 8 h6 v-4 h-6 z " /></svg>'; 
document.getElementById("stanza1").innerHTML=stanza;
document.getElementById("stanza2").innerHTML=stanza;

//var audioCampo = new Audio('campo.mp3');
//var suona = new Audio('success.wav');
//var audioTogli = new Audio('togli.mp3');

function myfunc(id,i,ind) {
  if (document.getElementById("buttonRisorsa").className == "zero")
    {
    document.getElementById(id).className = "trasparente";
    tess[ind]=0;
    document.getElementById(id).innerHTML = tess[ind];
    //audioTogli.play();
    }
  else if (document.getElementById("buttonRisorsa").className == "somma")
    {
    document.getElementById(id).className = "risorsa";
    tess[ind]+=1;
    document.getElementById(id).innerHTML = tess[ind];
    //suona.play();
    }
  else if (document.getElementById("buttonRisorsa").className == "sottrai")
    {
    document.getElementById(id).className = "risorsa";
    tess[ind]-=1;
    document.getElementById(id).innerHTML = tess[ind];
    //suona.play();
    }
}

function btAggRisorsa(div) {
  var className = div.getAttribute("class");
  if (className=="zero") {
    div.className = "somma";
    }
  else if (className=="somma") {
    div.className = "sottrai";
    }
  else if (className=="sottrai") {
    div.className = "zero";
    }
}

function CambiaStile(sheet) {
        if (document.getElementById('pagestyle').getAttribute('href')=="style.css") {
           document.getElementById('pagestyle').setAttribute("href",sheet);
        }
        else {
           document.getElementById('pagestyle').setAttribute("href","style.css");
        }
}

function mySwitch(div) {
  var className = div.getAttribute("class");
  if (className=="standard") {
    div.className = "steccati";
    }
  else if (className=="steccati") {
    div.className = "edilizia";
    }
  else if (className=="edilizia") {
    div.className = "standard";
    }
  //audioCampo.play();
}

function mysel(div) {
  var className = div.getAttribute("class");
  if (document.getElementById("controllo").className=="steccati") {
    if (className=="largo") {
       div.className = "largo_nero";
       div.innerHTML = '<svg viewBox="0 0 66 11"> <path class="i1" d="M 0 0 h66 v11 h-66 z "/> <path class="i2" d="M0 7 h66 v4 h-66 z " /></svg>';
       }
    else if (className=="largo_nero") {
       div.className = "largo";
       }
    else if (className=="alto") {
       div.className = "alto_nero";
       div.innerHTML = '<svg viewBox="0 0 11 44"> <path class="i1" d="M 0 0 h11 v44 h-11 z "/> <path class="i2" d="M0 40 h11 v4 h-11 z " /></svg>';
       }
    else if (className=="alto_nero") {
       div.className = "alto";
       }
    //audioCampo.play();
    }
}
function myfunc2(div) {
  var className = div.getAttribute("class");
  if (document.getElementById("controllo").className=="standard") { 
    if (className=="spazio") {
      div.className = "campo";
      div.innerHTML = svg+campo+'</svg>';
      }
    else if (className=="campo") {
      div.className = "grano_3";      
      div.innerHTML = svg+campo+'<path class="i2" d="M26 4 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4m30 5 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4m-18 2 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4" /></svg>';
      }
    else if (className=="grano_3") {
      div.className = "grano_2";
      div.innerHTML = svg+campo+'<path class="i2" d="M26 4 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4m30 5 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4 " /></svg>';
      }
    else if (className=="grano_2") {
      div.className = "grano_1";
      div.innerHTML = svg+campo+'<path class="i2" d="M26 4 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4" /></svg>';
      }
    else if (className=="grano_1") {
      div.className = "ortaggio_2";
      div.innerHTML = svg+campo+'<path class="i2" d="M26 4 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4m30 5 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4 " /></svg>';
      }
    else if (className=="ortaggio_2") {
      div.className = "ortaggio_1";
      div.innerHTML = svg+campo+'<path class="i2" d="M26 4 q9 0 9 6 t-9 6 t-9 -6 t9 -6 z m9 6 v4 q0 6 -9 6 t-9 -6 v-4" /></svg>';
      }
    else if (className=="ortaggio_1") {
      div.className = "spazio";
      }
  }
  else if (document.getElementById("controllo").className=="edilizia") {
    if (className=="spazio") {
      div.className = "stalla";
      div.innerHTML = svg+'<path class="i1" d="M 0 0 M18 20 v8 l12 9 v-8 l-6 -10 zl6 -1 l18 -12 l-6 1 zm12 9 v8 l18 -12 v-8 zl-6 -10 l18 -12 l6 10 z" /></svg>';
      }
    else if (className=="stalla") {
      div.className = "stanza";
      div.innerHTML = svg+'<path class="i1" d="M 0 0 h66 v44 h-66 z "/> <path class="i2" d="M9 6 h48 v32 h-48 z "/> <path class="i3" d="M9 6 h48 v8 h-48 z m24 16 m0 8 h16 v4 h-16 z m-10 -8 h6 v4 h-6 z m0 8 h6 v4 h-6 z"/> <path class="i4" d="M33 18 h16 v12 h-16 z m0 12 m-10 -8h6 v-4 h-6 z m0 8 h6 v-4 h-6 z " /></svg>';      
      } 
    else if (className=="stanza") {
      div.className = "stanza_argilla";
      }
    else if (className=="stanza_argilla") {
      div.className = "stanza_pietra";
      }
    else if (className=="stanza_pietra") {
      div.className = "spazio";
      }
  }
  //audioCampo.play();
}
