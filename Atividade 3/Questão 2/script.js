// Função para buscar o CEP
function buscarCep() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';

  if (cep.length !== 8) {
    resultadoDiv.innerHTML = '<p class="erro">CEP inválido. Digite 8 números.</p>';
    return;
  }

// Utilizando o fetch() para busca na API
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .then(data => {
      if (data.erro) {
        resultadoDiv.innerHTML = '<p class="erro">CEP não encontrado.</p>';
      } else {
        resultadoDiv.innerHTML = `
          <h2>Resultado:</h2>
          <p><strong>CEP:</strong> ${data.cep}</p>
          <p><strong>Logradouro:</strong> ${data.logradouro}</p>
          <p><strong>Bairro:</strong> ${data.bairro}</p>
          <p><strong>Cidade:</strong> ${data.localidade}</p>
          <p><strong>Estado:</strong> ${data.uf}</p>
        `;
      }
    })
    // Detectando erros com o .catch
    .catch(error => {
      resultadoDiv.innerHTML = `<p class="erro">Erro: ${error.message}</p>`;
    });
}