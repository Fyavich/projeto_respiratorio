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

                        const sol_hc = document.getElementById('sol-hc');
                        sol_hc.innerHTML = data[buscar.value]["SOL_HC"];

                        const sol_plan = document.getElementById('sol-plan');
                        sol_plan.innerHTML = data[buscar.value]["SOL_PLAN"];
                                        

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