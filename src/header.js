const header = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    const span = document.createElement('span');
    const nav = document.createElement('nav');
    const anchorIds = ['home', 'menu', 'hours', 'contact'];
    for (let i = 0; i < 4; i++) {
        const newAnchor = document.createElement('a');
        newAnchor.setAttribute('href', '#');
        newAnchor.id = anchorIds[i];
        nav.append(newAnchor);
    };
    header.append(span);
    header.append(nav);
    content.append(header);
}

export { header };
