const inputPeso = document.getElementById('inputPeso');
const inputEstatura = document.getElementById('inputEstatura');
const result = document.getElementById('result');
const submitBtn = document.getElementById('submitBtn');
const resultado = document.getElementById('resultado');
const btnClaro = document.getElementById('btn-claro');
const btnOscuro = document.getElementById('btn-oscuro');
const btnReset = document.getElementById('resetBtn');

btnReset.addEventListener('click', () => {
    inputPeso.value = '';
    inputEstatura.value = '';
    result.value = '';
    resultado.textContent = '';
})
    

btnClaro.addEventListener('click', () => {
    document.body.classList.add('fondo-blanco');
    document.body.classList.remove('fondo-negro');
})

btnOscuro.addEventListener('click', () => {
    document.body.classList.add('fondo-negro');
    document.body.classList.remove('fondo-blanco')
})

submitBtn.addEventListener('click', () => {

    // Obtener los valores de los campos
    const peso = parseFloat(inputPeso.value);
    const estatura = parseFloat(inputEstatura.value);

    // Validar que los campos no esten vacios
    if( isNaN(peso) || isNaN(estatura)){
        resultado.textContent = alert("Por favor, ingresa valores válidos para el peso y la estatura.");
        return;
    }

    // Mostrar los valores o procesarlos (en este caso se muestra el IMC)
    const estaturaMetros = estatura / 100; // Convertir estatura a metros
    const imc = (peso / (estaturaMetros * estaturaMetros)).toFixed(2);

    // Mostrar el resultado
    // Variable para almacenar el mensaje del resultado
    let mensaje = '';

    // Clasificación del IMC usando un switch
    switch (true) {
      case (imc < 18.5):
        mensaje = 'Bajo peso';
        break;
      case (imc >= 18.5 && imc < 24.9):
        mensaje = 'Peso normal';
        break;
      case (imc >= 25 && imc < 29.9):
        mensaje = 'Sobrepeso';
        break;
      case (imc >= 30 && imc < 34.9):
        mensaje = 'Obesidad grado 1';
        break;
      case (imc >= 35 && imc < 39.9):
        mensaje = 'Obesidad grado 2';
        break;
      case (imc >= 39.9):
        mensaje = 'Obesidad grado 3 (mórbida)';
        break;
    }

    // Mostrar el resultado final
    result.value = imc;
    resultado.textContent = `Tu peso es ${peso} kg, tu estatura es ${estatura} cm, y tu IMC es ${imc}. Clasificación: ${mensaje}.`;
});