const mobileMenuBtn = document.getElementById('mobileBtn');
const sidebarCloseBtn = document.getElementById('sidebar_close_btn');

const sidebar = document.getElementById('sidebar');

mobileMenuBtn.addEventListener('click', function () {
    sidebar.style.display =  'block';
    mobileMenuBtn.style.display =  'none';
})

sidebarCloseBtn.addEventListener('click', function () {
    sidebar.style.display = 'none';
    mobileMenuBtn.style.display = 'block';
})