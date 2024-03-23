let marcas = [
    "https://images.pexels.com/photos/5911995/pexels-photo-5911995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13924892/pexels-photo-13924892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/872510/pexels-photo-872510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4061379/pexels-photo-4061379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/16923479/pexels-photo-16923479/free-photo-of-homem-sapatos-calcados-de-pe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5869812/pexels-photo-5869812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10963373/pexels-photo-10963373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13273980/pexels-photo-13273980.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4475780/pexels-photo-4475780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14122593/pexels-photo-14122593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14656315/pexels-photo-14656315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9330619/pexels-photo-9330619.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/18351014/pexels-photo-18351014/free-photo-of-marca-estilo-empresaria-executiva.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4841464/pexels-photo-4841464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5017804/pexels-photo-5017804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12456284/pexels-photo-12456284.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/12537509/pexels-photo-12537509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6475116/pexels-photo-6475116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

]

function sliderMarcas() {
    const sliderDiv = document.getElementById("slider");
    const intervaloPosterior = 5000; // Intervalo entre cada mudança de imagem após as 8 iniciais (em milissegundos)
    const imagensIniciais = 8;
    let indiceAtual = 0;

    // Exibe as 8 imagens iniciais imediatamente
    for (let i = indiceAtual; i < indiceAtual + imagensIniciais; i++) {
        const createImg = document.createElement("img");
        createImg.id = "marcas_slider";
        createImg.src = marcas[i % marcas.length]; // Assegura que o índice esteja dentro do intervalo das imagens
        sliderDiv.appendChild(createImg);
    }
    indiceAtual += imagensIniciais;

    // Define um intervalo para exibir as imagens restantes após as 8 iniciais
    setInterval(() => {
        // Limpa o slider antes de adicionar as novas imagens
        sliderDiv.innerHTML = '';

        // Loop sobre as próximas 8 imagens
        for (let i = indiceAtual; i < indiceAtual + imagensIniciais; i++) {
            const createImg = document.createElement("img");
            createImg.id = "marcas_slider";
            createImg.src = marcas[i % marcas.length]; // Assegura que o índice esteja dentro do intervalo das imagens
            sliderDiv.appendChild(createImg);
        }

        // Atualiza o índice atual para as próximas 8 imagens
        indiceAtual = (indiceAtual + imagensIniciais) % marcas.length;
    }, intervaloPosterior);
}

sliderMarcas();
