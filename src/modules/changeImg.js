const changeImg = () => {
  let command = document.getElementById('command'),
    commandPhoto = document.querySelectorAll('.command__photo');



  command.addEventListener('mouseover', () => {
    if (event.target.matches('.command__photo')) {
      event.target.alt = event.target.src;
      event.target.src = event.target.dataset.img;
    }

  })
  command.addEventListener('mouseout', () => {

    if (event.target.matches('.command__photo')) {
      event.target.src = event.target.alt;
    }
  })
};

export default changeImg;