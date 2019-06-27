/**
 * Help to execute automated tests - positive scenario
 */
function positiveScenario(){
    $('#scenario-optimistic').val(40);
    $('#scenario-neutral').val(20);
    $('#scenario-pessimistic').val(40);

    $('#optimistic-good').val(60);
    $('#optimistic-regular').val(30);
    $('#optimistic-weak').val(10);

    $('#neutral-good').val(30);
    $('#neutral-regular').val(40);
    $('#neutral-weak').val(30);

    $('#pessimistic-good').val(20);
    $('#pessimistic-regular').val(30);
    $('#pessimistic-weak').val(50);
}
/**
 * Help to execute automated tests - negative scenario
 */
function negativeScenario(){
    $('#scenario-optimistic').val(20);
    $('#scenario-neutral').val(20);
    $('#scenario-pessimistic').val(60);

    $('#optimistic-good').val(60);
    $('#optimistic-regular').val(30);
    $('#optimistic-weak').val(10);

    $('#neutral-good').val(30);
    $('#neutral-regular').val(40);
    $('#neutral-weak').val(30);

    $('#pessimistic-good').val(20);
    $('#pessimistic-regular').val(30);
    $('#pessimistic-weak').val(50);
}