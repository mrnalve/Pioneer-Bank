// login button event handler
let loginbtn = document.getElementById('login');
let loginarea = document.getElementById('login_area');
let transaction_area = document.getElementById('transaction_area');
loginbtn.addEventListener('click', (e) => {
    loginarea.style.display = 'none';
    transaction_area.style.display = 'block';
});

// deposit button event handler
let depositbtn = document.getElementById('addDeposit');

depositbtn.addEventListener('click', function () {
    let depositAmount = document.getElementById('depositAmount').value;
    let depositNum = parseFloat(depositAmount);

    updateSpanText('currentDeposit', depositNum);
    updateSpanText('currentBalance', depositNum);
    document.getElementById('depositAmount').value = "";

});
function updateSpanText(id, depositNum) {
    let current = document.getElementById(id).innerText;
    let currentNum = parseFloat(current);
    let totalAmount = depositNum + currentNum;
    document.getElementById(id).innerText = totalAmount;
}

// withdraw button
let withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
    let withdrawAmount = document.getElementById('withdrawAmount').value;
    let withdrawAmountNum = parseFloat(withdrawAmount);

    updateSpanText('currentWithdraw',withdrawAmountNum);
    updateSpanText('currentBalance',-1* withdrawAmountNum);
    document.getElementById('withdrawAmount').value = "";
})