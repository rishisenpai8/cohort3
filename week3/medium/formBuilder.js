const inputElement = document.getElementById('input-feild');

const feildPreview = document.getElementById('feildPreviewPara')

const submit = document.getElementById('button')

submit.addEventListener('click',()=>{
    const inputText = inputElement.value;
    
    feildPreview.textContent=inputText;
    inputElement.value=''
})