document.addEventListener('DOMContentLoaded', function() {

    fetch('data/filiais_telefones.json')
        .then(response => response.json())
        .then(data => {

            const filial = document.getElementById('filial');

            document.addEventListener('change', function(selected){
                
                // HORÁRIO COMERCIAL
                document.getElementById('resp-comercialHC-comercial').value = data[filial.value]['Horario Comercial']['Comercial']['HC']['Resp'];
                document.getElementById('tel-resp-comercialHC-comercial').value = data[filial.value]['Horario Comercial']['Comercial']['HC']['Tel'];
                
                document.getElementById('resp-comercialIC-comercial').value = data[filial.value]['Horario Comercial']['Comercial']['IC']['Resp'];
                document.getElementById('tel-resp-comercialIC-comercial').value = data[filial.value]['Horario Comercial']['Comercial']['IC']['Tel'];
                
                document.getElementById('resp-comercialOP-comercial').value = data[filial.value]['Horario Comercial']['Comercial']['OP']['Resp'];
                document.getElementById('tel-resp-comercialOP-comercial').value = data[filial.value]['Horario Comercial']['Comercial']['OP']['Tel'];                     
                
                document.getElementById('resp-operacional-comercial').value = data[filial.value]['Horario Comercial']['Operacional']['Resp'];
                document.getElementById('tel-resp-operacional-comercial').value = data[filial.value]['Horario Comercial']['Operacional']['Tel'];                     
                
                document.getElementById('resp-milao-comercial').value = data[filial.value]['Horario Comercial']['Milao']['Resp'];
                document.getElementById('tel-resp-milao-comercial').value = data[filial.value]['Horario Comercial']['Milao']['Tel'];                     
                
                // PLANTÃO
                document.getElementById('resp-comercial-hc-plantao').value = data[filial.value]['Plantao']['Comercial']['HC']['Resp'];
                document.getElementById('tel-resp-comercial-hc-plantao').value = data[filial.value]['Plantao']['Comercial']['HC']['Tel'];                     
                
                document.getElementById('resp-comercial-op-plantao').value = data[filial.value]['Plantao']['Comercial']['OP']['Resp'];
                document.getElementById('tel-resp-comercial-op-plantao').value = data[filial.value]['Plantao']['Comercial']['OP']['Tel'];  

                document.getElementById('resp-comercial-ic-plantao').value = data[filial.value]['Plantao']['Comercial']['IC']['Resp'];
                document.getElementById('tel-resp-comercial-ic-plantao').value = data[filial.value]['Plantao']['Comercial']['IC']['Tel'];  

                document.getElementById('resp-operacional-plantao').value = data[filial.value]['Plantao']['Operacional']['Resp'];
                document.getElementById('tel-resp-operacional-plantao').value = data[filial.value]['Plantao']['Operacional']['Tel'];                     
                
                document.getElementById('resp-milao-plantao').value = data[filial.value]['Plantao']['Milao']['Resp'];
                document.getElementById('tel-resp-milao-plantao').value = data[filial.value]['Plantao']['Milao']['Tel'];                     
                
            });

        })
        .catch(error => console.error('Error loading JSON:', error));
});


function CriarNovoPost(){
    const mural = document.getElementById('mural-painel');

    const recado = document.createElement('div');
    recado.classList.add('note');

    const mensagem = document.createElement('label');
    recado.classList.add('note-message');

    const btn = document.createElement('button');
    btn.innerHTML = 'X';
    btn.classList.add('close-btn');
    btn.onclick = () => {
        mural.removeChild(recado);
    };
    
    var info = prompt('Digite o corpo do Recado: ');
    mensagem.innerHTML = info;
    
    recado.appendChild(mensagem);
    recado.appendChild(btn);

    mural.appendChild(recado);
};