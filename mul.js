const num = document.querySelector('#num')
const insidediv =  document.querySelector('.insidediv')
const btn=document.querySelector('#btn')
for (var i = 2; i < num; i += 1) {
    console.log('Multiplcation Table Of :', + i)
    for (var j = 1; j < 21; j += 1) {
        console.log(i, 'x', num.value, '==', i * num.value)
    }
}


btn.addEventListener('click',()=>{
    
    insidediv.innerHTML = i+ 'x'+num.value +'='+i * num.value

})