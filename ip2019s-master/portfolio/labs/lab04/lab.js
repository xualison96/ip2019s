

$(function(){
    
    var card = ['ace-of-club.svg','ace-of-diamonds.svg',
    'ace-of-diamonds.svg','ace-of-spades.svg'];

    for(var i =0 ; i<16 ; i++){
       var r = Math.floor((Math.random())*4);
    $('#d2').append('<img src="./' + card[r]+ '">');
    }
   
    }
);

