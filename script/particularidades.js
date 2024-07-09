document.addEventListener('DOMContentLoaded', function() {
    fetch('data/particularidades.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const sugestoes = Object.keys(data);
        const sugestoesContainer = document.getElementById('sugestoes');
        const buscar = document.getElementById('search');
        
        function showSuggestions(value){
            sugestoesContainer.innerHTML = '';
            if(value){
                const filteredItems = sugestoes.filter(item => item.toLowerCase().includes(value.toLowerCase()));
                filteredItems.forEach(item => {
                    const sugestElement = document.createElement('div');
                    sugestElement.classList.add('sugestoes');
                    sugestElement.textContent = item;
                    sugestElement.onclick = () => {
                        buscar.value = item;
                        sugestoesContainer.innerHTML = '';
                    };
                    sugestoesContainer.appendChild(sugestElement);
                });
            }
        };

        buscar.addEventListener('input', (e) => {
            showSuggestions(e.target.value);
        });
        
    })
    .catch(error => console.error('Error loading JSON:', error));
})