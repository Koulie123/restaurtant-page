export default function generateAboutPage(parent) {
    parent.innerHTML = '';

    const topOfAboutDiv = document.createElement('div');
    const topOfAbouth2 = document.createElement('h2');
    topOfAbouth2.innerHTML = "Gino's pizza<br>Founded 1953";
    topOfAboutDiv.classList.add('content-header')
    topOfAboutDiv.appendChild(topOfAbouth2);

    parent.appendChild(topOfAboutDiv);


    const additionalPara = document.createElement('div');
    additionalPara.classList.add('content-paragraph');
    additionalPara.textContent = "Sed tristique vestibulum augue, in vehicula est. Mauris imperdiet, turpis sit amet placerat volutpat, est neque laoreet ipsum, vitae ullamcorper purus turpis a libero. Vivamus ut sapien ut orci facilisis feugiat. Etiam at lacus elit. In cursus mauris et posuere ullamcorper. Sed molestie ante quis volutpat fermentum. Proin rhoncus eros magna, eu rhoncus justo lacinia et. Integer tincidunt augue ut justo interdum finibus. Pellentesque sit amet vehicula felis. Donec ac pulvinar mi. ";
    parent.appendChild(additionalPara);
}
