document.querySelectorAll('footer')[0].style.backgroundColor = "darkgreen";
document.querySelectorAll('header')[0].style.backgroundColor = "green";
let titulos = document.getElementsByTagName('h3');
for ( let i = 0; i < titulos.length; i +=1) {
  titulos[i].style.backgroundColor = "purple";
}

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = "salmon";
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = "yellow";