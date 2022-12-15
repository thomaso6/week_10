let id = 0;
document.getElementById('add').addEventListener('click', () =>{
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTMl = document.getElementById('first-name').value;
    /*^ I can't figure out why exactly this first element isn't coming up in the table */
    row.insertCell(1).innerHTML = document.getElementById('last-name').value;
    row.insertCell(2).innerHTML = document.getElementById('favorite-color').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('first-name').value = '';
});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () =>{
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}