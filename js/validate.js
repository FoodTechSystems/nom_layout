 $(document).ready(function() {
     $(".addCard__form").validate({
         rules: {
             cardOfNumber: {
                 required: true,
                 minlength: 6,
                 maxlength: 16,
             },
             nameOfCard: {
                 required: true,
                 minlength: 6,
                 maxlength: 16,
             },
             MMYY: {
                 required: true
             },
             CVV: {
                 required: true
             }
         },
         messages: {
             cardOfNumber: {
                 required: 'Обязательное поле',
                 minlength: 'Минимум 6 символов',
                 maxlength: 'Максимум 6 символов'
             },
             nameOfCard: {
                 required: 'Обязательное поле',
                 minlength: 'Минимум 2 символова'
             },
             MMYY: {
                 required: 'Обязательное поле'
             },
             CVV: {
                 required: 'Обязательное поле'
             }
         }
     });
 });
 