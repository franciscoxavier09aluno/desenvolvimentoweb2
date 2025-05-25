// Executa quando a página estiver carregada
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display"); // Campo de exibição
    const buttons = document.querySelectorAll(".buttons button"); // Botões

    // Insere valor no display
    function handleInput(value) {
        if (display.value === "0" || display.value === "Erro") {
            display.value = value;
        } else {
            display.value += value;
        }
    }

    // Adiciona eventos aos botões
    buttons.forEach(button => {
        const value = button.dataset.value;

        const handleEvent = () => {
            if (value !== undefined) {
                handleInput(value); // Número ou operador
            } else if (button.id === "clear") {
                display.value = "0"; // Limpa
            } else if (button.id === "equal") {
                try {
                    display.value = eval(display.value); // Calcula
                } catch {
                    display.value = "Erro"; // Erro no cálculo
                }
            }
        };

        button.addEventListener("click", handleEvent); // Clique
        button.addEventListener("touchstart", e => {}); // Toque (vazio)
    });
});