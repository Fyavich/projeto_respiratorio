/* Intercalando Interfaces */
//#region 
function changeInterface(checked){
    
    switch(parseInt(checked.value)){
        case 1:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
        case 2:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte').classList.remove('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
        case 3:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.remove('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */        
        break;
        case 4:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
        case 5:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
        case 6:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
    }

}
//#endregion

/* Calculo Suporte do Cilindro */
//#region 
function calcularSuporte(){
    var tempoTotal = 0;
    var litragem = document.getElementById('litragem').value;
    var suporte = document.getElementById('suporte');

    tempoTotal = validarCilindro8(litragem)+validarCilindro4(litragem)+validarCilindro1(litragem);

    suporte.value = tempoTotal;
}

function validarCilindro8(litragem){
    tempo = 0;
    pressao = 0;

    var fields = document.querySelectorAll('#qtdCilindros8');
    fields.forEach((field) => {
        
        var value = parseInt(field.value, 10);

        if(!isNaN(value)){
            pressao += value;
        }
        
    });

    tempo = ((pressao * 0.6)/litragem)-1;

    if(tempo >= 1){
        return tempo;
    }else{
        return 0;
    }
}

function validarCilindro4(litragem){
    tempo = 0;
    pressao = 0;

    var fields = document.querySelectorAll('#qtdCilindros4');
    fields.forEach((field) => {
        
        var value = parseInt(field.value, 10);

        if(!isNaN(value)){
            pressao += value;
        }

    });

    tempo = ((pressao * 0.32)/litragem)-1;

    if(tempo >= 1){
        return tempo;
    }else{
        return 0;
    } 
}

function validarCilindro1(litragem){
    tempo = 0;
    pressao = 0;

    var fields = document.querySelectorAll('#qtdCilindros1');
    fields.forEach((field) => {
        
        var value = parseInt(field.value, 10);

        if(!isNaN(value)){
            pressao += value;
        }
        
    });

    tempo = ((pressao * 0.0645)/litragem)-1;

    if(tempo >= 1){
        return tempo;
    }else{
        return 0;
    }
}
//#endregion

/* Envio de Romaneio */
