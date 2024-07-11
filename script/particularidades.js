document.addEventListener('DOMContentLoaded', function() {
    fetch('data/particularidades.json')
    .then(response => response.json())
    .then(data => {

        const sugestoes = Object.keys(data);
        const sugestoesContainer = document.getElementById('sugestoes');
        const buscar = document.getElementById('search');
        var planoSelecionado = '';
        
        function showSuggestions(value){
            sugestoesContainer.innerHTML = '';
            if(value){
                const filteredItems = sugestoes.filter(item => item.toLowerCase().includes(value.toLowerCase()));
                filteredItems.forEach(item => {
                    const sugestElement = document.createElement('div');
                    sugestElement.classList.add('selected');
                    sugestElement.textContent = item;
                    sugestElement.onclick = (e) => {
                        e.stopPropagation();
                        buscar.value = item;
                        planoSelecionado = buscar.value;
                        sugestoesContainer.innerHTML = '';

                        // SOLICITAÇÕES
                        const sol_hc = document.getElementById('sol-hc');
                        sol_hc.innerHTML = data[buscar.value]["SOL_HC"];

                        const sol_plan = document.getElementById('sol-plan');
                        sol_plan.innerHTML = data[buscar.value]["SOL_PLAN"];
                        
                        // PRAZO ATENDIMENTO
                        const prazo_imp = document.getElementById('prazo-imp');
                        prazo_imp.innerHTML = data[buscar.value]["PRAZO_IMP"];

                        const prazo_urg = document.getElementById('prazo-urg');
                        prazo_urg.innerHTML = data[buscar.value]["PRAZO_URG"];

                        const prazo_troca = document.getElementById('prazo-troca');
                        prazo_troca.innerHTML = data[buscar.value]["PRAZO_TROCA"];
                        console.log(prazo_troca);

                        const prazo_rec = document.getElementById('prazo-rec');
                        prazo_rec.innerHTML = data[buscar.value]["PRAZO_REC"];

                        const prazo_desc = document.getElementById('prazo-desc');
                        prazo_desc.innerHTML = data[buscar.value]["PRAZO_DESC"];

                        const prazo_ret = document.getElementById('prazo-ret');
                        prazo_ret.innerHTML = data[buscar.value]["PRAZO_RET"];

                        // ACIONAR FISIO
                        const fisio_imp_HC = document.getElementById('fisio-imp-HC');
                        fisio_imp_HC.innerHTML = data[buscar.value]["FISIO_IMP_HC"];

                        const fisio_troca_HC = document.getElementById('fisio-troca-HC');
                        fisio_troca_HC.innerHTML = data[buscar.value]["FISIO_TROCA_HC"];

                        const fisio_imp_PLAN = document.getElementById('fisio-imp-PLAN');
                        fisio_imp_PLAN.innerHTML = data[buscar.value]["FISIO_IMP_PLAN"];

                        const fisio_troca_PLAN = document.getElementById('fisio-troca-PLAN');
                        fisio_troca_PLAN.innerHTML = data[buscar.value]["FISIO_TROCA_PLAN"];

                        // OUTROS DADOS
                        const pa_data = document.getElementById('pa_data');
                        pa_data.innerHTML = data[buscar.value]["DATA_REG"];

                        const pa_filial = document.getElementById('pa_filial');
                        pa_filial.innerHTML = data[buscar.value]["FILIAL"];

                        const pa_seg = document.getElementById('pa_seg');
                        pa_seg.innerHTML = data[buscar.value]["SEG"];

                        const pa_cod = document.getElementById('pa_cod');
                        pa_cod.innerHTML = data[buscar.value]["COD"];

                        const pa_fat_emp = document.getElementById('pa_fat_emp');
                        pa_fat_emp.innerHTML = data[buscar.value]["FAT_EMPENHO"];

                        // OBSERVAÇÃO
                        const observacoes = document.getElementById('observacoes');
                        observacoes.innerHTML = data[buscar.value]["OBS"];

                    };
                    sugestoesContainer.classList.remove('hidden');
                    sugestoesContainer.appendChild(sugestElement);
                });
            }else{
                sugestoesContainer.classList.add('hidden');
            }
        };

        buscar.addEventListener('input', (e) => {
            showSuggestions(e.target.value);
        });

        document.addEventListener('click', (e) => {
            if (!sugestoesContainer.contains(e.target) && !buscar.contains(e.target)) {
                sugestoesContainer.classList.add('hidden');
            }
        });



    })
    .catch(error => console.error('Error loading JSON:', error));
})