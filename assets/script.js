
$('button').on('click',handleClick);
$('.jumbotron').append(`<h1 class='display-4 text-center'>${moment().format('LL')}</h1>`);

var tasks = localStorage.tasks.split(',,');

for(let i=0; i<$('textarea').length;i++){
    $('textarea')[i].value = tasks[i];
};
2
function handleClick() {
    let output = ''
    for(let i=0; i<$('textarea').length;i++){
        output += $('textarea')[i].value.trim() + ',,';
    }
    localStorage.setItem('tasks',output.slice(0,-1))
    console.log(output);
};


var today = new Date();
var currentHour = today.getHours();
// for (i = 0; i < )
var textHighlights = $('.text-highlight');
for (i = 9; i < 18; i++) {
    var selector = '.highlight-' + i;
    var myHighlight = $(selector);
    
    if ( i === currentHour) {
        myHighlight.addClass('present');   
    } else if (i < currentHour) {
        myHighlight.addClass('past');
    } else if( i > currentHour) {
        myHighlight.addClass('future');
    }
}   



