"use strict";

/**
 *
 * @param {number} code Code to toggle the vision by legend  1:Home | 2:Calculation Screen | 3:Result Screen)
 */
function showView(code){
    // Legend
    // 1 - HOME
    // 2 - CALCULATION SCREEN
    // 3 - RESULT SCREEN
    switch (code) {
        case 2:
            $('#calculation-screen').fadeIn();
            $('#home-screen, #result-screen').hide();
            break;
        case 3:
            $('#home-screen').fadeIn();
            $('#calculation-screen, #result-screen').hide();
            break;    
        default:
            $('#home-screen').fadeIn();
            $('#calculation-screen, #result-screen').hide();
            break;
    }
}

/**
 * 
 * @param {number} optimistic % of optimistc scenario
 * @param {number} neutral % of neutral scenario
 * @param {number} pessimistic % of pessimistic scenario
 */
function validateScenarioPercentage(optimistic, neutral, pessimistic){
    if((optimistic + neutral + pessimistic) == 100){
        return true;
    }else{
        return false;
    }
}

/**
 * 
 * @param {number} type Type of error to treat
 */
function treatError(type){
    // 1
    switch (type) {
        case 1:
            $.alert({title: 'Atencao!', content: ''+
                'A soma dos valores tem que dar 100%.<br/>'+ 
                'Voce forneceu: <br/>'+ 
                'Otimista: '+ optimistic+'%<br/>'+
                'Neutro: '+ neutral+'%<br/>'+
                'Pessimista: '+ pessimistic+'%<br/>'+
                '<hr/>'+
                'Total: '+(optimistic + neutral + pessimistic)+'% <br/>'+
                'Restam ou ultrapassou: '+ Math.abs((100-(optimistic + neutral + pessimistic)))
            });
            break;

        default:
            break;
    }
}


$(document).ready(function () {
    window.optimistic = 0;
    window.neutral = 0;
    window.pessimistic = 0;
    
    $('#calculate-risc').on('click', function(){
        optimistic = isNaN(parseFloat($('#scenario-optimistic').val())) ? 0 : parseFloat($('#scenario-optimistic').val());
        neutral =  isNaN(parseFloat($('#scenario-neutral').val())) ? 0 : parseFloat($('#scenario-neutral').val());
        pessimistic =  isNaN(parseFloat($('#scenario-pessimistic').val())) ? 0 : parseFloat($('#scenario-pessimistic').val());

        if(validateScenarioPercentage( optimistic, neutral, pessimistic )){
            alert('sucesso');
        }else{
            treatError(1);
        }

    });

    $('[type="number"]').focusout(function () {
        if($(this).val() > 100){
            $(this).val('0');
        }
    });

});