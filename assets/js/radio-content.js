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
  const contentDivs = contentContainer.getElementsByTagName('div');
  const projectCards = document.querySelectorAll('.project_card');
  var now_selected=[];

  optionContainer.addEventListener('change', function(event) {
    const selectedOption = event.target.value;
    now_selected.push(selectedOption)
    // for (let i = 0; i < contentDivs.length; i++) {
    //   const contentDiv = contentDivs[i];
    //   if (contentDiv.id === `${selectedOption}-content`) {
    //     contentDiv.style.display = 'block';
    //     showChildDivs(contentDiv); // 调用 showChildDivs 函数显示子模块
    //   } else {
    //     contentDiv.style.display = 'none';
    //     hideChildDivs(contentDiv); // 调用 hideChildDivs 函数隐藏子模块
    //   }
    // }
    
    // 遍历所有元素
    projectCards.forEach(card => {
      // 获取元素的id
      const cardId = card.id;
      // 检查id是否包含"abs"
      var is_selected=false;
      now_selected.forEach(select_id => {
        if (cardId.includes(select_id)) {
          // 如果包含"abs"，则显示该元素
          card.style.display = 'block';
          is_selected=true;
        }
      });
      if (!is_selected) {
        card.style.display = 'none';
      }
    });
  });

  // 显示所有子模块的函数
  function showChildDivs(parentDiv) {
    const childDivs = parentDiv.getElementsByTagName('div');
    for (let i = 0; i < childDivs.length; i++) {
      childDivs[i].style.display = 'block';
    }
  }

  // 隐藏所有子模块的函数
  function hideChildDivs(parentDiv) {
    const childDivs = parentDiv.getElementsByTagName('div');
    for (let i = 0; i < childDivs.length; i++) {
      childDivs[i].style.display = 'none';
    }
  }
});