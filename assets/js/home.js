const toastContainer = document.getElementById('toast');

function showNotification (message) {
    
      toastContainer.classList.remove('toast-error');
      toastContainer.classList.add('toast-success');
    
    toastContainer.style.display = 'block';
    toastContainer.innerText = message;
  
    setTimeout(() => {
      toastContainer.style.display = 'none';
    }, 3000)
}
