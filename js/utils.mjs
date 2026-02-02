

export async function headerFooter(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

export function saveSettings(settings) {
    localStorage.setItem('playerSettings', JSON.stringify(settings));
}

export function loadSettings() {
    const settings = localStorage.getItem('playerSettings');
    if (settings) {
        this.settings = JSON.parse(settings);
    }
}

