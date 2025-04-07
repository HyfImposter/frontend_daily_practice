const changeColor = () => {
    document.querySelector('.panel').style.background = 'hotpink';
};

const changeTitle = () => {
    //what do we want to change?
    document.querySelectorAll('h1')[1].textContent = "hello world";
};

const addImage = () => {
    // adds the following image to each panel:
    // 1. what element do you want to select?
    //`<img src="https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg" />`;
    const panel = document.querySelector('.panel');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg');
    panel.appendChild(newImg);
};

const clearDiv = () => {
    // clears all of the panels of content
    const panel = document.querySelector('.panel');
    while (panel.firstChild) {
        panel.removeChild(panel.firstChild);
    }

};
