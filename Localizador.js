import './Localizador.css';
import '@picocss/pico';

const caixa = document.querySelector('#caixa');
const botao = document.querySelector('#button');
const input = document.querySelector('#perfil')
const inputConsultarPerfil = input.user;

botao.addEventListener('click', async function(event) {
    event.preventDefault();   
    consultarPerfil(inputConsultarPerfil.value);
})

async function consultarPerfil (perfil) {
    let url = `https://api.github.com/users/${perfil}`
    let response = await fetch(url)
    let dadosPerfis = await response.json();
    caixa.innerHTML = `
        <img src="${dadosPerfis.avatar_url}"></img>
        <p>Perfil: ${dadosPerfis.login}</p>
    `
}
