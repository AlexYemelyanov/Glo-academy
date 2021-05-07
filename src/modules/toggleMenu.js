const toggleMenu = () => {

  const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu');


  const handlerMenu = () => {
    menu.classList.toggle('active-menu')
  };
  menu.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);
    target = target.closest('a');
    if (target) {
      console.log(target)
      handlerMenu();
    }
  })

  btnMenu.addEventListener('click', handlerMenu);




};
export default toggleMenu;