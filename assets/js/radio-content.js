document.addEventListener('DOMContentLoaded', function() {
    const optionContainer = document.getElementById('option-container');
    const contentContainer = document.getElementById('content-container');
    const contentDivs = contentContainer.getElementsByTagName('div');
  
    optionContainer.addEventListener('change', function(event) {
      const selectedOption = event.target.value;
      for (let i = 0; i < contentDivs.length; i++) {
        const contentDiv = contentDivs[i];
        if (contentDiv.id === `${selectedOption}-content`) {
          contentDiv.style.display = 'block';
        } else {
          contentDiv.style.display = 'none';
        }
      }
    });
  });