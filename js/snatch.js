$(document).ready(function() {

    (function() {
        if (window.pluso)if (typeof window.pluso.start == "function") return;
        if (window.ifpluso==undefined) { window.ifpluso = 1;
            var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
            s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
            s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
            var h=d[g]('body')[0];
            h.appendChild(s);
        }})();


    // $.getJSON('/ajax/auction_get.php', {}, function(result){
    //     console.log(result);
    // });


    var clock;
    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        language: 'ru',
        callbacks: {
            stop: function() {
                $('.message').html('The clock has stopped!')
            }
        }
    });
    var date = new Date(2019, 01, 23).getTime()/1000; // input of finish date
    var now = new Date().getTime()/1000;
    clock.setTime(date-now);
    clock.setCountdown(true);
    clock.start();




    function registration(e, regActive){

        if(!e.target.classList.contains('reg-button')){
            return;
        }

        if(document.querySelector('.popup')){
            return;
        }

        let elem = document.getElementsByTagName('header')[0];

        let itemName = e.target.getAttribute('data-item-name');
        let xml = e.target.getAttribute('data-xml');
        let itemId = e.target.getAttribute('data-item-id');
        let snatchId = e.target.getAttribute('data-snatch-id');


        console.log(itemId, snatchId, itemName);

        const popup = document.createElement('div');
        popup.classList.add('popup');


        let template = `    <div class="close">Х</div>
        <form class="reg-form">
            <h3>Заполните анкету</h3>
            <p class="above-text">на ${itemName}</p>
            <input type="text" id="name" name="NAME" placeholder="Имя Фамилия">
            <input type="tel" id="phone" name="PHONE" placeholder="Телефон">
            <p class="about-phone">В случае выйгрыша мы свяжемся с Вами по этому телефону.</p>
            <input type="email" id="mail" name="MAIL" placeholder="E-mail">
            <input type="checkbox" id="agree-checkbox">
            <label for="agree-checkbox">Я согласен (-на) на обработку персональных данных</label>
            <div class="button">Получить за 5 рублей</div>
        </form>`;




        popup.innerHTML = template;

        elem.appendChild(popup);



        let closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', function(){
            "use strict";
            elem.removeChild(popup);
        }, false);

        let submit = document.querySelector('.button');
        submit.addEventListener('click', function(){
            "use strict";
            let data = {};
            var userName = document.getElementById('name').value;
            let userPhone = document.getElementById('phone').value;
            let userEmail = document.getElementById('mail').value;

            // validation + mask + checkbox

            data.name = userName;
            data.phone = userPhone;
            data.email = userEmail;
            data.xml = xml;
            data.item = itemId;
            data.snatch = snatchId;


            console.log(data);

            // $.getJSON('/ajax/auction_bid.php', data, function(result){
            //     console.log(result);
            // });

        } ,false);




    } 


    var items = document.querySelector('.promo-items');
    items.addEventListener('click', registration, false);



});