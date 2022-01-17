window.onload = function() {
    document.getElementById("load_form").addEventListener("submit", function(e) {
       //console.log('Clicked');
        document.getElementById('loanResult').style.display = 'none';
        document.getElementById('loading').style.display = 'block';
        setTimeout(calculateResult,2000);
  
        
      e.preventDefault();
    });
  
      function calculateResult(){
         
          
          //UI Elements
          const amount = document.getElementById('amount');
          const interest = document.getElementById('interest');
          const years = document.getElementById('years');
  
          //Results
          const montlyPmnt = document.getElementById('montlyPmnt');
          const totalPmnt = document.getElementById('totalPmnt');
          const totalInterest = document.getElementById('totalInterest');
  
  
          //Calculation
          const priciple    = parseFloat(amount.value);
          const calculatedInterest = parseFloat(interest.value) / 100 / 12;
          const calculatedPmnt = parseFloat(years.value) * 12;
  
          //Monthly payment
          const x = Math.pow(1 + calculatedInterest, calculatedPmnt)
          const monthly = (priciple * x * calculatedInterest) / (x - 1);
  
          if (isFinite(monthly)) {
              montlyPmnt.value = monthly.toFixed(2);
              totalPmnt.value = (monthly * calculatedPmnt).toFixed(2);
              totalInterest.value = ((monthly * calculatedPmnt) - priciple ).toFixed(2);
  
              document.getElementById('loanResult').style.display = 'block';
              document.getElementById('loading').style.display = 'none';
  
          } else {
              // console.log('error');
              // document.getElementById('loading').style.display = 'none';
              showError('Please check number');
              
          }
  
      }
  
      //Show error
  
      function showError(error){
          //Hide
          document.getElementById('loanResult').style.display = 'none';
          document.getElementById('loading').style.display = 'none';
  
          //Create a div
          const errorDiv = document.createElement('div');
          //adding class in div
          errorDiv.className  = 'alert alert-warning';
  
          errorDiv.appendChild(document.createTextNode(error));
  
          //console.log(errorDiv);
          const card = document.getElementById('card');
          const heading = document.getElementById('heading');
          
          card.insertBefore(errorDiv, heading);
          
          //Clr error 
          setTimeout(ClrError, 2500);
  
      }
      //Clr error func
      function ClrError(){
          document.querySelector('.alert').remove();
      }
  };