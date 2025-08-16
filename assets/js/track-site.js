/* CONFIGURACIÓN (OCULTA) */
const NETLIFY_ENDPOINT = '/.netlify/functions/send-message';

/* FUNCIÓN PARA ENVIAR MENSAJE A DISCORD */
function sendDiscordMsg(mensaje) {
    fetch(NETLIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: mensaje })
    }).catch(() => {});
}

/* SEGUIMIENTO DE BODY */
const bodyTrack = document.querySelector('.track-body');
if (bodyTrack) {
    bodyTrack.addEventListener('click', () => {
        sendDiscordMsg('Un usuario **tocó el body** en royersite.github.io');
    });
}

/* SEGUIMIENTO DE ENLACE */
const linkTrack = document.querySelector('.track-link');
if (linkTrack) {
    linkTrack.addEventListener('click', (e) => {
        e.preventDefault(); // opcional, si quieres abrir el link normal, puedes eliminar esta línea
        sendDiscordMsg('Un usuario tocó el enlace **@RoyeR** en royersite.github.io');
        window.open(linkTrack.href, '_blank');
    });
}
