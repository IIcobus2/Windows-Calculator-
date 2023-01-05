let displayRes = document.querySelector('.display__result');
let displayOp = document.querySelector('.display__operation');



let nums = document.querySelectorAll('.numbers');
console.log(nums);

nums.forEach(num => {
    num.addEventListener('click', (e) => {
        displayOp.innerHTML !== '0' ? displayOp.innerHTML += e.target.innerHTML : displayOp.innerHTML = e.target.innerHTML;
        console.log(e.target.innerHTML);
    });
});

let addHistory = (...op) => {
    displayRes.innerHTML = displayOp.innerHTML+' '+op;
}



let ops = document.querySelectorAll('[data-op]')
console.log(ops);

let limpar = () => displayOp.innerHTML = 0;
let negPos = () => displayOp.innerHTML =Number.parseInt( displayOp.innerHTML) * -1;
let divisao = () => {
    if (!(displayRes.innerHTML.trim()) && displayOp.innerHTML !== '0') {
        addHistory('÷')
    }else{
        let regex = (/(\d+)/g)
        displayRes.innerHTML = displayRes.innerHTML.match(regex)[0] / (displayOp.innerHTML == 0 ? displayOp.innerHTML = 1 : displayOp.innerHTML);
        displayOp.innerHTML = displayRes.innerHTML;
    }
    addHistory('÷')
    limpar()
        
}   

let multiplicacao = () => {
    if (!(displayRes.innerHTML.trim()) && displayOp.innerHTML !== '0') {
        addHistory('×')
    }else{
        let regex = (/(\d+)/g)
        displayRes.innerHTML = displayRes.innerHTML.match(regex)[0] * displayOp.innerHTML;
        displayOp.innerHTML = displayRes.innerHTML;
    }
    addHistory('×')
    limpar()
        
}  

let soma = () => {
    if (!(displayRes.innerHTML.trim()) && displayOp.innerHTML !== 0) {
        addHistory('+')
    }else{
        let regex = (/(\d+)/g)
        displayRes.innerHTML = Number.parseInt(displayRes.innerHTML.match(regex)[0]) + Number.parseInt(displayOp.innerHTML);
        displayOp.innerHTML = displayRes.innerHTML;
    }
    addHistory('+')
    limpar()
        
}  

let subtracao = () => {
    if (!(displayRes.innerHTML.trim()) && displayOp.innerHTML !== '0') {
        addHistory('-')
    }else{
        let regex = (/(\d+)/g)
        displayRes.innerHTML = displayRes.innerHTML.match(regex)[0] - displayOp.innerHTML;
        displayOp.innerHTML = displayRes.innerHTML;
    }
    addHistory('-')
    limpar()
        
} 

let resultado = () => { 
    if (!(displayRes.innerHTML.trim()) && displayOp.innerHTML !== '0') {
        addHistory('=')
    }else{
        let aux = (displayRes.innerHTML).split(' ')
        if(aux[0] == 0) aux[0] = 1
        switch (aux[1]) {
            case '÷':
                displayRes.innerHTML = aux[0] / displayOp.innerHTML;
                displayOp.innerHTML = displayRes.innerHTML;
                addHistory('÷')
                break;
            case '×':
                displayRes.innerHTML = aux[0] * displayOp.innerHTML;
                displayOp.innerHTML = displayRes.innerHTML;
                addHistory('×')
                break;
            case '+':
                displayRes.innerHTML = Number.parseInt(aux[0]) + Number.parseInt(displayOp.innerHTML);
                displayOp.innerHTML = displayRes.innerHTML;
                addHistory('+')
                break;
            case '-':
                displayRes.innerHTML = aux[0] - displayOp.innerHTML;
                displayOp.innerHTML = displayRes.innerHTML;
                addHistory('-')
                break;
        
            default:
                break;
        }
    }
    limpar()
}
    


let porcentagem = () => {
    if(displayRes.innerHTML && displayOp.innerHTML !== '0'){
        displayOp.innerHTML = displayOp.innerHTML / (displayRes.innerHTML).regex(/(\d+)/g)[0];
    }else{
        displayRes.innerHTML = 0
        displayOp.innerHTML = 0
    }
}    

ops.forEach(op => {
    op.addEventListener('click', () => {
        if(displayRes.innerHTML == 0) displayRes.innerHTML = ''
        switch (op.getAttribute('data-op')) {
            case 'limpar':
                limpar()
                break;
            case 'neg-pos':
                negPos()
                break;
            case 'porcentagem':
                porcentagem()
                addHistory()
                break;
            case 'divisao':
                divisao()
                break;
            case 'multiplicacao':
                multiplicacao()
            break;
            case 'soma':
                soma()
            break;
            case 'subtracao':
                subtracao()
            break;
            case 'igual':
                resultado()
            break;
        
            default:
                break;
        }

    });
  });
