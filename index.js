// Entrada de dados. O parseInt() é importante para converter a entrada (String) para um número inteiro.
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

// Mapeamento das escolhas do treinador
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
}

// Verifica se um Pokémon foi escolhido corretamente e exibe a mensagem
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
} else {
    print("Escolha inválida! Selecione um número válido (1, 2, 4 ou 5).");
}

/*Correções e melhorias:
- Corrigido os valores faltantes nos else if – Antes, os valores para Charmander e Pikachu estavam ausentes.
- Adicionada validação para entrada inválida – Se o usuário inserir um número que não está na lista, ele recebe uma mensagem de erro.
- Garantido que o pokémon escolhido sempre tenha um valor antes da saída – Isso previne erros caso o número inserido não corresponda 
a nenhum Pokémon.*/
