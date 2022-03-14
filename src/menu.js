import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import food4 from '../images/food4.jpg';

const menu = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('main');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    main.append(menu);
    for (let i = 0; i < 4; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        const h3 = document.createElement('h3');
        h3.textContent = 'Item ' + (i + 1);

        const images = [food1, food2, food3, food4];
        const img = document.createElement('img');
        img.src = images[i];

        const p = document.createElement('p');
        p.textContent = 'Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Purus faucibus ornare suspendisse sed nisi lacus. Elementum curabitur vitae nunc sed velit.'

        menuItem.append(h3);
        menuItem.append(img);
        menuItem.append(p);
        menu.append(menuItem);
    };
    content.append(main);
};

export { menu };
