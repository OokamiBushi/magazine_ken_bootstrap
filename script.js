const sunshine = document.getElementById('sunshine');
const moonlight = document.getElementById('moonlight');//получаем объекты

moonlight.addEventListener('click', themeLight);//переход на светлую тему
sunshine.addEventListener('click', themeDark);//переход на темную тему

function themeLight() {
    this.style.display = 'none';
    sunshine.style.display = 'block';
    document.querySelector('.bg-dark').classList.remove('bg-dark', 'bg-gradient');
    document.body.classList.add('bg-light');
};//функция темной темы

function themeDark() {
    this.style.display = 'none';
    moonlight.style.display = 'block';
    document.querySelector('.bg-light').classList.remove('bg-light');
    document.body.classList.add('bg-dark', 'bg-gradient');
};//функция светлой темы