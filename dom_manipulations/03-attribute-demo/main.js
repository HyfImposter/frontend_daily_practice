/* 
cat:  https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg
dog:  https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg
bird: https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg
fish: https://thumbs-prod.si-cdn.com/n7Z82GD9Eav_CtpnzizNo66-dKc=/420x240/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg'
*/


const showCat = (ev) => {
    // your code here...
    console.log('update the image to show a cat!');
    const img = document.querySelector('#image-demo');
    img.setAttribute('src', 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg');
};

const showDog = (ev) => {
    // your code here...
    console.log('update the image to show a dog!');
    const img = document.querySelector('#image-demo');
    img.setAttribute('src', 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg');
};

const showBird = (ev) => {
    // your code here...
    console.log('update the image to show a bird!');
    const img = document.querySelector('#image-demo');
    img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg');
};

const showFish = (ev) => {
    // your code here...
    console.log('update the image to show a fish!');
    const img = document.querySelector('#image-demo');
    img.setAttribute('src', 'https://thumbs-prod.si-cdn.com/n7Z82GD9Eav_CtpnzizNo66-dKc=/420x240/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg');
};

