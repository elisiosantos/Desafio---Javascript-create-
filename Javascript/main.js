const btn = document.querySelector("#send");
btn.addEventListener("click", function(e){
    e.preventDefault();
    const no = document.querySelector("#no");
    const desc = document.querySelector("#desc");
    const val =  document.querySelector("#val");
    const op =  document.querySelector("#option");
    const option =  document.querySelector("#opcao").value;  
    const nome = document.querySelector('#productName').value;
    const descricao = document.getElementById('description').value;
    const valor = document.getElementById('value').value;
    console.log(nome);
    no.innerHTML = nome
    desc.innerHTML = descricao
    val.innerHTML = valor
    op.innerHTML = option
})