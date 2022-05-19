
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
// la diferencia entre var y asignarle el valor directamente a la variable es que la podemos volver a utilizar nuevamente con el valor asignado inicial es decir en un global scope mientras que si solo le asignamos un valor vamos a poder utilizarlo desde ese scope unícamente.
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9
}
c(8,9,10);//10,8,8,9
console.log(b);//10
console.log(x);//1
```

```javascript
console.log(bar);//undefined
console.log(baz);//error is not defined
foo();//Hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//Franco
```

```javascript
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//Franco
   }
})();
console.log(instructor);//Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);//The Flash
console.log(pm);//Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//Nan
7 / 0//Infinity
{}[0]//undefined
parseInt("09")//9
5 && 2//2
2 && 5//false
5 || 0//5
0 || 5//5
[3]+[3]-[10]//23
3>2>1//false
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();//output 2 porque el útlimo scope lo que hace es retornar 2 con la función foo()
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);//Meow Mix porque le estamos dando false con la función getFood y el ciclo if dice que si getFood es true snack = 'Friskies' pero como es false snack estaba declarado con Meow Mix.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//Aurelio De Rosa porque estamos llamando el obj y prop donde el fullname es === Aurelio De Rosa si le indicamos solo console.log(fullname) daría juan Perez.

var test = obj.prop.getFullname;

console.log(test());//undefined no está definido el obj ni la prop.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 50000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();//Primero 1 porque es la primera línea, Segundo 4, porque es el segundo console.log que está en la función y no tiene tiempo para aparecer, Tercero 3 porque tiene 0 segundos para aparecer y Cuarto 3 porque tiene mas tiempo para aparecer en consola. 
```
