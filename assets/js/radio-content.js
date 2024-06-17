
function filterCards() {
  const projectCards = document.querySelectorAll('#project-container li');
  const technique_selected = Array.from(document.querySelectorAll('#Technique input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
  const target_selected = Array.from(document.querySelectorAll('#Target input[type="checkbox"]:checked')).map(checkbox => checkbox.id);
  const domain_selected = Array.from(document.querySelectorAll('#Domain input[type="checkbox"]:checked')).map(checkbox => checkbox.id);

  console.log('Debug information:', technique_selected, target_selected, domain_selected);
  projectCards.forEach(card => {
    const techniques = card.getAttribute('data-technique');
    const targets = card.getAttribute('data-target');
    const domains = card.getAttribute('data-domain');
    var technique = techniques.split(',').map(t => t.trim());
    var target = targets.split(',').map(t => t.trim());
    var domain = domains.split(',').map(d => d.trim());
    var technique_condition = technique_selected.length === 0 || technique.some(t => technique_selected.includes(t));
    var target_condition = target_selected.length === 0 || target.some(t => target_selected.includes(t));
    var domain_condition = domain_selected.length === 0 || domain.some(d => domain_selected.includes(d));

    // var technique_condition = technique_selected.length === 0 || technique_selected.includes(technique);
    // var target_condition = target_selected.length === 0 || target_selected.includes(target);
    // var domain_condition = domain_selected.length === 0 || domain_selected.includes(domain);

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
