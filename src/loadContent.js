const loadContent = () => {
    const content = document.querySelector('#content');

    const testDiv = document.createElement('div');
    testDiv.textContent = 'hi';

    return testDiv;
};

export default loadContent;
