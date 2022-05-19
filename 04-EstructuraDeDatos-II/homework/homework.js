'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  class LinkedList {
    constructor() {
       this.head = null;
       this.length = 0;
     }
 }
 LinkedList.prototype.Node = class {
    constructor(data) {
       this.data = data; 
       this.next = null;
    }
 }

 LinkedList.prototype.add = function(data){
  let node = new Node(data);
  
  if(this.head === null){
    this.head = node;
  }
  else{
    let actual = this.head;
    while(actual.next){
      actual = actual.next;
  }
    actual.next = node;
  }
    this._length++;
    return node;
  }

}

LinkedList.prototype.remove = function (){
  let current = this.head;
  if(!current) return null;
  if (!current.next){
    let aux = current.value;
    this.head = null;
      return aux;
  }
  while(current.next.next){

  }
}



LinkedList.prototype.search = function(valueOrcb){
  let current = this.head;
  while (current){
    if (typeof valueOrcb == 'function'){
      if (valueOrcb(current.value))
    }
    if (current.value === valueOrcb){
      return valueOrcb;
    }
    current = current.next;
  }
}




// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
HashTable.prototype.hash = function(key){
  let suma = 0;
  for (let i = 0;i<key.length ;i++){
    suma += key.charCodeAt(i);
  }
  return suma % this.numBuckets;
}
HashTable.prototype.set = function (key, value){
  let bucket =this.hash(key);
  if(!this.buckets[bucket]){
    this.buckets[bucket] = {};
  }
  this.buckets[bucket][key] = value;
}
HashTable.prototype.get = function(key){
  let bucket = this.hash(key);
  return this.buckets[bucket][key];
}
HashTable.prototype.hasKey = function(key){
  let bucket =this.hash(key);
  return this.buckets[bucket].hasOwnProperty(key);
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
