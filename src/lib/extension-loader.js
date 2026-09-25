class ExtensionLoader {
    static getTargetOrigin() {
        const possibleOrigins = [];

        if (window.opener && !window.opener.closed) {
            try {
                possibleOrigins.push(new URL(window.opener.location.href).origin);
            } catch (err) {
                // ignore inaccessible opener URL
            }
        }

        if (window.parent && window.parent !== window) {
            try {
                possibleOrigins.push(new URL(window.parent.location.href).origin);
            } catch (err) {
                // ignore inaccessible parent URL
            }
        }

        if (document.referrer) {
            try {
                possibleOrigins.push(new URL(document.referrer).origin);
            } catch (err) {
                // ignore invalid referrer
            }
        }

        if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
            possibleOrigins.push("http://localhost:3000");
            possibleOrigins.push("http://localhost:5173");
        }

        possibleOrigins.push("https://studio.penguinmod.com");
        possibleOrigins.push("https://permafy.github.io");

        const origin = possibleOrigins.find(Boolean);
        return origin ? origin.replace(/\/$/, "") : "*";
    }
    static tryLoadExtension(url) {
        const parent = window.opener || window.parent;
        if (!parent || parent === window) throw new Error("No parent window available to import the extension into your project.");

        const origin = ExtensionLoader.getTargetOrigin();
        parent.postMessage({
            loadExt: `${url}`
        }, origin === "*" ? "*" : origin);
    }
    static handleWindowMessage(e) {
        // return false, invalid message; return extension "id", success; throw error, something failed
        const intendedOrigins = new Set([
            ExtensionLoader.getTargetOrigin(),
            location.origin,
            document.referrer ? new URL(document.referrer).origin : null,
        ].filter(Boolean).map((origin) => origin.replace(/\/$/, "")));

        const matchesAllowedOrigin = [...intendedOrigins].some((origin) => {
            if (origin === "*") return true;
            return e.origin === origin || e.origin.startsWith(`${origin}/`);
        });

        console.log('Received message from', e.origin, e);
        if (!matchesAllowedOrigin) {
            console.warn('Message is not from an allowed origin', [...intendedOrigins], e.origin);
            return false;
        }
        if (!e.data) {
            console.warn('No data attached to message');
            return false;
        }
        if (!e.data.p4) {
            console.warn('No data p4 attached to message');
            return false;
        }
        const eventData = e.data.p4;
        if (!eventData.type) {
            console.warn('No data type attached to message');
            return false;
        }

        // evil win
        if (eventData.type === 'success') {
            console.log('Loading extension was a success', eventData);
            return eventData.extensionId;
        }

        // evil fail
        console.error('Loading extension failed', eventData);
        throw new Error(eventData.error || 'Unknown extension import error.');
    }
}

export default ExtensionLoader;