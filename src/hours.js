const hours = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('main');
    const div = document.createElement('div');
    div.classList.add('business-hours');
    const p = document.createElement('p');
    p.textContent = 'Business hours';
    const ul = document.createElement('ul');
    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
        li.textContent = 'Item ' + (i + 1);
        ul.append(li);
    };
    div.append(p);
    div.append(ul);
    main.append(div);
    content.append(main);
}

export { hours };
