const loadContent = () => {
    const content = document.querySelector('#content');

    // Header
    const header = document.createElement('header');
    const span = document.createElement('span');
    span.textContent = 'Logo';
    const nav = document.createElement('nav');
    // For loop 4 times to make an anchor element, with increment number identifier suffix attached
    // Call a function with a title string parameter, which is equivalent to the anchor element's textContent and href value
    const anchor1 = document.createElement('a');
    anchor1.textContent = 'Home';
    anchor1.setAttribute('href', '#');
    const anchor2 = document.createElement('a');
    anchor2.textContent = 'Menu';
    anchor2.setAttribute('href', '#');
    const anchor3 = document.createElement('a');
    anchor3.textContent = 'Hours';
    anchor3.setAttribute('href', '#');
    const anchor4 = document.createElement('a');
    anchor4.textContent = 'Contact';
    anchor4.setAttribute('href', '#');
    nav.append(anchor1);
    nav.append(anchor2);
    nav.append(anchor3);
    nav.append(anchor4);
    header.append(span);
    header.append(nav);

    // Banner
    const banner = document.createElement('div');
    const bannerImg = document.createElement('img');
    banner.classList.add('banner');
    bannerImg.setAttribute('img', '../images/restaurant-main.jpg');
    bannerImg.setAttribute('alt', 'restaurant-main');
    banner.append(bannerImg);

    // Main
    const main = document.createElement('main');
    const h2 = document.createElement('h2');
    h2.textContent = 'About the restaurant';
    main.append(h2);
    const paragraphContent = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Id consectetur purus ut faucibus pulvinar. Id ornare arcu odio ut sem. Nec tincidunt praesent semper feugiat nibh. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Euismod elementum nisi eleifend quam adipiscing vitae. Tristique risus nec feugiat in fermentum posuere urna nec. Ipsum dolor sit amet consectetur adipiscing elit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.',
        'Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Purus faucibus ornare suspendisse sed nisi lacus. Elementum curabitur vitae nunc sed velit. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Sit amet porttitor eget dolor morbi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Suspendisse interdum consectetur libero id faucibus nisl. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.',
        'A erat nam at lectus urna. Convallis posuere morbi leo urna molestie at elementum. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ultricies leo integer malesuada nunc. Eu turpis egestas pretium aenean pharetra magna ac. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tincidunt praesent semper feugiat nibh. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. In est ante in nibh mauris cursus mattis molestie. Purus in massa tempor nec feugiat. Volutpat blandit aliquam etiam erat velit. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Pretium nibh ipsum consequat nisl vel pretium lectus. Quis vel eros donec ac odio tempor orci dapibus.',
        'Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Etpharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat. Pretium quam vulputate dignissim suspendisse in est ante in. Faucibus in ornare quam viverra. Vestibulum sed arcu non odio euismod lacinia at quis. Leo duis ut diam quam nulla porttitor massa id neque. Odio facilisis mauris sit amet. Dui nunc mattis enim ut. Risus pretium quam vulputate dignissim suspendisse in. Arcu dui vivamus arcu felis bibendum ut. Sed pulvinar proin gravida hendrerit lectus a. Arcu cursus vitae congue mauris rhoncus aenean vel. Nibh mauris cursus mattis molestie a iaculis at erat. Posuere morbi leo urna molestie at.'
    ];
    paragraphContent.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        main.append(p);
    });

    // Footer
    const footer = document.createElement('footer');
    //Make footer divs
    let counter = 1;
    for (let i = 0; i < 3; i++) {
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div' + counter);
        footerDiv.append(document.createElement('p'));
        footerDiv.append(document.createElement('p'));

        footer.append(footerDiv);
        counter++;
    };
    counter = 1;
    //Make footer divs content
    const footerDiv1 = document.querySelector('.footer-div1');
    console.log(footerDiv1); // Returns null.
    // const footerDiv2 = document.querySelector('.footer-div2');
    // const footerDiv3 = document.querySelector('.footer-div3');
    // const footerDiv1p1 = document.querySelector('.footer-div1 > p');
    // footerDiv1p1.textContent = 'hi';
    // console.log(footerDiv1p1);
    // const footerDiv1p2 = document.querySelector('footer-div1 > p:nth-child(2)');
    // const footerDiv2p1 = document.querySelector('footer-div2 > p:nth-child(1)');
    // const footerDiv2p2 = document.querySelector('footer-div2 > p:nth-child(2)');
    // const footerDiv3p1 = document.querySelector('footer-div3 > p');
    // footerDiv1p1.textContent = 'Some text';
    // footerDiv1p2.textContent = 'Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat.';
    // footerDiv2p1.textContent = 'Some text';
    // footerDiv2p2.textContent = 'Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus';
    // footerDiv3p1.textContent = 'Some text';
    // const ul = document.createElement('ul');
    // for (let i = 0; i < 4; i++) {
    //     console.log(counter);
    //     const li = document.createElement('li');
    //     li.textContent = ('Item' + counter);
    //     ul.append(li);
    //     counter++;
    // };
    // No need to append anything else regaring the footer, since the loop already makes the entire structure, just need to be able to edit its contents. Either inside or out side the loop.


    content.append(header);
    content.append(banner);
    content.append(main);
    content.append(footer);
};

export { loadContent };
