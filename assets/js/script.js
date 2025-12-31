/*
    💻 Úsalo sabiamente ¡no rompas nada!
    👋 Si estás leyendo esto, RoyeR te saluda.
*/
//  Saludo dinámico <h2>
let saludoAnterior = '';

function actualizarSaludo() {
    const h2 = document.querySelector('.header-content h2');
    const horaActual = new Date().getHours();
    let saludo;

    if (horaActual < 5) {
        saludo = 'Buenas madrugadas';
    } else if (horaActual < 12) {
        saludo = 'Buenos días';
    } else if (horaActual < 20) {
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


// Bloque adicional: rellenar <a> según JSON antes de hacer click
fetch('assets/json/redes.json')
    .then(res => res.json())
    .then(data => {
        const link = document.querySelector('.social-profile-link');

        // Determinar la red activa
        let activeNetwork = null;
        if (data.instagram.active) activeNetwork = { name: "Instagram", username: data.instagram.username };
        else if (data.x.active) activeNetwork = { name: "X", username: data.x.username };

        if (!activeNetwork) return;

        // Rellenar href, data-screenname y aria-label
        link.dataset.screenname = activeNetwork.username;
        link.setAttribute('aria-label', `Perfil de ${activeNetwork.name} de RoyeR`);

        if (activeNetwork.name === "Instagram") {
            link.href = `https://www.instagram.com/${activeNetwork.username}/`;
        } else {
            link.href = `https://x.com/${activeNetwork.username}`;
        }
    })
    .catch(err => console.error('Error cargando JSON de redes', err));


// Listener para Instagram: app & web
document.querySelector('.social-profile-link').addEventListener('click', function(e) {
    e.preventDefault();
    const screenName = this.dataset.screenname;
    const ariaLabel = this.getAttribute('aria-label');

    // Si es Instagram
    if (ariaLabel.includes('Instagram')) {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const appURL = `instagram://user?username=${screenName}`;
        const webURL = `https://www.instagram.com/${screenName}/`;
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = appURL;
        document.body.appendChild(iframe);
        const start = Date.now();
        setTimeout(() => {
            document.body.removeChild(iframe);
            if (Date.now() - start < (isIOS ? 2000 : 1000)) {
                window.open(webURL, '_blank');
            }
        }, isIOS ? 500 : 100);
    }
    // Si es X
    else if (ariaLabel.includes('X')) {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const appURL = `twitter://user?screen_name=${screenName}`;
        const webURL = this.href;
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = appURL;
        document.body.appendChild(iframe);
        const start = Date.now();
        setTimeout(() => {
            document.body.removeChild(iframe);
            if (Date.now() - start < (isIOS ? 2000 : 1000)) {
                window.open(webURL, '_blank');
            }
        }, isIOS ? 500 : 100);
    }
});

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
    let TIEMPO_PRIMER_IDIOMA_VISIBLE = 7000;  // cuánto tiempo está el primer texto antes de empezar a rotar (4000 = 4 segundos)
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
