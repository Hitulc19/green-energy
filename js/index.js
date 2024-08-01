// Resources data
const resources = {
    section1: {
        title: 'Lorem ipsum dolor',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit ligula, viverra at viverra nec, fermentum ac libero. Proin non luctus est. Sed commodo sem at justo tempor, ac laoreet libero faucibus. Phasellus eu porttitor massa, rhoncus ullamcorper nibh. Donec in ipsum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus',
        image: 'images/pexels-frans-van-heerden-201846-2699258.jpg',
    },
    section2: {
        title: 'Lorem ipsum dolor',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit ligula, viverra at viverra nec, fermentum ac libero. Proin non luctus est. Sed commodo sem at justo tempor, ac laoreet libero faucibus. Phasellus eu porttitor massa, rhoncus ullamcorper nibh. Donec in ipsum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus',
        image: 'images/pexels-kindelmedia-7527880.jpg',
    },
    section3: {
        title: 'Lorem ipsum dolor',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit ligula, viverra at viverra nec, fermentum ac libero. Proin non luctus est. Sed commodo sem at justo tempor, ac laoreet libero faucibus. Phasellus eu porttitor massa, rhoncus ullamcorper nibh. Donec in ipsum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus',
        image: 'images/pexels-pixabay-414837.jpg',
    }
};

// Get references to the active parts of the HTML
const buttons = document.querySelectorAll('.control-button');
const contentDisplay = document.getElementById('content-display');

// Event handler
function selectPage(ev) {
    const currentButton = ev.target.closest('button');
    // Remove the 'active' class from all buttons and add it to the current button
    buttons.forEach(btn => btn.classList.remove('active'));
    currentButton.classList.add('active');

    // Update the content-display div with the selected page data
    contentDisplay.style.opacity = '0';
    contentDisplay.style.transform = 'translateY(20px)';
    setTimeout(() => {
        contentDisplay.innerHTML = `
            <h2>${resources[currentButton.id].title}</h2>
            <img src="${resources[currentButton.id].image}" style="width: 100%; height: auto; margin-bottom: 20px;">
            <p>${resources[currentButton.id].bodyText}</p>
        `;
        contentDisplay.style.opacity = '1';
        contentDisplay.style.transform = 'translateY(0)';
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    // Set default content
    selectPage({ target: document.getElementById('section1') });
});

// Register buttons for click event
buttons.forEach(button => {
    button.addEventListener('click', selectPage);
});
