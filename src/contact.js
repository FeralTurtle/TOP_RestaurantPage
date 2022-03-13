const contact = () => {
    const content = document.querySelector('#content');
    const contacts = document.createElement('div');
    contacts.classList.add('contacts');
    const contact = document.createElement('div');
    contact.classList.add('contact');
    for (let i = 0; i < 4; i++) {
        //img
        const p = document.createElement('p');
        p.textContent = 'Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat.';
        //append image
        contact.append(p);
        contacts.append(contact);
    };

    const footer = document.createElement('footer');
    const a = document.createElement('a');
    a.textContent = 'User icons created by Freepik - Flaticon';
    footer.append(a);
    
    content.append(contacts);
    content.append(footer);
};

export { contact };
