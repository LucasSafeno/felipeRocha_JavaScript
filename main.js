const names = ['Lucas', 'Thauanna', 'Daniel'];

const lucas = names[0];

console.log(lucas);

// Adicionar elementos final do array
names.push('Maria');
console.log('============ Push ============');
console.log(names);

// Adicionar elementos inicio  do array
names.unshift('Zé');
console.log('============ unshift ============');
console.log(names);

// Remove ultimo valor de uma lista
names.pop();
console.log('============ pop ============');
console.log(names);

// Remove Primeiro elemento inicio do array
names.shift('Zé');
console.log('============ shift ============');
console.log(names);

// Mudar valores
console.log('============ Mudar valores ============');
names[0] = 'Tenorio';
console.log(names);

// Verificar index do elementos
console.log('====== Verificar indice do elemento ======');
console.log(names.indexOf('Tenorio'));

// Ordenar em ordem alfabetica
console.log('======== Ordem Alfabetica ========');
const sortedNames = names.sort();
console.log(sortedNames);

// Quantos Itens possuir
console.log('============ Qntd de Items ============');
console.log(names.length);

// Verifica se é um array
console.log('======== Verificar se é array ========');
const namesIsArray = Array.isArray(names);
console.log(namesIsArray);
