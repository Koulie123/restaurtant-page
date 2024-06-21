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

    const secondPara = document.createElement('div');
    secondPara.classList.add('content-paragraph');
    secondPara.textContent = "Curabitur feugiat magna at cursus malesuada. Cras tincidunt magna id orci scelerisque, vitae fermentum nunc lacinia. Suspendisse eget felis sagittis, egestas felis id, suscipit nibh. Maecenas maximus, sem ut auctor euismod, sem libero dapibus mauris, vel interdum augue magna quis felis. Nullam facilisis commodo ullamcorper. Proin luctus viverra est ut elementum. Donec vel tellus quis nisl molestie pulvinar ac nec massa. Pellentesque a efficitur nibh. Fusce leo dolor, vehicula nec ante vel, facilisis bibendum nisl. Curabitur feugiat magna at cursus malesuada. Cras tincidunt magna id orci scelerisque, vitae fermentum nunc lacinia. Suspendisse eget felis sagittis, egestas felis id, suscipit nibh. Maecenas maximus, sem ut auctor euismod, sem libero dapibus mauris, vel interdum augue magna quis felis. Nullam facilisis commodo ullamcorper. Proin luctus viverra est ut elementum. Donec vel tellus quis nisl molestie pulvinar ac nec massa. Pellentesque a efficitur nibh. Fusce leo dolor, vehicula nec ante vel, facilisis bibendum nisl. ";
    parent.appendChild(secondPara);
}
