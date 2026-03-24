// Tribute form submission
document.getElementById('tribute-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const tributeMessage = document.createElement('div');
    tributeMessage.classList.add('tribute-message');
    tributeMessage.innerHTML = `<h3>${name}</h3><p>${message}</p>`;
    document.getElementById('tribute-messages').appendChild(tributeMessage);
    document.getElementById('tribute-form').reset();
});