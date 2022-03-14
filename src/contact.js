import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';

const contact = () => {
    const content = document.querySelector('#content');
    const contacts = document.createElement('div');
    contacts.classList.add('contacts');
    const contact = document.createElement('div');
    contact.classList.add('contact');
    for (let i = 0; i < 3; i++) {
        const images = [icon1, icon2, icon3];
        const img = document.createElement('img');
        img.src = images[i];
        const p = document.createElement('p');
        p.textContent = 'Nam libero justo laoreet sit amet. Dignissim convallis aenean et tortor at risus viverra adipiscing. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Egestas pretium aenean pharetra magna ac placerat.';
        contact.append(img);
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
