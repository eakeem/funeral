// Tribute form submission
/* document.getElementById('tribute-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const tributeMessage = document.createElement('div');
    tributeMessage.classList.add('tribute-message');
    tributeMessage.innerHTML = `<h3>${name}</h3><p>${message}</p>`;
    document.getElementById('tribute-messages').appendChild(tributeMessage);
    document.getElementById('tribute-form').reset();
}); */

// Tribute form submission
document.getElementById('tribute-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // Create a new tribute object
  const tribute = {
    name: name,
    message: message
  };

  // Get existing tributes from local storage
  let tributes = localStorage.getItem('tributes');
  if (tributes === null) {
    tributes = [];
  } else {
    tributes = JSON.parse(tributes);
  }

  // Add the new tribute to the array
  tributes.push(tribute);

  // Save the updated tributes to local storage
  localStorage.setItem('tributes', JSON.stringify(tributes));

  // Display the updated tributes
  displayTributes();
});

// Function to display tributes
function displayTributes() {
  const tributes = localStorage.getItem('tributes');
  if (tributes === null) {
    return;
  }

  const tributeMessages = document.getElementById('tribute-messages');
  tributeMessages.innerHTML = '';

  const tributesArray = JSON.parse(tributes);
  tributesArray.forEach((tribute, index) => {
    const tributeMessage = document.createElement('div');
    tributeMessage.classList.add('tribute-message');
    tributeMessage.innerHTML = `
      <h3>${tribute.name}</h3>
      <p>${tribute.message}</p>
      <button class="delete-tribute" data-index="${index}">Delete</button>
    `;
    tributeMessages.appendChild(tributeMessage);

    // Add event listener to delete button
    const deleteButton = tributeMessage.querySelector('.delete-tribute');
    deleteButton.addEventListener('click', () => {
      deleteTribute(index);
    });
  });
}

// Function to delete a tribute
function deleteTribute(index) {
  let tributes = localStorage.getItem('tributes');
  tributes = JSON.parse(tributes);
  tributes.splice(index, 1);
  localStorage.setItem('tributes', JSON.stringify(tributes));
  displayTributes();
}

// Display tributes on page load
displayTributes();







 let currentIndex = 0;
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    function showSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    // Auto-play every 5 seconds
    setInterval(nextSlide, 5000);
