document.addEventListener('DOMContentLoaded',function(){
    let textInput = document.querySelector('#textInput')
    let var1 = document.querySelector('#one')
    let var2 = document.querySelector('#two')
    let var3 = document.querySelector('#three')
    let var4 = document.querySelector('#four')
    let var5 = document.querySelector('#five')
    let var6 = document.querySelector('#six')
    let var7 = document.querySelector('#seven')
    let var8 = document.querySelector('#eight')
    let var9 = document.querySelector('#nine')
    let var0 = document.querySelector('#zero')
    let varAdd = document.querySelector('#plus')
    let varMinus = document.querySelector('#minus')
    let varMult = document.querySelector('#times')
    let varDivide = document.querySelector('#divide')
    let varEqual = document.querySelector('#equal')
    let varClear = document.querySelector('#clear')
    var1.onclick = ()=>{
        textInput.value += var1.innerHTML;
    };
    var2.onclick = ()=>{
        textInput.value += var2.innerHTML;
    };
    var3.onclick = ()=>{
        textInput.value += var3.innerHTML;
    };
    var4.onclick = ()=>{
        textInput.value += var4.innerHTML;
    };
    var5.onclick = ()=>{
        textInput.value += var5.innerHTML;
    };
    var6.onclick = ()=>{
        textInput.value += var6.innerHTML;
    };
    var7.onclick = ()=>{
        textInput.value += var7.innerHTML;
    };
    var8.onclick = ()=>{
        textInput.value += var8.innerHTML;
    };
    var9.onclick = ()=>{
        textInput.value += var9.innerHTML;
    };
    var0.onclick = ()=>{
        textInput.value += var0.innerHTML;
    };
    varAdd.onclick = ()=>{
        textInput.value += varAdd.innerHTML;
    };
    varMinus.onclick = ()=>{
        textInput.value += varMinus.innerHTML;
    };
    varMult.onclick = ()=>{
        textInput.value += varMult.innerHTML;
    };
    varDivide.onclick = ()=>{
        textInput.value += varDivide.innerHTML;
    };
    varEqual.onclick = ()=>{
        try{
            textInput.value = eval(textInput.value);
        }
        catch(e) {
            textInput.value = e;
        }
    };
    varClear.onclick = ()=>{
        textInput.value = '';
    };
})