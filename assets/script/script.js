let images = document.querySelectorAll('.certificate');

images.forEach((img,index)=>{
    img.addEventListener('click',()=>{
        showPopup(img.src,index);
    });
});

function showPopup(src, selectedIndex){
    document.getElementById('popup-img').src =src;
     document.getElementById('popup').classList.remove('hidden');
    document.querySelector('.thumbnail-container').innerHTML = "";

    images.forEach((img, i)=>{
        let thumb = document.createElement("img");
        thumb.src = img.src;
        thumb.classList.add("thumbnail");

        if(i === selectedIndex){
            thumb.classList.add('selected');
        }

        thumb.addEventListener('click',()=>{
            document.getElementById('popup-img').src = img.src;

            document.querySelectorAll(".thumbnail").forEach(t => t.classList.remove("selected"));
            thumb.classList.add('selected');
        });

        document.getElementById('popup-thumbnails').appendChild(thumb);
    });
}

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});