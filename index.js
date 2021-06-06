const form = document.querySelector('.form');
const acknowBtn = document.querySelector('.nav-acknow');
const undertakingBtn = document.querySelector('.nav-under');
const undertakingContain = document.querySelector('.undertaking');

const turnOverYes = document.querySelector('#turnOverYes');
const turnOverNo = document.querySelector('#turnOverNo');
const showTurnOverYes = document.querySelector('.showTurnOverYes');
const showTurnOverNo = document.querySelector('.showTurnOverNo');

acknowBtn.addEventListener('click', function() {
    acknowBtn.classList.add('active');
    undertakingBtn.classList.remove('active');

    form.classList.remove('hiddenField');
    undertakingContain.classList.add('hiddenField');
});
undertakingBtn.addEventListener('click', function() {
    acknowBtn.classList.remove('active');
    undertakingBtn.classList.add('active');

    undertakingContain.classList.remove('hiddenField');
    form.classList.add('hiddenField');
});

turnOverYes.addEventListener('click', function() {
    showTurnOverYes.classList.remove('hiddenField');
    showTurnOverNo.classList.add('hiddenField');
});
turnOverNo.addEventListener('click', function() {
    showTurnOverNo.classList.remove('hiddenField');
    showTurnOverYes.classList.add('hiddenField');
});