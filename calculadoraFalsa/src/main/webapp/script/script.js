function recogerDatos(form){
    let resultado = form.valores.value;        
    form.vista.value = Number(form.vista.value)+Number(eval(resultado));
}