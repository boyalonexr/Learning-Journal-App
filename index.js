const viewMore = document.getElementById('view-more');
const sectionDisplay = document.querySelectorAll('.display');


viewMore.addEventListener('click', () => {
  sectionDisplay.forEach(section => {
    section.classList.toggle("display")
  });

  const isHidden = document.querySelectorAll('section')[3].classList.contains('display');

  viewMore.textContent = isHidden ? 'View More': 'View Less';

}
)
