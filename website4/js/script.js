let navigations = document.querySelectorAll('nav a')

navigations.forEach((navigation) => {
  navigation.addEventListener('click', ()=> {
  
    // Making sure that the inital border bottom is removed 
    navigations.forEach((nav)=> {
      nav.style.borderBottom = 'none'
    })

    // adding the new border bottom to the clicked button 

    navigation.style.borderBottom = '2px solid white';
    


  })
})