var menuBar = document.querySelector('.menu-bar-blk');//宣告menubar
var cnBut = document.getElementById('cn-but');//宣告中文
var twBut = document.getElementById('tw-but');//宣告台語
var card1 = document.querySelector('.card-1');//宣告中文內容
var card2 = document.querySelector('.card-2');//宣告台語內容

//header區塊
window.addEventListener('scroll',function () {//滾動事件
    var header = document.querySelector('header');//宣告header
    header.classList.toggle('sticky', window.scrollY > 0)//當window.scrollY > 0時新增sticky屬性


})


//meun區塊
menuBar.addEventListener('click', function (){//當menubar點擊時
    let menuList = document.querySelector('.menu-list');
    // console.log(menuList);
    menuList.classList.toggle('active');//切換active
})



//語言切換區塊
cnBut.addEventListener('click',function() {
    card1.style = 'display: block;'
    card2.style = 'display: none;'
})

twBut.addEventListener('click',function() {
    card1.style = 'display: none;'
    card2.style = 'display: block;'
})


