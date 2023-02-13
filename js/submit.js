document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField=document.getElementById('amount-deposit');
    const newDepositAmountstring=depositField.value; 
    const newDepositAmount=parseFloat(newDepositAmountstring);

const depositTotalElement=document.getElementById('total-diposit');
const totalDepositstring=depositTotalElement.innerText;
const totalDeposit=parseFloat(totalDepositstring);
const finalDeposit=totalDeposit+newDepositAmount;
depositTotalElement.innerText=finalDeposit;


const perviousBalance=document.getElementById('user-balance');
const newBalancestring=perviousBalance.innerText;
const newBalance=parseFloat(newBalancestring);
const currentBalance=newBalance+newDepositAmount;
perviousBalance.innerText=currentBalance;
depositField.value='';



  }  );

  document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField=document.getElementById('amount-withdraw');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
     
    const previousWithdrawField=document.getElementById("user-withdraw");
    const previousWithdrawString=previousWithdrawField.innerText;
    const previousWithdraw=parseFloat(previousWithdrawString);
     const currentWithdraw=previousWithdraw+newWithdrawAmount;
     previousWithdrawField.innerText=currentWithdraw;

     const balanceCurrentElement=document.getElementById('user-balance');
     const balanceCurrentString=balanceCurrentElement.innerText;
     const balanceCurrent=parseFloat(balanceCurrentString);

     const balance=balanceCurrent-newWithdrawAmount;
     balanceCurrentElement.innerText=balance;
      
     withdrawField.value='';



  })