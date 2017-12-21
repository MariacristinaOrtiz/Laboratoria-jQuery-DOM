/*jQuery(document).ready(function() {
  console.log(jQuery('#p-test').text());
  console.log(jQuery('#p-test').html());
  console.log(jQuery('#input-test').val());
});*/


/*$(document).ready(function(){
});*/
$(_=> {
console.log($('p').text('macri'));
console.log($('p').eq(0).text());
console.log($('p').eq(0).text('hvhvhjv'));
$('p').eq(0).addClass('color');
console.log($('ul').children());
console.log($('li').eq(0));
console.log($('li'));
$('div').attr('nombre-attr', 'val')/* crear atributo*//*con un parametro sirve para consultar el nombre del atributo*/
$('div').prop('nombre-attr', 'otro valor')
$('input').prop('value')
});
