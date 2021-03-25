let names = [
    "Bryan",
    "Celina",
    "Lance",
    "Andrea","Tyler","Johnathan","Chaz","Dustin","Pete","Tom","Will","Daemon","Jada","The Deacon","Parker"
];

const addName = () => {
    let nameCtrl = document.getElementById("new");
    let name = nameCtrl.value;
    names.push(name);
    loadDiv();
}

const waitVal = () => {
    let nameCtrl = document.getElementById("new");
    let name = nameCtrl.value;
    let n = name.toString().length;
    if(n === 1){
        var buttons = document.querySelectorAll('.btn')
        buttons.forEach(function (button) {
          var button = new bootstrap.Button(button)
          button.toggle()
        })
    }
}
const loadDiv = () => {
    let divCtrl = document.getElementById("ps");
    divCtrl.innerHTML ="";
    for(let name of names){
        let p = `<td>${name}</td>`;
        divCtrl.innerHTML += p;
    }
}