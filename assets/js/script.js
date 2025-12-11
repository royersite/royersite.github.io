//  Saludo dinámico <h2>
let saludoAnterior = '';

function actualizarSaludo() {
    const h2 = document.querySelector('.header-content h2');
    const horaActual = new Date().getHours();
    let saludo;

    if (horaActual < 6) {
        saludo = 'Buenas madrugadas';
    } else if (horaActual < 12) {
        saludo = 'Buenos días';
    } else if (horaActual < 19) {
        saludo = 'Buenas tardes';
    } else {
        saludo = 'Buenas noches';
    }

    //  Solo actualiza el saludo si es diferente al anterior
    if (saludo !== saludoAnterior) {
        h2.classList.add('fade-out');

        setTimeout(() => {
            h2.textContent = saludo;
            h2.classList.remove('fade-out');
            saludoAnterior = saludo;
        }, 600); // Desaparece y luego aparece con el nuevo texto
    }
}

//  Ejecutar la función de saludo al cargar la página & luego cada 58 segundos
actualizarSaludo();
setInterval(actualizarSaludo, 58000);


//  Vibración del <@RoyeR>
const link = document.querySelector('.animate-link');
const vibrarDuracion = 1400;
const pausaDuracion = 9000;

//  Función para iniciar la vibración
function iniciarVibracion() {
    link.style.animation = 'vibrate 0.3s linear infinite';
}

//  Función para detener la vibración
function detenerVibracion() {
    link.style.animation = 'none';
}

//  Iniciar & detener la vibración cada ciclo de vibración + pausa
setInterval(() => {
    iniciarVibracion();
    setTimeout(detenerVibracion, vibrarDuracion);
}, vibrarDuracion + pausaDuracion);


//  Copyright automático
const year = new Date().getFullYear();
document.getElementById("copyright").textContent = year;

/*
//  X app & web
document.querySelector('.social-profile-link').addEventListener('click', function(e) {
    e.preventDefault();
    const screenName = this.dataset.screenname;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const appURL = `twitter://user?screen_name=${screenName}`;
    const webURL = this.href;

    //  Intentar abrir la aplicación
    const appLaunchTime = Date.now();
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appURL;
    document.body.appendChild(iframe);

    //  Manejar el fallback con temporizador mejorado
    setTimeout(() => {
        document.body.removeChild(iframe);
        if (Date.now() - appLaunchTime < (isIOS ? 2000 : 1000)) {
            window.open(webURL, '_blank');
        }
    }, isIOS ? 500 : 100); //  Ajuste para diferentes sistemas operativos
});*/
// Instagram app & web
document.querySelector('.social-profile-link').addEventListener('click', function(e) {
    e.preventDefault();
    const screenName = this.dataset.screenname;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Modificado: URL de la app de Instagram en lugar de Twitter
    const appURL = `instagram://user?username=${screenName}`; // ← CAMBIO

    // Modificado: URL web de Instagram en lugar de href de Twitter
    const webURL = `https://www.instagram.com/${screenName}/`; // ← CAMBIO

    // Intentar abrir la aplicación
    const appLaunchTime = Date.now();
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appURL;
    document.body.appendChild(iframe);

    // Manejar el fallback con temporizador mejorado
    setTimeout(() => {
        document.body.removeChild(iframe);
        if (Date.now() - appLaunchTime < (isIOS ? 2000 : 1000)) {
            window.open(webURL, '_blank');
        }
    }, isIOS ? 500 : 100);
});

/*
//  traducciones del tagline 
document.addEventListener("DOMContentLoaded", function() {
    var tagline = document.querySelector('.tagline');
    // Lista de traducciones de "Amo el respeto" en 18 idiomas:
    var translations = [
        "Mi amas respekton",            // Esperanto
        "J'aime le respect",            // Francés
        "Ich liebe Respekt",            // Alemán
        "Eu amo o respeito",            // Portugués
        "Amo il rispetto",              // Italiano
        "Ik hou van respect",           // Neerlandés
        "Kocham szacunek",              // Polaco
        "Aku mencintai rasa hormat",    // Indonesio
        "Saygıyı seviyorum",            // Turco
        "Estimo el respecte",           // Catalán
        "Iubesc respectul",             // Rumano
        "Szeretem a tiszteletet",       // Húngaro
        "Jeg elsker respekt",           // Danés
        "Rakastan kunnioitusta",        // Finés
        "Jag älskar respekt",           // Sueco
        "Ég elska virðingu",            // Islandés
        "Me az kar an doujañs",         // Bretón
        "Volim poštovanje",             // Croata
        "Amo o respecto",               // Gallego
        "Ma armastan austust",          // Estonio
        "Ech hunn Respekt gär",         // Luxemburgués
        "Is breá liom an meas",         // Irlandés
        "Maite dut errespetua",         // Vasco
        //"...",                           Guaraní
        "I love respect",               // Inglés
        "Amo el respeto"                // Español
    ];
    var index = 0;
    
    //  Función para cambiar de idioma con transición suave
    function cycleText() {
        // Desvanecer el texto actual en 1000ms
        tagline.style.transition = "opacity 1000ms";
        tagline.style.opacity = 0;
        setTimeout(function() {
            //  Actualizar el texto al siguiente idioma
            index = (index + 1) % translations.length;
            tagline.textContent = translations[index];
            //  Volver a mostrar el texto con una transición de 1000ms
            tagline.style.transition = "opacity 1000ms";
            tagline.style.opacity = 1;
        }, 1000);
    }
    
    //  Esperar 6700ms para iniciar la animación
    setTimeout(function() {
        //  Asignar el primer texto
        tagline.textContent = translations[index];
        //  Transición inicial de 1800ms para aparecer
        tagline.style.transition = "opacity 1800ms";
        tagline.style.opacity = 1;
        //  Una vez aparecido, esperar 2000ms y comenzar el ciclo de cambio
        setTimeout(function() {
            //  Cada ciclo dura 4000ms: 2000ms visible, 1000ms fade-out y 1000ms fade-in
            setInterval(cycleText, 7000); // 4000
        }, 5000); // 2000 2s
    }, 8900);
});*/

// Traducción del tagline
document.addEventListener("DOMContentLoaded", function() {
    const tagline = document.querySelector('.tagline');

    const translations = [
        "── Mi amas respekton ──",            // Esperanto
        "── J'aime le respect ──",            // Francés
        "── Ich liebe Respekt ──",            // Alemán
        "── Eu amo o respeito ──",            // Portugués
        "── Amo il rispetto ──",              // Italiano
        "── Ik hou van respect ──",           // Neerlandés
        "── Kocham szacunek ──",              // Polaco
        "── Aku mencintai rasa hormat ──",    // Indonesio
        "── Saygıyı seviyorum ──",            // Turco
        "── Estimo el respecte ──",           // Catalán
        "── Iubesc respectul ──",             // Rumano
        "── Szeretem a tiszteletet ──",       // Húngaro
        "── Jeg elsker respekt ──",           // Danés
        "── Rakastan kunnioitusta ──",        // Finés
        "── Jag älskar respekt ──",           // Sueco
        "── Ég elska virðingu ──",            // Islandés
        "── Me az kar an doujañs ──",         // Bretón
        "── Volim poštovanje ──",             // Croata
        "── Amo o respecto ──",               // Gallego
        "── Ma armastan austust ──",          // Estonio
        "── Ech hunn Respekt gär ──",         // Luxemburgués
        "── Is breá liom an meas ──",         // Irlandés
        "── Maite dut errespetua ──",         // Vasco
        "── I love respect ──",               // Inglés
        "── Amo el respeto ──"                // Español
    ];

    let index = 0;

    // AQUÍ CAMBIAS LOS TIEMPOS
    let TIEMPO_PRIMER_IDIOMA_VISIBLE = 4000;  // cuánto tiempo está el primer texto antes de empezar a rotar (4000 = 4 segundos)
    let DURACION_TRANSICION          = 1000;  // duración del fade-out y del fade-in (1000 = 1 segundo)
    let TIEMPO_CADA_IDIOMA_VISIBLE   = 4000;  // cuánto tiempo está CADA idioma 100 % visible y legible (después del primero)

    // Primer idioma → aparece al instante y totalmente visible
    tagline.textContent = translations[0];
    tagline.style.opacity = 1;
    index = 1;

    // Función que cambia al siguiente idioma con fade suave
    function cycleText() {
        // Fade-out
        tagline.style.transition = `opacity ${DURACION_TRANSICION}ms`;
        tagline.style.opacity = 0;

        setTimeout(() => {
            // Cambiar texto cuando está invisible
            tagline.textContent = translations[index];
            index = (index + 1) % translations.length;

            // Fade-in
            tagline.style.transition = `opacity ${DURACION_TRANSICION}ms`;
            tagline.style.opacity = 1;
        }, DURACION_TRANSICION);
    }

    // Después del tiempo inicial → empezamos la rotación infinita
    setTimeout(() => {
        cycleText(); // primer cambio
        setInterval(cycleText, DURACION_TRANSICION + DURACION_TRANSICION + TIEMPO_CADA_IDIOMA_VISIBLE);
        //                     ↑ fade-out      ↑ fade-in            ↑ tiempo visible
    }, TIEMPO_PRIMER_IDIOMA_VISIBLE);
});
