function ejercicio1(){
    let colores = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc']

    let menoresMarron = colores.every(
        function(color) {
            return color < 'marro'
        })

    document.write('<strong>Todos los colores son menores que marró: </strong>', menoresMarron, '<br/>')
    
    let colorsMenorsQueMarro = colores.filter(
        function(color) {
            return color < 'marró'
        })
    document.write('<strong>Colors menors que marró: </strong>', colorsMenorsQueMarro, '<br/>')
    
    let darrers2Colors = colores.slice(-2)
    document.write('<strong>Ultimos 2 colores: </strong>', darrers2Colors, '<br/>')
    
    colores.push('turquesa')
    document.write('<strong>Array con el color turquesa añadido: </strong>', colores, '<br/>')
    
    let indiceVerde = colores.indexOf('verd')
    if (indiceVerde !== -1) {
        colores.splice(indiceVerde, 1)
    }
    document.write('<strong>Array final sin el color verde: </strong>', colores, '<br/>')
}

function menor(numeros){
    return numeros > 30
}

function metodosArray(){
    let numeros = [23, 56, 12, 89, 45, 34, 78, 2, 67, 98];

    // at() Returns an indexed element of an array
    let numerosAt = numeros.at(4);
    document.writeln('<b>at (4): </b>' + numeros +' --> '+ numerosAt + '</br>');
    
    // concat() Joins arrays and returns an array with the joined arrays
    let numerosConcat = numeros.concat('33');
    document.writeln('<b>concat: </b>' + numeros +' --> '+ numerosConcat + '</br>');
    
    // constructor Returns the function that created the Array object's prototype
    let numerosConstructor = new Array(numeros);
    document.writeln('<b>constructor: </b>' + numeros +' --> '+ numerosConstructor + '</br>');
    
    // copyWithin() Copies array elements within the array, to and from specified positions
    let arrayCopy = numeros.slice();
    arrayCopy.copyWithin(2);
    document.writeln('<b>copy: </b>' + numeros +' --> '+ arrayCopy + '</br>');
    
    // entries() Returns a key/value pair Array Iteration Object
    let arrayEntries = numeros.entries();
    document.writeln('<b>entries: </b></br>');
    for (let entry of arrayEntries) {
        document.writeln(entry + '<br>');
    }
    
    // every() Checks if every element in an array pass a test
    let arrayEvery = numeros.every(menor);
    document.writeln('<b>every: </b>' + numeros +' --> '+ arrayEvery + '</br>');

    // fill() Fill the elements in an array with a static value
    let arrayFill = numeros.slice();
    arrayFill.fill('111');
    document.writeln('<b>fill: </b>' + numeros +' --> '+ arrayFill + '</br>');

    // filter() Creates a new array with every element in an array that pass a test
    edades = [2,3,4,5,6,7,8,9,10]
    let resultadoFilter = numeros.filter(edad => edad >= 6);
    document.write("<strong>filter</strong>: --> " + resultadoFilter + "<br>");

    // find() Returns the value of the first element in an array that pass a test

    let resultadoFind = numeros.find(num => num < 18);
    document.write("<strong>find</strong> --> " + resultadoFind + "<br>");

    // findIndex() Returns the index of the first element in an array that pass a test
    let resultadoFindIndex = numeros.findIndex(function(element){
        return element < 18;    })
    document.write("<strong>findIndex</strong> --> " + resultadoFindIndex + "<br>");

    // flat() Concatenates sub-array elements
    let subArray = [42,12,8, [36,75], 21];
    let resultadoFlat = subArray.flat();
    document.write("<strong>flat:</strong> --> " + resultadoFlat + "<br>");

    // flatMap() Maps all array elements and creates a new flat array
    let resultadoFlatMap = subArray.flatMap((num) => num + 5);
    document.write("<strong>flatMap</strong> (+5) --> " + resultadoFlatMap + "<br>");

    // forEach() Calls a function for each array element
    let arrayFE = numeros.slice();
    arrayFE.forEach(function(nom, index) {
        arrayFE[index] = nom + 33;
    });
    document.writeln('<b>for each: (+33 a cada num) </b>' + numeros + ' --> ' + arrayFE + '</br>');

    // from() Creates an array from an object
    let arrayFrom = Array.from(numeros);
    document.writeln('<b>from: </b>' + numeros +' --> '+ arrayFrom + '</br>');

    // includes() Check if an array contains the specified element
    let arrayInclude = numeros.includes(3);
    document.writeln('<b>includes: </b>' + numeros +' --> '+ arrayInclude + '</br>');

    // indexOf() Search the array for an element and returns its position
    let arrayInd = numeros.indexOf(12);
    document.writeln('<b>index: </b>' + numeros +' --> '+ arrayInd + '</br>');

    // isArray() Checks whether an object is an array
    let arrayIsArr = Array.isArray(numeros);
    document.writeln('<b>is array: </b>' + numeros +' --> '+ arrayIsArr + '</br>');

    // join() Joins all elements of an array into a string
    let arrayJoin = numeros.join(' - 22 - ');
    document.writeln('<b>join: </b>' + numeros +' --> '+ arrayJoin + '</br>');

    // keys() Returns a Array Iteration Object, containing the keys of the original array
    let arrayKeys = Array.from(numeros.keys());
    document.writeln('<b>keys: </b>' + numeros +' --> '+ arrayKeys + '</br>');

    // lastIndexOf() Search the array for an element, starting at the end, and returns its position
    let arrayLastI = numeros.lastIndexOf('2');
    document.writeln('<b>last index: </b>' + numeros +' --> '+ arrayLastI + '</br>');

    // length Sets or returns the number of elements in an array
    let arrayLength = numeros.length;
    document.writeln('<b>length: </b>' + numeros +' --> '+ arrayLength + '</br>');

    // map() Creates a new array with the result of calling a function for each array element
    let resulatadoMap = numeros.map(num => num * 3);
    document.write("<strong>map</strong>: "+ numeros+ ' --> ' + resulatadoMap + '</br>');

    // pop() Removes the last element of an array, and returns that element
    let arrayPop = numeros.slice();
    arrayPop.pop();
    document.writeln('<b>pop: </b>' + numeros +' --> '+ arrayPop + '</br>');

    // push() Adds new elements to the end of an array, and returns the new length
    let arrayPush = numeros.slice();
    arrayPush.push('482');
    document.writeln('<b>push: </b>' + numeros + ' --> ' + arrayPush + '</br>');

    // reduce() Reduce the values of an array to a single value (going left-to-right)
    let arrayReduce = numeros.reduce(function(acum, nom) {
        return acum + ' ' + nom;
        }, '');
        document.writeln('<b>reduce: </b>' + numeros + ' --> ' + arrayReduce + '</br>');

    // reduceRight() Reduce the values of an array to a single value (going right-to-left)
    let arrayReduceR = numeros.reduceRight(function(acum, nom) {
        return acum + ' ' + nom;
        }, '');
        document.writeln('<b>reduce right: </b>' + numeros + ' --> ' + arrayReduceR + '</br>');

    // reverse() Reverses the order of the elements in an array
    let arrayReverse = numeros.slice().reverse();
    document.writeln('<b>reverse: </b>' + numeros + ' --> ' + arrayReverse + '</br>');

    // shift() Removes the first element of an array, and returns that element
    let arrayShift = numeros.slice();
    arrayShift.shift();
    document.writeln('<b>shift: </b>' + numeros + ' --> ' + arrayShift + '</br>');

    // slice() Selects a part of an array, and returns the new array
    let arraySlice = numeros.slice(2,5);
    document.writeln('<b>slice: </b>' + numeros + ' --> ' + arraySlice + '</br>');

    // some() Checks if any of the elements in an array pass a test
    let arraySome = edades.some(function(edad){
        return edad < 58;})
    document.writeln('<b>some: </b>' + numeros + ' --> ' + arraySome + '</br>');

    // sort() Sorts the elements of an array
    let arraySort = numeros.slice();
    arraySort.sort();
    document.writeln('<b>sort: </b>' + numeros + ' --> ' + arraySort + '</br>');

    // splice() Adds/Removes elements from an array
    let arraySplice = numeros.slice();
    arraySplice.splice(1, 1,'88888');
    document.writeln('<b>splice: </b>' + numeros + ' --> ' + arraySplice + '</br>');

    // toString() Converts an array to a string, and returns the result
    let arrayToString = numeros.toString();
    document.writeln('<b>to string: </b>' + numeros + ' --> ' + arrayToString + '</br>');

    // unshift() Adds new elements to the beginning of an array, and returns the new length
    let arrayUnshift = numeros.slice();
    arrayUnshift.unshift('4949');
    document.writeln('<b>unshift: </b>' + numeros + ' --> ' + arrayUnshift + '</br>');

    // valueOf() Returns the primitive value of an array
    let arrayValueOf = numeros.valueOf();
    document.writeln('<b>value of: </b>' + numeros +' --> '+ arrayValueOf + '</br>');
}
