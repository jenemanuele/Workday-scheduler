




$('button').on('click',handleClick);
$('.jumbotron').append(`<h1 class='display-4 text-center'>${moment().format('LL')}</h1>`);

var tasks = localStorage.tasks.split(',,');

for(let i=0; i<$('textarea').length;i++){
    $('textarea')[i].value = tasks[i];
};

function handleClick() {
    let output = ''
    for(let i=0; i<$('textarea').length;i++){
        output += $('textarea')[i].value.trim() + ',,';
    }
    localStorage.setItem('tasks',output.slice(0,-1))
    console.log(output);
};



//get today's date

//var today = new Date();
//var dd = String(today.getDate()).padStart(2, '0');
//var mm = String(today.getMonth() + 1).padStart(2, '0'); //january is 0
//var yyyy = today.getFullYear();

//today = mm + '/' + dd + '/' + yyyy;
//ocument.write(today);

//console.log(today);
