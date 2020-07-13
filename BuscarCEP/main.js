const inputElement = document.querySelector('input[type=text');
const btnElement = document.querySelector(' button');
const resultElement = document.querySelector(' span');
const nomeElement = document.querySelector('h3');
const ufElement = document.querySelector('h2');
const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

btnElement.onclick = pesquisar;


const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text")
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {

    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    );
}


function pesquisar() {

    let cep = inputElement.value;

    axios.get('http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep + '&formato=json')
        .then(function(response) {

            let resposta = response.data.resultado_txt;
            let nome = response.data.cidade;
            let uf = response.data.uf;

            console.log(response);
            render(nome, uf, resposta);



        })
        .catch(function(error) {
            console.warn(error);
        });


}

function render(nome, uf, resultado) {

    resultElement.innerHTML = '';
    nomeElement.innerHTML = '';
    ufElement.innerHTML = '';

    if (nome == "" && uf == "") {
        resultElement.innerHTML = resultado;

    } else {
        resultElement.style.color = "red";
        resultElement.innerHTML = resultado;
        nomeElement.innerHTML = 'Cidade: ' + nome;
        ufElement.innerHTML = 'uf: ' + uf;
    }

}



checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
})