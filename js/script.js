const navMenu = document.querySelector('.nav-menu');
const navToggler = document.querySelector('.mobile-nav-toggle');

navToggler.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
})

const reviewCrds = document.querySelectorAll('.review');
const reviewIndicator = document.querySelectorAll('.pagination-container span');

let currentReview = 0;

function reset () {
    for(let i = 0; i < reviewCrds.length; i++) {
        reviewCrds[i].style.display = 'none';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    reset();
    reviewCrds[0].style.display = 'block';
})

reviewIndicator.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
       
        if(indicator.id === 'one') {
            reset();
            reviewCrds[0].style.display = 'block';   
        }

        else if(indicator.id === 'two') {
            reset();
            reviewCrds[1].style.display = 'block';    
        }

        else if(indicator.id === 'three') {
            reset();
            reviewCrds[2].style.display = 'block';    
        }

        else if (indicator.id === 'four'){
            reset()
            reviewCrds[3].style.display = 'block';   
        }
    })
}) 