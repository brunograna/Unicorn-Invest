"use strict";

/**
 * 
 * @param {Element} elem Element to rescue the value
 */
function getValueFromInput(elem){
    return isNaN(parseFloat(elem.val())) ? 0 : parseFloat(elem.val());
}

/**
 * 
 * @param {Array} percentages Array of percentages
 */
function validatePercentage(percentages){
    let sumPercentage = 0;
    percentages.forEach(percentage => {
        sumPercentage += percentage;
    });
    return (sumPercentage == 100) ? true : false;
}

/**
 *
 * @param {Number} code Code to toggle the vision by legend  1:Home | 2:Calculation Screen | 3:Result Screen)
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
            $('#result-screen').fadeIn();
            $('#calculation-screen, #home-screen').hide();
            break;    
        default:
            $('#home-screen').fadeIn();
            $('#calculation-screen, #result-screen').hide();
            break;
    }
}

/**
 * 
 * @param {Number} type Type of error to treat
 */
function treatError(type, boxName = null, boxValues = new Array()){
    // 1 - Scenario Validation Error
    // 2 - Performance Validation Error
    switch (type) {
        case 1:
            $.alert({title: 'Atenção!', content: ''+
                '<div style="font-size:13px;">'+ 
                'A soma dos valores tem que dar 100%.<br/>'+ 
                'Você forneceu para os cenarios: <br/>'+ 
                'Otimista: '+ optimistic+'%<br/>'+
                'Neutro: '+ neutral+'%<br/>'+
                'Pessimista: '+ pessimistic+'%<br/>'+
                '<hr/>'+
                'Total: '+(optimistic + neutral + pessimistic)+'% <br/>'+
                (((100-(optimistic + neutral + pessimistic))>0) ? 'Restam: '+(100-(optimistic + neutral + pessimistic)) : 'Ultrapassou: '+ Math.abs((100-(optimistic + neutral + pessimistic))))
                +'</div>'
            });
            break;
        case 2:
            $.alert({title: 'Atenção!', content: ''+
                '<div style="font-size:13px;">'+ 
                'Percebemos um erro na validação do Desempenho '+boxName+'.<br/>'+ 
                'A soma dos valores tem que dar 100%.<br/>'+ 
                'Foi fornecido para os desempenhos: <br/>'+ 
                'Bom: '+ boxValues[0]+'%<br/>'+
                'Regular: '+ boxValues[1]+'%<br/>'+
                'Fraco: '+ boxValues[2]+'%<br/>'+
                '<hr/>'+
                'Total: '+(boxValues[0] + boxValues[1] + boxValues[2])+'% <br/>'+
                (((100-(boxValues[0] + boxValues[1] + boxValues[2]))>0) ? 'Restam: '+(100-(boxValues[0] + boxValues[1] + boxValues[2])) : 'Ultrapassou: '+ Math.abs((100-(boxValues[0] + boxValues[1] + boxValues[2]))))
                +'</div>'
            });
            break;
        default:
            $.alert({title: 'Atenção!', content: 'Algo deu errado!'});
            break;
    }
}

/**
 * Uses the global variable to calculate the performance
 */
function calculatePerformance(){
    let percentages = {weak: 0, good: 0, regular: 0};

    percentages.good = ( (optimistic*optimisticGood) + (neutral*neutralGood) + (pessimistic*pessimisticGood) )/100;
    percentages.regular = ( (optimistic*optimisticRegular) + (neutral*neutralRegular) + (pessimistic*pessimisticRegular) )/100;
    percentages.weak = ( (optimistic*optimisticWeak) + (neutral*neutralWeak) + (pessimistic*pessimisticWeak) )/100;

    return percentages;
}

/**
 * 
 * @param {Number} good % of the performance be good
 * @param {Number} weak % of the performance be weak
 * @param {Number} regular % of the performance be regular
 */
function setPercentagesGoodAndWeak(good, weak, regular){
    if(good > weak || regular > weak){
        $('#result-screen').addClass('positive');
        $('#result-phrase').text('RECOMENDA');    
    }else{
        $('#result-screen').addClass('negative');    
        $('#result-phrase').text('NÃO RECOMENDA');    
    }
    $('#result-chance-good').text(good+'%');
    $('#result-chance-weak').text(weak+'%');
    
}