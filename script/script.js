/* Intercalando Interfaces */
//#region 
function changeInterface(checked){
    
    switch(parseInt(checked.value)){
        case 1:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte-container').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
        case 2:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte-container').classList.remove('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
        case 3:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte-container').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.remove('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */        
        break;
        case 4:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte-container').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
        case 5:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte-container').classList.add('hidden');
            /* Value 3 */ document.getElementById('romaneio').classList.add('hidden');
            /* Value 4 */
            /* Value 5 */
            /* Value 6 */
        break;
        case 6:
            /* Value 1 */
            /* Value 2 */ document.getElementById('calculo-suporte-container').classList.add('hidden');
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
    var suporte = document.getElementById('resultado-suporte');

    tempoTotal = validarCilindro8(litragem)+validarCilindro4(litragem)+validarCilindro1(litragem);

    suporte.value = tempoTotal + ' Hrs';
}

function validarCilindro8(litragem){
    tempo = 0;
    pressao = 0;

    var fields = document.querySelectorAll('#qtdCil8m');
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

    var fields = document.querySelectorAll('#qtdCil4m');
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

    var fields = document.querySelectorAll('#qtdCil1m');
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
//#region 
const filialSelected = document.getElementById('filiais');
const plantaoSelected = document.getElementById('plantao');

/* Seleção de Filial para Envio de E-mail */
filialSelected.addEventListener('change', function(selected){
    switch(filialSelected.value){
        case 'Guido':
            document.getElementById('destinatarios').value = 'ranger.finy@gmail.com';
        break;
        case 'Rio de Janeiro':
            document.getElementById('destinatarios').value = 'filial.rj@gmail.com';
        break;
    }
});

/* Seleção de Plantão para Envio de Cópia para Dist */
plantaoSelected.addEventListener('change', function(changed){
    if(document.getElementById('plantao').value=='sim'){
        document.getElementById('cc_email').value = 'ranger.finy@gmail.com';
        document.getElementById('lb_cc_email').classList.remove('hidden');
        document.getElementById('cc_email').classList.remove('hidden');
        document.getElementById('tr_cc_email').classList.remove('hidden');
    }else{
        document.getElementById('cc_email').value = ' ';
        document.getElementById('lb_cc_email').classList.add('hidden');
        document.getElementById('cc_email').classList.add('hidden');
        document.getElementById('tr_cc_email').classList.add('hidden');
    }
});

/* Preparação dos Parâmetros */
document.getElementById('envio-romaneio').addEventListener('submit', function(event){
    event.preventDefault();

    var templanteParams = {
        from_atendente_sehat: document.getElementById('atendente-sehat').value,
        from_atendente_logistica: document.getElementById('atendente-logistica').value,
        from_empresa: document.getElementById('empresas').value,
        from_filial: document.getElementById('filiais').value,
        from_nome_paciente: document.getElementById('nome-paciente').value,
        from_plano_atendimento: document.getElementById('plano-atendimento').value,
        from_data_visita: document.getElementById('data-visita').value,
        from_hora_entrega: document.getElementById('hora-entrega').value,
        from_servico: document.getElementById('servico').value,
        from_nome_rua: document.getElementById('nome-rua').value,
        from_numero_casa: document.getElementById('numero-casa').value,
        from_complemento_casa: document.getElementById('complemento-casa').value,
        from_bairro: document.getElementById('bairro').value,
        from_cidade: document.getElementById('cidade').value,
        from_estado: document.getElementById('estado').value,
        from_solicitado_por: document.getElementById('solicitado-por').value,
        from_plantao: document.getElementById('plantao').value,
        from_destinatarios: document.getElementById('destinatarios').value,
        from_cc_email: document.getElementById('cc_email').value,
        from_equipamentos: document.getElementById('equipamentos').value,
        from_observacoes: document.getElementById('observacoes').value,
    }

    /* Enviando o E-mail com os dados */
    var service_ID = 'service_84d7ck8';    // YOUR_SERVICE_ID
    var template_ID = 'template_6druemx';  // YOUR_TEMPLATE_ID

    /* Validar os Dados Antes de Enviar*/
    if(validacaoDados(templanteParams)){
       emailjs.send(service_ID, template_ID, templanteParams)
        .then(function(response){
            //console.log('SUCCESS', response.status, response.text);
            alert('E-mail enviado com sucesso!');
        }, function(error){
            //console.log('FAILED...', error);
            alert('O envio do e-mail falhou.');
        });     
    }else{
        alert('PREENCHA TODOS OS CAMPOS !');
    }

});

function validacaoDados(myObject){

    function removeProperties(obj, properties) {
        const newObj = {...obj};
        properties.forEach(property => {
            if (newObj.hasOwnProperty(property)) {
                delete newObj[property];
            }
        });
        return newObj;
    }

    const newObj = removeProperties(myObject, ['from_complemento_casa', 'from_cc_email', 'from_observacoes']);
    
    if(Object.values(newObj).every(value => value !== null && value !== undefined && value !== '')){
        return true;
    }else{
        return false;
    }
}
//#endregion

/* Envio de Segregação */

