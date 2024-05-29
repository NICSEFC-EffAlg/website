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

  optionContainer.addEventListener('change', function(event) {
    const selectedOption = event.target.value;
    for (let i = 0; i < contentDivs.length; i++) {
      const contentDiv = contentDivs[i];
      if (contentDiv.id === `${selectedOption}-content`) {
        contentDiv.style.display = 'block';
        showChildDivs(contentDiv); // 调用 showChildDivs 函数显示子模块
      } else {
        contentDiv.style.display = 'none';
        hideChildDivs(contentDiv); // 调用 hideChildDivs 函数隐藏子模块
      }
    }
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