// Variables globales
var addList = document.getElementById('insert-list');  
var button = document.getElementById('btn-agregar');



/* Versión 0.0.1 */
addList.addEventListener('click', function (event) { 
    var hideFirst = document.getElementById('insert-list');
    hideFirst.id = 'first';                                         
    // hideFirst.style.display = 'none'; 
    hideFirst.style = 'first';
    var showSecond = document.getElementById('form');                  
    // showSecond.id = 'second';
    // showSecond.style = 'second';
    showSecond.style.display = 'block';
    
});











