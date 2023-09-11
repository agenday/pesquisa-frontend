export async function loadSurvey(token) {
    const url = import.meta.env.VITE_API_URL

    return await fetch(url + "/" + token, {method: 'GET'})
      .then(response => response.json())
}
