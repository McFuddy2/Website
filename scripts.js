function loadComponent(file, elementId) {
    console.log("scripts.js loaded");
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

// Adjust the paths according to your directory structure
loadComponent('Website/header.html', 'header');
loadComponent('Website/footer.html', 'footer');
