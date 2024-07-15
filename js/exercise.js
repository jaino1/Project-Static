function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.classList.contains('visible')) {
        content.style.height = content.scrollHeight + 'px';
        // Force reflow to make sure the height is applied
        content.offsetHeight;
        content.style.height = '0';
        content.style.opacity = '0';
        setTimeout(() => {
            content.classList.remove('visible');
            content.style.display = 'none';
        }, 500); // Match the duration in the CSS transition
    } else {
        content.style.display = 'block';
        content.offsetHeight; // Force reflow to ensure the transition starts
        content.classList.add('visible');
        content.style.height = content.scrollHeight + 'px';
        content.style.opacity = '1';
    }
}
