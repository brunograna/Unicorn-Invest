"use strict";

//Global Variables
window.optimistic = window.neutral = window.pessimistic = 0;

//Performance Variables
window.optimisticGood = window.optimisticRegular = window.optimisticWeak = 0;
window.neutralGood = window.neutralRegular = window.neutralWeak = 0;
window.pessimisticGood = window.pessimisticRegular = window.pessimisticWeak = 0;


$(document).ready(function () {    
    
    //The App functionality
    $('#calculate-risc').on('click', function(){
        optimistic = getValueFromInput($('#scenario-optimistic'));
        neutral =  getValueFromInput($('#scenario-neutral'));
        pessimistic =  getValueFromInput($('#scenario-pessimistic'));

        if(validatePercentage( [optimistic, neutral, pessimistic ])){
            optimisticGood = getValueFromInput($('#optimistic-good'));
            optimisticRegular = getValueFromInput($('#optimistic-regular'));
            optimisticWeak = getValueFromInput($('#optimistic-weak'));

            if(validatePercentage( [optimisticGood, optimisticRegular, optimisticWeak] )){
                neutralGood = getValueFromInput($('#neutral-good'));
                neutralRegular = getValueFromInput($('#neutral-regular'));
                neutralWeak = getValueFromInput($('#neutral-weak'));

                if(validatePercentage( [neutralGood, neutralRegular, neutralWeak] )){
                    pessimisticGood = getValueFromInput($('#pessimistic-good'));
                    pessimisticRegular = getValueFromInput($('#pessimistic-regular'));
                    pessimisticWeak = getValueFromInput($('#pessimistic-weak'));

                    if(validatePercentage( [pessimisticGood, pessimisticRegular, pessimisticWeak] )){
                        let percentages = calculatePerformance();
                        setPercentagesGoodAndWeak(percentages.good, percentages.weak, percentages.regular);
                        showView(3);
                    }else{
                        treatError(2, 'Pessimista', [pessimisticGood, pessimisticRegular, pessimisticWeak]);
                    }
                }else{
                    treatError(2, 'Neutro', [neutralGood, neutralRegular, neutralWeak]);
                }
            }else{
                treatError(2, 'Otimista', [optimisticGood, optimisticRegular, optimisticWeak]);
            }
        }else{
            treatError(1);
        }

    });

    //Validate Input range 0 - 100
    $('[type="number"]').focusout(function () {
        if($(this).val() > 100){
            $(this).val('0');
        }
    });

});