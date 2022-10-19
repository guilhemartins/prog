const baseURL = "https://127.0.0.1:5500"

/*
@param {string} email
@param {string} senha
@return {object} 
*/

function loginFirebase(email, senha){
    firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(result => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href = `${baseURL}/HTMLModElement.html`
    })
    .catch(error => {
        alert(`Erro ao efetuar o login: ${error.message}`)
    })
}