
function filterCards() {
  const projectCards = document.querySelectorAll('#project-container li');
  const technique_selected = Array.from(document.querySelectorAll('#Technique input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
  const target_selected = Array.from(document.querySelectorAll('#Target input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
  const domain_selected = Array.from(document.querySelectorAll('#Domain input[type="checkbox"]:checked')).map(checkbox => checkbox.id);

  console.log('Debug information:', technique_selected, target_selected, domain_selected);
  projectCards.forEach(card => {
    const technique = card.getAttribute('data-technique');
    const target = card.getAttribute('data-target');
    const domain = card.getAttribute('data-domain');

    var technique_condition = technique_selected.length === 0 || technique_selected.includes(technique);
    var target_condition = target_selected.length === 0 || target_selected.includes(target);
    var domain_condition = domain_selected.length === 0 || domain_selected.includes(domain);

    if (technique_condition && target_condition && domain_condition) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }

    if (technique_selected.length === 0 && target_selected.length === 0 && domain_selected.length === 0) {
      card.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const techniqueContainer = document.getElementById('Technique');
  const targetContainer = document.getElementById('Target');
  const domainContainer = document.getElementById('Domain');

  filterCards();

  techniqueContainer.addEventListener('change', filterCards);
  targetContainer.addEventListener('change', filterCards);

  domainContainer.addEventListener('change', filterCards);
  
});
