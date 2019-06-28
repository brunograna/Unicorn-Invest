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

/**
 * Help to execute automated tests - regular scenario
 */
function regularScenario(){
    $('#scenario-optimistic').val(0);
    $('#scenario-neutral').val(100);
    $('#scenario-pessimistic').val(0);

    $('#optimistic-good').val(0);
    $('#optimistic-regular').val(100);
    $('#optimistic-weak').val(0);

    $('#neutral-good').val(0);
    $('#neutral-regular').val(100);
    $('#neutral-weak').val(0);

    $('#pessimistic-good').val(0);
    $('#pessimistic-regular').val(100);
    $('#pessimistic-weak').val(0);
}