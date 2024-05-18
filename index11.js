let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

let dayInMonth = 32 - new Date(2024, month, 32).getDate();
let currentDate = date.getDate();


let weekends = [];

for (let i = 1; i < dayInMonth;i++) {
    let newDate = new Date(year,month,i);
    if(newDate.getDay() == 0 || newDate.getDay() == 6)
        weekends.push(i);
}

let arr = Array.from({length:dayInMonth},()=>dayInMonth--).reverse();
let ul;

for (let i = 0; i < arr.length; i++) {

    ul = document.createElement('ul');
    ul.textContent = arr[i];
   
    for (let j = 0; j < weekends.length;j++) {
if(ul.textContent == weekends[j])
        ul.classList.add('color1');
    }
    if (ul.textContent == currentDate) ul.classList.add('color2');
    ul.textContent = ul.textContent +' '
    + date.toLocaleString('default',{month:'long'});
    document.body.appendChild(ul);
}





