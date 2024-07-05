/* Envio de Segregação */

const filialSelected = document.getElementById('filiais');

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

/* Preparação dos Parâmetros */

/* Preparando a Imagem */
//#region
let imageDataUrl = '';

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('equipamentos').addEventListener('paste', function(event){
        event.preventDefault();

        const items = (event.clipboardData || event.originalEvent.clipboardData).items;

        for(let item of items){
            if(item.type.indexOf('image') === 0){
                const blob = item.getAsFile();
                const reader = new FileReader();

                reader.onload = function(event){
                    const img = document.createElement('img');
                    img.src = event.target.result;

                    imageDataUrl = event.target.result;

                    const imagePreview = document.getElementById('equipamentos');
                    imagePreview.innerHTML = '';
                    imagePreview.appendChild(img);
                };

                reader.readAsDataURL(blob);
            }
        }

    });
});
//#endregion

document.getElementById('envio-segregacao').addEventListener('submit', function(event){
    event.preventDefault();

    var templanteParams = {
        from_solicitado_por: document.getElementById('solicitado-por').value,
        from_filiais: document.getElementById('filiais').value,
        from_destinatarios: document.getElementById('destinatarios').value,
        from_aos_cuidados: document.getElementById('aos-cuidados').value,
        from_atendente_sehat: document.getElementById('atendente-sehat').value,
        from_nome_paciente: document.getElementById('nome-paciente').value,
        from_numero_pedido: document.getElementById('numero-pedido').value,
        from_data_visita: document.getElementById('data-visita').value,
        from_motivo: document.getElementById('motivo').value,
        image_base64: imageDataUrl,
    }

    /* Enviando o E-mail com os dados */
    var service_ID = 'service_84d7ck8';    // YOUR_SERVICE_ID
    var template_ID = 'template_mqroshk';  // YOUR_TEMPLATE_ID

    /* Validar os Dados Antes de Enviar*/
    if(validacaoDados(templanteParams)){
        console.log(templanteParams);
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
    /*
    function removeProperties(obj, properties) {
        const newObj = {...obj};
        properties.forEach(property => {
            if (newObj.hasOwnProperty(property)) {
                delete newObj[property];
            }
        });
        return newObj;
    }*/
    
    if(Object.values(myObject).every(value => value !== null && value !== undefined && value !== '')){
        return true;
    }else{
        return false;
    }
}

