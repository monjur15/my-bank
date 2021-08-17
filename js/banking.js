// Handle deposit button event

document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposited
    const depositeInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositeInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposite-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    // console.log(previousDepositAmount,newDepositAmount);
    const NewDepositTotal = previousDepositAmount +
        newDepositAmount;

    depositTotal.innerText = NewDepositTotal;

    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanaceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanaceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposite field
    depositeInput.value = '';
});

// handle withdraw event handler

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdarwAmount = parseFloat(withdrawAmountText);
    console.log(newWithdarwAmount);

    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdarwAmount;

    withdrawTotal.innerText = newWithdrawTotal;



    //update balance

    const balanceTotal = document.getElementById('balance-total');
    const prevIousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(prevIousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdarwAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdarw input
    withdrawInput.value = '';


})