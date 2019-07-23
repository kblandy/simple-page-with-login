const primaryImg = document.getElementById("primary-img");

// Changes the main page image
function changeImage(){
    primaryImg.src = "./images/room.jpg"
}

function changeImageBack() {
    primaryImg.src = "./images/door.jpg"
}

// changes image back and forth with mouseover
primaryImg.addEventListener('mouseover', (event) =>{
    // will change the image after it is clicked
    // setTimeout (changeImage, 2000);
    changeImage();
    primaryImg.addEventListener('mouseout', (event) =>{
        // will change the image after it is clicked
        changeImageBack();
    });
    
});


