document.addEventListener('DOMContentLoaded', function() {
    // Sample autocomplete options
    const autocompleteOptions = ["Handbag", "Laptop", "Mobile","T-Shirt","Pant","Watches",""];

    // Get the input and datalist elements
    const searchInput = document.getElementById('search');
    const searchList = document.getElementById('searchList');

    // Populate the datalist with autocomplete options
    autocompleteOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        searchList.appendChild(optionElement);
    });

    // Update the datalist options based on user input
    searchInput.addEventListener('input', function() {
        const inputValue = searchInput.value.toLowerCase();
        searchList.innerHTML = '';

        autocompleteOptions.forEach(option => {
            if (option.toLowerCase().includes(inputValue)) {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                searchList.appendChild(optionElement);
            }
        });
    });
});