const panels = document.querySelectorAll('.panel')

/*  
    iterer l'objet panels avec la méthode de votre choix 
    à fin d'ajouter un gestionnaire d'évenement  'click' à chaque panel
    la callback de gestion du clic devra appeler la fonction removeActiveClasses()
    et ajouter la class active au panel courant.
 */


// TODO 


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
