$(document).ready(function(){
    function topmenu_scroll() {
        if ($(document).scrollTop() > 50) {
            if ($('.header-wrapper').hasClass('active')) { } else {
                $('.header-wrapper').addClass('active');
            }
        } else {
            if ($('.header-wrapper').hasClass('active')) {
                $('.header-wrapper').removeClass('active');
            }
        }
        return false;
    }

    $('.top-mob').click(function(){
        $(this).toggleClass('active');
    });

    topmenu_scroll();

    $(window).scroll(function () {
        topmenu_scroll();
    });

    /* FORM */

    function sizeGb(num) {
        if (num == parseInt(num)) {
            if (num>1048576) {
                num = num / 1048576;
                return num.toFixed(2) + ' Mb';
            } else if (num>1024) {
                num = num / 1024;
                return num.toFixed(2) + ' Kb';
            } else {
                return num + ' bytes';
            }
        }
        return num;
    }

    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // files is a FileList of File objects. List some properties.
        var output = [];
        file_total = 0;
        filez = 0;
        for (var i = 0, f; f = files[i]; i++) {
            file_total = file_total + f.size;
            output.push('<li><strong>',
                escape(f.name),
                '</strong> (', f.type || 'n/a', ') - ',
                sizeGb(f.size),
            '</li>');
            filez = filez + 1;
        }
        document.getElementById('filez').innerHTML = '<ul>' + output.join('') + '</ul><div id="file_total" class="'+(file_total>=5242880?'red':'green')+'">Total: ' + sizeGb(file_total) +'</div>';
        if (file_total>=5242880) {
            $('#fsz').val('1');
        } else {
            $('#fsz').val('0');
        }
        if (filez>5) {
            $('#fsc').val('1');
        } else {
            $('#fsc').val('0');
        }
        return false;
    }

    document.getElementById('files_to_upload').addEventListener('change', handleFileSelect, false);

    /*
    $('#files_to_upload').on('change', function (event, files, label) {
        var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');
        if (file_name!='') {
            $('# + label').html(file_name);
        } else {
            $('#files_to_upload + label').html('Attach file');
        }

    });
    */

    function filled(a) {
        if (document.getElementById(a).value!='') {
            if (!$('#'+a).hasClass('filled')) {
                $('#'+a).addClass('filled');
            }
        } else {
            if ($('#'+a).hasClass('filled')) {
                $('#'+a).removeClass('filled');
            }
        }
        return false;
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    $('.form-div > input[type=text], .form-div > textarea').each(function(){
        fill_id = $(this).attr('id');
        filled(fill_id);
    });

    $('.form-div > input[type=text], .form-div > textarea').keyup(function(){
        fill_id = $(this).attr('id');
        filled(fill_id);
        if ($(this).hasClass('red_req')) {
            if (document.getElementById(fill_id).value!='') {
                $(this).removeClass('red_req');
            }
        }
    });



    var phone, email, reg, mes = '';
    $('#phone').blur(function(){
        phone = $(this).val();
        reg= phone.match(/\d+/g)?phone.match(/\d+/g):[];
        for(var i=0;i<reg.length;i++){ reg[i]=+reg[i] }
        phone = reg.join("");
        if (phone.length>5&&phone.length<14) {
            $('#phone').val(phone);
        }
        if (phone.length<=5||phone.length>=14) {
            if (!$('#phone').hasClass('red_req')) {
                $('#phone').addClass('red_req');
            }
        }
    });

    $('#email').blur(function(){
        if (!validateEmail($('#email').val())) {
            if (!$('#email').hasClass('red_req')) {
                $('#email').addClass('red_req');
            }
        }
    });

    $('.required').blur(function(){
        fill_id = $(this).attr('id');
        if (document.getElementById(fill_id).value=='') {
            $(this).removeClass('red_req').addClass('red_req');
        }
    });

    var err_form = 0;
    $('#submit').click(function(){
        mes = '';
        err_form = 0;
        $('.required').each(function(){
            fill_id = $(this).attr('id');
            if (document.getElementById(fill_id).value=='') {
                err_form = err_form + 1;
                if (!$(this).hasClass('red_req')) {
                    $(this).addClass('red_req');
                }
            }
        });
        if (err_form!=0) {
            mes = mes + '<p>Fill in the fields</p>';
        }
        phone = $('#phone').val();
        reg= phone.match(/\d+/g)?phone.match(/\d+/g):[];
        for(var i=0;i<reg.length;i++){ reg[i]=+reg[i] }
        phone = reg.join("");
        if (phone.length>5&&phone.length<14) {
            $('#phone').val(phone);
        }
        if (phone.length<=5||phone.length>=14) {
            err_form = err_form + 1;
            if (!$('#phone').hasClass('red_req')) {
                $('#phone').addClass('red_req');
            }
            mes = mes + '<p>Enter your valid phone number</p>';
        }

        if (!validateEmail($('#email').val())) {
            err_form = err_form + 1;
            mes = mes + '<p>Enter your valid email</p>';
        }

        if ($('#fsz').val()==1) {
            err_form = err_form + 1;
            mes = mes + '<p>The size of your files has exceeded 5 Mb</p>';
        }
        if ($('#fsc').val()==1) {
            err_form = err_form + 1;
            mes = mes + '<p>Only 5 files or less</p>';
        }

        if (err_form==0) {
            $(this).attr('type','submit');
        } else {
            $(this).attr('type','button');
        }
        if (mes!='') {
            $('.form-mess').html(mes);
        }
    });

    /* Matdom slider */

    var matdom_slide,matdom_left,autoslide;
    function matdom_next() {
        var matdom_slide = $('.matdom-slides > .matdom-slide').index($('.matdom-slides > .matdom-slide.active')) + 1;
        if (matdom_slide==$('.matdom-slides > .matdom-slide').length) {
            $('.matdom-slides > .matdom-slide.active').removeClass('active');
            $('.matdom-slides > .matdom-slide:first-child').removeClass('active').addClass('active');
            matdom_slide = 1;
        } else {
            $('.matdom-slides > .matdom-slide.active').removeClass('active').next().removeClass('active').addClass('active');
            matdom_slide = matdom_slide + 1;
        }

        $('.matdom-bullets>ul>li.active').removeClass('active');
        $('.matdom-bullets>ul>li:nth-child('+matdom_slide+')').removeClass('active').addClass('active');

        var matdom_left = 100 * (matdom_slide - 1);
        $('.matdom-slides').css('marginLeft','-'+matdom_left+'%');
        return false;
    }

    $('.matdom-arrow-left').click(function(){
        matdom_slide = $('.matdom-slides > .matdom-slide').index($('.matdom-slides > .matdom-slide.active')) + 1;
        if (matdom_slide==1) {
            $('.matdom-slides > .matdom-slide.active').removeClass('active');
            $('.matdom-slides > .matdom-slide:last').removeClass('active').addClass('active');
            matdom_slide = $('.matdom-slides > .matdom-slide').length;
        } else {
            $('.matdom-slides > .matdom-slide.active').removeClass('active').prev().removeClass('active').addClass('active');
            matdom_slide = matdom_slide - 1;
        }
        $('.matdom-bullets>ul>li.active').removeClass('active');
        $('.matdom-bullets>ul>li:nth-child('+matdom_slide+')').removeClass('active').addClass('active');
        matdom_left = 100 * (matdom_slide - 1);
        $('.matdom-slides').css('marginLeft','-'+matdom_left+'%');
        clearInterval(autoslide);
        autoslide = setInterval(matdom_next,8000);
    });
    $('.matdom-arrow-right').click(function(){
        matdom_next();
        clearInterval(autoslide);
        autoslide = setInterval(matdom_next,8000);
    });

    $('.matdom-bullets>ul>li').click(function(){
        if (!$(this).hasClass('active')) {
            matdom_slide = $('.matdom-bullets>ul>li').index($(this)) + 1;
            $('.matdom-slides > .matdom-slide.active').removeClass('active');
            $('.matdom-slides > .matdom-slide:nth-child('+matdom_slide+')').removeClass('active').addClass('active');

            $('.matdom-bullets>ul>li.active').removeClass('active');
            $('.matdom-bullets>ul>li:nth-child('+matdom_slide+')').removeClass('active').addClass('active');

            matdom_left = 100 * (matdom_slide - 1);
            $('.matdom-slides').css('marginLeft','-'+matdom_left+'%');

            clearInterval(autoslide);
            autoslide = setInterval(matdom_next,8000);
        }
    });

    autoslide = setInterval(matdom_next,8000);
});
