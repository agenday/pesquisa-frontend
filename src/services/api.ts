export async function loadSurvey(token: string) {
    const url = import.meta.env.VITE_API_URL

    try {
        return await fetch(url + "/" + token, {method: 'GET'})
    } catch (error) {
        return null
    }
}

export async function sendAnswers(token: string, content: object) {
    const url = import.meta.env.VITE_API_URL

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(content);

    try {
        return await fetch(url + "/" + token, {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
    } catch (error) {
        return null
    }
}
