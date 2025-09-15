    // Toggle Section Display
    function toggleSection(id) {
      const section = document.getElementById(id);
      section.style.display = (section.style.display === 'block') ? 'none' : 'block';
    }

    // Show Image on Click
    const imgBox = document.getElementById('imgBox');
    let isImage = true;
    imgBox.addEventListener('click', function () {
    if (isImage){
        imgBox.style.backgroundImage = 'url("images/profile.jpg")';
        isImage = false;
    } else {
        imgBox.style.backgroundImage = 'url("/")';
        isImage = true;
    }
    });