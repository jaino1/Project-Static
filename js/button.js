const chapterButton = document.querySelector('.Chapter');

const contentBox = document.querySelector('.ContentBox');

chapterButton.addEventListener('click',function(event) {
    contentBox.classList.toggle('show');
    event.stopPropagation();
});

contentBox.addEventListener('click',function(event) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('click',function(event) {
    if (!contentBox.contains(event.target) && event.target !== chapterButton ) {
        contentBox.classList.remove('show');
    }
});