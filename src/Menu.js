import { menuTop, links, sections } from './index.js';

export default class Menu {

    stickmenu(){
        if (window.scrollY >= menuTop){
            document.body.classList.add('sticky-nav');
        } else {
            document.body.classList.remove('sticky-nav');
        }
    }

    // watchmenu() {
    //     let currentScroll = window.scrollY;
    //     let index = sections.length;
    //
    //     if (currentScroll > menuTop) {
    //         // first not good solution
    //         // for (let i = 0; i < sections.length; i++) {
    //         //     let sectionHeight = sections[i].offsetHeight;
    //         //     console.log('sectionHeight', sectionHeight)
    //         //
    //         //     let offsets = sections[i].offsetTop;
    //         //     console.log('offsets', offsets)
    //         //
    //         //     if (currentScroll > offsets && currentScroll < offsets + sectionHeight) {
    //         //         links[i].classList.add('active');
    //         //     } else {
    //         //         links[i].classList.remove('active');
    //         //     }
    //         // }
    //         // }
    //         // else {
    //         //     links.forEach((link) => link.classList.remove('active'));
    //         // }
    //
    //         // second one and better
    //         while (--index && currentScroll + 50 < sections[index].offsetTop) {}
    //         console.log('dziala')
    //         links.forEach((link) => link.classList.remove('active'));
    //         links[index].classList.add('active');
    //     } else {
    //         links.forEach((link) => link.classList.remove('active'));
    //     }
    // }

    watchmenu() {
        let currentScroll = window.scrollY;

        // watcher on click menu
        nav.addEventListener('click', (e) => {
            links.forEach((link) => link.classList.remove('active'));
            e.target.parentNode.classList.add('active');
        });
    }

    init() {
        this.stickmenu();
        this.watchmenu();
    }
};

