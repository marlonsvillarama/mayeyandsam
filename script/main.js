document.getElementById('avail').addEventListener('click', (e) => {
    // let parallax = document.querySelector('.parallax');
    // console.log('parallax', parallax);
    // parallax.style.backgroundImage = 'url("/images/marielle_and_sam_06.png")';

    console.log('avail click');
    const dlg = document.querySelector('dialog');
    dlg.showModal();
});

document.getElementById('cancel_avail').addEventListener('click', (e) => {
    // let parallax = document.querySelector('.parallax');
    // console.log('parallax', parallax);
    // parallax.style.backgroundImage = 'url("/images/marielle_and_sam_06.png")';

    console.log('avail click');
    const dlg = document.querySelector('dialog');
    dlg.close();
});

