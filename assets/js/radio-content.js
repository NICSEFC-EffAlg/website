// document.addEventListener('DOMContentLoaded', function() {
//     const optionContainer = document.getElementById('option-container');
//     const contentContainer = document.getElementById('content-container');
//     const contentDivs = contentContainer.getElementsByTagName('div');
  
//     optionContainer.addEventListener('change', function(event) {
//       const selectedOption = event.target.value;
//       for (let i = 0; i < contentDivs.length; i++) {
//         const contentDiv = contentDivs[i];
//         if (contentDiv.id === `${selectedOption}-content`) {
//           contentDiv.style.display = 'block';
//         } else {
//           contentDiv.style.display = 'none';
//         }
//       }
//     });
//   });

document.addEventListener('DOMContentLoaded', function() {
  const optionContainer = document.getElementById('option-container');
  const contentContainer = document.getElementById('content-container');
  const projectCards = document.querySelectorAll('.project_card');
  var now_selected=[];

  // Traverse all checkboxes inside optionContainer
  optionContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    if (checkbox.checked) {
      now_selected.push(checkbox.id);
    }
  });
  
  optionContainer.addEventListener('change', function(event) {
    const selectedOption = event.target.id;
    // check if event.target is a checkbox, is it is checked, add it to now_selected, if not, remove it from now_selected
    if (event.target.type === 'checkbox') {
      if (event.target.checked) {
        now_selected.push(selectedOption);
      } else {
        const index = now_selected.indexOf(selectedOption);
        if (index > -1) {
          now_selected.splice(index, 1);
        }
      }
    }
    
    // 遍历所有元素
    projectCards.forEach(card => {
      // 获取元素的id
      const cardId = card.id;
      // 检查id是否包含"abs"
      var is_selected=false;
      now_selected.forEach(select_id => {
        if (cardId.includes(select_id)) {
          // 如果包含"abs"，则显示该元素
          card.style.display = 'flex';
          is_selected=true;
        }
      });
      if (!is_selected) {
        card.style.display = 'none';
      }
    });
  });

});