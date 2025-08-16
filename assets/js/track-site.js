document.addEventListener('DOMContentLoaded', () => {
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
        bodyTrack.addEventListener('click', (e) => {
            // Evitar que los clicks sobre el link disparen el mensaje del body
            if (!e.target.closest('.track-link')) {
                sendDiscordMsg('Un usuario **tocó el body** en royersite.github.io');
            }
        });
    }

    /* SEGUIMIENTO DE ENLACE */
    const linkTrack = document.querySelector('.track-link');
    if (linkTrack) {
        linkTrack.addEventListener('click', (e) => {
            e.preventDefault(); // evita comportamiento por defecto
            sendDiscordMsg('Un usuario tocó el enlace **@RoyeR** en royersite.github.io');
            window.open(linkTrack.href, '_blank');
        });
    }
});