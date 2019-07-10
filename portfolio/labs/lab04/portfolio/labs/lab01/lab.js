/*

*/


function start(e) {
    var name = [
        {
            char:'許',
            big5:'B35C',
            cns:'1-5D42',
            unicode:'8A31'
        },
        {
            char:'崇',
            big5:'B152',
            cns:'1-5976',
            unicode:'5D07'
        },
        {
            char:'祐',
            big5:'AFA7',
            cns:'1-572A',
            unicode:'7950'
        }
    ];

    var ele =document.getElementById('div1');

    for (var i=0 ; i<3 ; i++ ) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += '    big5=';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += '    cns=';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += '    unicode=';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }

}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
