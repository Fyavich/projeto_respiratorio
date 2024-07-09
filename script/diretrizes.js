document.addEventListener('DOMContentLoaded', function() {

    fetch('data/filiais_telefones.json')
        .then(response => response.json())
        .then(data => {

            const filial = document.getElementById('filial');

            document.addEventListener('change', function(selected){
                switch(filial.value){
                    case 'GUIDO':
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
                        
                        
                        break;

                    case 'Rio de Janeiro':
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
                        
                        break;
                };
            });

        })
        .catch(error => console.error('Error loading JSON:', error));
});
