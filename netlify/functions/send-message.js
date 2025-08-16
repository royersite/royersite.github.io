// netlify/functions/send-message.js
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { content } = JSON.parse(event.body);

    // Validación súper sencilla
    if (!content) {
        return { statusCode: 400, body: 'Missing content' };
    }

    await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
    });

    return { statusCode: 200, body: 'OK' };
};
