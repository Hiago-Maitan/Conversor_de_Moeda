function Converter() {

    var valorElemento = document.getElementById('valor')
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)

    var valoreEmReal = valorEmDolarNumerico * 5

    var resultado = document.getElementById('valorConvertido')

    resultado.innerHTML = `$${valorEmDolarNumerico} equivale a R$${valoreEmReal}`
    console.log(valoreEmReal)

}