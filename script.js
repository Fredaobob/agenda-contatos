document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    
    if (!name.match(/^[A-Za-z ]+$/)) {
        alert("Por favor, insira apenas letras no nome.");
        return;
    }
    if (!phone.match(/^\d+$/)) {
        alert("Por favor, insira apenas números no telefone.");
        return;
    }

    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${phone}</td><td><button class="action-btn delete-btn" onclick="deleteContact(this)">Excluir</button></td>`;

    
    document.getElementById('contacts-table').querySelector('tbody').appendChild(newRow);

    
    event.target.reset();
});

function deleteContact(td) {
    if (confirm("Tem certeza que deseja excluir este contato?")) {
        row = td.parentElement.parentElement;
        document.getElementById('contacts-table').querySelector('tbody').removeChild(row);
    }
}
