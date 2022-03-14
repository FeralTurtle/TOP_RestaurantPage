import bannerImg from '../images/restaurant-main.jpg';

const home = () => {
    const content = document.querySelector('#content');

    // Banner
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const img = document.createElement('img');
    img.src = bannerImg;
    banner.append(img);

    // Main
    const main = document.createElement('main');
    const h2 = document.createElement('h2');
    h2.textContent = 'About the restaurant';
    const paragraphContent = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Id consectetur purus ut faucibus pulvinar. Id ornare arcu odio ut sem. Nec tincidunt praesent semper feugiat nibh. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Euismod elementum nisi eleifend quam adipiscing vitae. Tristique risus nec feugiat in fermentum posuere urna nec. Ipsum dolor sit amet consectetur adipiscing elit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.',
        'Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Purus faucibus ornare suspendisse sed nisi lacus. Elementum curabitur vitae nunc sed velit. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Sit amet porttitor eget dolor morbi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Suspendisse interdum consectetur libero id faucibus nisl. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.',
        'A erat nam at lectus urna. Convallis posuere morbi leo urna molestie at elementum. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ultricies leo integer malesuada nunc. Eu turpis egestas pretium aenean pharetra magna ac. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tincidunt praesent semper feugiat nibh. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. In est ante in nibh mauris cursus mattis molestie. Purus in massa tempor nec feugiat. Volutpat blandit aliquam etiam erat velit. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Pretium nibh ipsum consequat nisl vel pretium lectus. Quis vel eros donec ac odio tempor orci dapibus.',
        'Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Etpharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat. Pretium quam vulputate dignissim suspendisse in est ante in. Faucibus in ornare quam viverra. Vestibulum sed arcu non odio euismod lacinia at quis. Leo duis ut diam quam nulla porttitor massa id neque. Odio facilisis mauris sit amet. Dui nunc mattis enim ut. Risus pretium quam vulputate dignissim suspendisse in. Arcu dui vivamus arcu felis bibendum ut. Sed pulvinar proin gravida hendrerit lectus a. Arcu cursus vitae congue mauris rhoncus aenean vel. Nibh mauris cursus mattis molestie a iaculis at erat. Posuere morbi leo urna molestie at.'
    ];
    main.append(h2);
    for (let i = 0; i < 4; i++) {
        const p = document.createElement('p');
        p.textContent = paragraphContent[i];
        main.append(p);
    };

    // Footer
    const footer = document.createElement('footer');
    for (let i = 0; i < 3; i++) {
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div' + (i + 1));
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.textContent = 'Some text';
        p2.textContent = 'Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat.';
        footerDiv.append(p1);

        if (i == 2) {
            const ul = document.createElement('ul');
            footerDiv.append(ul);
            for (let j = 0; j < 4; j++) {
                const newLi = document.createElement('li');
                newLi.textContent = ('Item ' + (j + 1));
                ul.append(newLi);
            };
        } else {
            if (i == 1) {
                p2.textContent = 'Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus';
            }
            footerDiv.append(p2);
        };
        footer.append(footerDiv);
    };

    content.append(banner);
    content.append(main);
    content.append(footer);
};

export { home };