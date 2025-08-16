// FUNCIONES DE ENVÍO
function sendDiscordMsg(mensaje) {
    fetch(NETLIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: mensaje })
    }).catch(() => {});
}

// CLIC EN BODY (ID único neutro)
const bodyTrack = document.getElementById('track-body-site');
bodyTrack.addEventListener('click', (e) => {
    const target = e.target;
    // Evitar contar clics sobre el enlace
    if (!target.closest('#track-link-site')) {
        sendDiscordMsg('Un usuario **tocó el body** en royersite.github.io');
    }
});

// CLIC EN EL ENLACE (ID único neutro)
const linkTrack = document.getElementById('track-link-site');
linkTrack.addEventListener('click', (e) => {
    e.preventDefault();
    sendDiscordMsg('Un usuario tocó el enlace **@RoyeR** en royersite.github.io');
    window.open(e.currentTarget.href, '_blank');
});