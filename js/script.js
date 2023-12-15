// for browse in personal photo
function updateFileLink(input) {
    var fileLink = document.getElementById('fileLink');
    if (input.files.length > 0) {
      fileLink.textContent = input.files[0].name;
    } else {
      fileLink.textContent = 'Choose File';
    }
  }

  

