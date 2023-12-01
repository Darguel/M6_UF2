function ejercicio1(){
    let colores = ['verd', 'vermell', 'groc', 'blau','negre', 'blanc']

    let menoresMarron = colores.every(function(color) {
        return color < 'marro';
    });
    
    document.write('Todos los colores que son menores que marron: ', menoresMarron);
    
    
    let colorsMenorsQueMarro = colors.filter(function(color) {
        return color < 'marró';
    });
    document.write('Colors menors que marró:', colorsMenorsQueMarro);
    
    
    let darrers2Colors = colores.slice(-2);
    document.write('Ultimos 2 colores: ', darrers2Colors);
    
    
    colores.push('turquesa');
    document.write('Array con el color turquesa añadido: ', colores);
    
    
    let indiceVerde = colores.indexOf('verd');
    if (indiceVerde !== -1) {
        colores.splice(indiceVerde, 1);
    }
    document.write('Array final sin el color verde: ', colores);
}

