
/******* start sidebar ********/
const LiBtn = document.querySelectorAll('.sidebarUl li');
const LiBtnA = document.querySelectorAll('.sidebarUl .active');
const Pp = document.querySelectorAll('.sidebarUl .p');
const lai = document.querySelectorAll('.lai');

LiBtn.forEach(item => {
    item.addEventListener('click', function() {
        
        LiBtn.forEach(li => {
            if (li !== item) {
                li.style.maxHeight = '50px';
            }
        });


        if (item.style.maxHeight === '500px') {
            item.style.maxHeight = '50px';

        } else {
            item.style.maxHeight = '500px';
        }
    });
});

document.querySelector('.menuBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    
    if (menu.style.maxWidth === '80px') {
        menu.style.maxWidth = '300px';
        menu.classList.remove('aside-margin');
    
        
        lai.forEach(l => {
            l.style.opacity = '1';
        });

        Pp.forEach(p => {
            p.style.display = 'block';
        });

        LiBtnA.forEach(lii => {
                lii.style.maxHeight = '500px';
            
        });
    } else {
        menu.style.maxWidth = '80px';
        menu.classList.add('aside-margin');
        
        lai.forEach(l => {
            l.style.opacity = '0';
        });
        
        Pp.forEach(p => {
            p.style.display = 'none';
        });
        
        LiBtn.forEach(item => {
            item.style.maxHeight = '50px';
        });
    }
});

document.querySelector('#sidebarCloss').addEventListener('click', function() {
    menu.style.maxWidth = '80px';
    menu.classList.add('aside-margin');
    
    lai.forEach(l => {
        l.style.opacity = '0';
    });
    
    Pp.forEach(p => {
        p.style.display = 'none';
    });
    
    LiBtn.forEach(item => {
        item.style.maxHeight = '50px';
    });
    });

document.querySelectorAll('.sidebarUl > li').forEach(item => {
    item.querySelector('a').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        
        // Toggle .rotate class for the current arrow
        const arrow = this.querySelector('.lai');
        arrow.classList.toggle('rotate');
        menu.style.maxWidth = '300px';


        
        Pp.forEach(p => {
            p.style.display = 'block';
        });


        lai.forEach(l => {
            l.style.opacity = '1';
        });
        
        const submenu = item.querySelector('.submenu');
        
        document.querySelectorAll('.sidebarUl > li').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.lai').classList.remove('rotate');
            }
        });
        
    });
});
/******* end sidebar ********/

/****** theme start *******/
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check if a theme is saved in localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Set initial icon based on the saved theme
if (currentTheme === 'dark') {
    themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
} else {
    themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
}

themeToggleBtn.addEventListener('click', () => {
    // Toggle between 'light' and 'dark' themes
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the theme choice

    // Change icon based on the theme
    if (newTheme === 'dark') {
        themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
    } else {
        themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
    }
});

/****** theme start *******/


/*======================
       start gsap
======================*/

/*======================
       end gsap
======================*/