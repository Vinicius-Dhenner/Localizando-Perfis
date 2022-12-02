import './Localizador.css';
import '@picocss/pico';

const caixa = document.querySelector('#caixa');
const botao = document.querySelector('#button');
const input = document.querySelector('#perfil')
const inputConsultarPerfil = input.user;

inputConsultarPerfil.addEventListener('submit', function(event) {
    event.preventDefault();   
    consultarPerfil(inputConsultarPerfil.value);
    loader(true);
})

async function consultarPerfil (perfil) {
    let response = await fetch(`https://api.github.com/users/${perfil}`)
    let dadosPerfis = await response.json();
    caixa.innerHTML = `
        <img>${dadosPerfis.avatar_url}</img>
        <p>Perfil: ${dadosPerfis.login}</p>
    `
    loader(false);
}

function loader (ativo) {
        if (ativo) { 
          botao.setAttribute('aria-busy', 'true');
          botao.textContent = 'Consultando perfis...';
        } else {
          botao.removeAttribute('aria-busy'); 
          botao.textContent = 'Consultar' ;
        }
}