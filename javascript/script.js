/*
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
 */

// Creo gli elementi dinamicamente
const body = document.querySelector('body');
main = document.createElement('main');
body.appendChild(main);
div = document.createElement('div');
main.appendChild(div);
const firstList = document.createElement('ul');
const secondList = document.createElement('ul');
div.appendChild(firstList);
div.appendChild(secondList);

// Creo un Array
const toBuyList = 
[
"mandarini",
"castagne",
"cime di rape",
"diario dei me contro te(importante)",
"funghi",
"macinato",
"pane",
"carta igienica biodegradabile",
]

// Creo un ciclo e l'elemento li dinamicamente e in ogni li stampo un elemento della lista
 for ( let i = 0; i < toBuyList.length ; i++ ){
 li = document.createElement('li');
 li.innerHTML = toBuyList[i];
 firstList.appendChild(li);
 }

// Creo un counter fuori dal ciclo while
let i= 0;
while(i < toBuyList.length){
  li = document.createElement('li');
  li.innerHTML = toBuyList[i];
  secondList.appendChild(li);
  i++ ;
}