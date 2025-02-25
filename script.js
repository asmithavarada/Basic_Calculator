function appendToDisplay(value) {
  let display = document.getElementById('display');

  // Append value to display
  display.value += value;

  // Highlight numbers dynamically
  highlightNumbers();
}

function highlightNumbers() {
  let display = document.getElementById('display');
  let expression = display.value;

  // Replace numbers with a span element to highlight them
  let highlightedExpression = expression.replace(/(\d+)/g, '<span style="color:blue;">$1</span>');

  // Use innerHTML to show highlighted numbers (only works if using a div instead of input)
  document.getElementById('display-container').innerHTML = highlightedExpression;
}

  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/\^/g, '**'); 
        let result = eval(expression); 
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
