const loadContentHome = () => {
    // Header
    const span = document.querySelector('span');
    span.textContent = 'Logo';
    const anchor1 = document.querySelector('nav > a:nth-child(1)');
    anchor1.textContent = 'Home';
    const anchor2 = document.querySelector('nav > a:nth-child(2)');
    anchor2.textContent = 'Our menu';
    const anchor3 = document.querySelector('nav > a:nth-child(3)');
    anchor3.textContent = 'Business hours';
    const anchor4 = document.querySelector('nav > a:nth-child(4)');
    anchor4.textContent = 'Contact us';

    // Main
    const h2 = document.querySelector('h2');
    h2.textContent = 'About the restaurant';
    const paragraphContent = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Id consectetur purus ut faucibus pulvinar. Id ornare arcu odio ut sem. Nec tincidunt praesent semper feugiat nibh. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Euismod elementum nisi eleifend quam adipiscing vitae. Tristique risus nec feugiat in fermentum posuere urna nec. Ipsum dolor sit amet consectetur adipiscing elit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.',
        'Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Purus faucibus ornare suspendisse sed nisi lacus. Elementum curabitur vitae nunc sed velit. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Sit amet porttitor eget dolor morbi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Suspendisse interdum consectetur libero id faucibus nisl. Ipsum a arcu cursus vitae congue mauris rhoncus aenean.',
        'A erat nam at lectus urna. Convallis posuere morbi leo urna molestie at elementum. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ultricies leo integer malesuada nunc. Eu turpis egestas pretium aenean pharetra magna ac. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tincidunt praesent semper feugiat nibh. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. In est ante in nibh mauris cursus mattis molestie. Purus in massa tempor nec feugiat. Volutpat blandit aliquam etiam erat velit. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Pretium nibh ipsum consequat nisl vel pretium lectus. Quis vel eros donec ac odio tempor orci dapibus.',
        'Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Etpharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat. Pretium quam vulputate dignissim suspendisse in est ante in. Faucibus in ornare quam viverra. Vestibulum sed arcu non odio euismod lacinia at quis. Leo duis ut diam quam nulla porttitor massa id neque. Odio facilisis mauris sit amet. Dui nunc mattis enim ut. Risus pretium quam vulputate dignissim suspendisse in. Arcu dui vivamus arcu felis bibendum ut. Sed pulvinar proin gravida hendrerit lectus a. Arcu cursus vitae congue mauris rhoncus aenean vel. Nibh mauris cursus mattis molestie a iaculis at erat. Posuere morbi leo urna molestie at.'
    ];
    const mainParagraphs = Array.from(document.querySelectorAll('main > p'));
    for (let i = 0; i < mainParagraphs.length; i++) {
        let paragraph = mainParagraphs[i];
        paragraph.textContent = paragraphContent[i];
    };

    // Footer
    const footerDiv1 = document.querySelector('.footer-div1');
    document.querySelector('.footer-div1 > p:nth-child(1)').textContent = 'Some text';
    document.querySelector('.footer-div1 > p:nth-child(2)').textContent = 'Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat.';
    const footerDiv2 = document.querySelector('.footer-div2');
    document.querySelector('.footer-div2 > p:nth-child(1)').textContent = 'Some text';
    document.querySelector('.footer-div2 > p:nth-child(2)').textContent = 'Imperdiet dui accumsan sit amet nulla facilisi. Elit ullamcorper dignissim cras tincidunt. Tortor vitae purus';
    const footerDiv3 = document.querySelector('.footer-div3');
    document.querySelector('.footer-div3 > p:nth-child(1)').textContent = 'Some text';
    const ul = document.querySelector('ul');
    const ulItems = ul.children;
    for (let i = 0; i < ulItems.length; i++) {
        let li = ulItems[i];
        li.textContent = ('Item ' + (i+1));
    };
};

export { loadContentHome };
