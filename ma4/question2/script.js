fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
    .then(result => result.json())
  .then((res) => {
    CreateTodo(res);
  })
.catch(err => console.log(err))


function CreateTodo(result){
    var cards = document.getElementById('card1');
//card1
cards.innerHTML += "Id: " + result[0].id;
cards.innerHTML += "<br>";
cards.innerHTML += "Title: " + result[0].title;
cards.innerHTML += "<br>";
cards.innerHTML += "Completed: " + result[0].completed;
//card2
    var cards = document.getElementById('card2');
cards.innerHTML += "Id: " + result[1].id;
cards.innerHTML += "<br>";
cards.innerHTML += "Title: " + result[1].title;
cards.innerHTML += "<br>";
cards.innerHTML += "Completed: " + result[1].completed;
//card3
    var cards = document.getElementById('card3');
cards.innerHTML += "Id: " + result[2].id;
cards.innerHTML += "<br>";
cards.innerHTML += "Title: " + result[2].title;
cards.innerHTML += "<br>";
cards.innerHTML += "Completed: " + result[2].completed;
//card4
    var cards = document.getElementById('card4');
cards.innerHTML += "Id: " + result[3].id;
cards.innerHTML += "<br>";
cards.innerHTML += "Title: " + result[3].title;
cards.innerHTML += "<br>";
cards.innerHTML += "Completed: " + result[3].completed;
//card5
    var cards = document.getElementById('card5');
cards.innerHTML += "Id: " + result[4].id;
cards.innerHTML += "<br>";
cards.innerHTML += "Title: " + result[4].title;
cards.innerHTML += "<br>";
cards.innerHTML += "Completed: " + result[4].completed;
//card6
    var cards = document.getElementById('card6');
cards.innerHTML += "Id: " + result[5].id;
cards.innerHTML += "<br>";
cards.innerHTML += "Title: " + result[5].title;
cards.innerHTML += "<br>";
cards.innerHTML += "Completed: " + result[5].completed;
//card7
    var cards = document.getElementById('card7');
cards.innerHTML += "Id: " + result[6].id;
cards.innerHTML += "<br>";
cards.innerHTML += "Title: " + result[6].title;
cards.innerHTML += "<br>";
cards.innerHTML += "Completed: " + result[6].completed;
//card8
    var cards = document.getElementById('card8');
cards.innerHTML += "Id: " + result[7].id;
cards.innerHTML += "<br>";
cards.innerHTML += "Title: " + result[7].title; 
cards.innerHTML += "<br>";
cards.innerHTML += "Completed: " + result[7].completed; 
}


