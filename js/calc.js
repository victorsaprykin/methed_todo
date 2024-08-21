export const calc = () => {
  const sumBtn = document.getElementById('sum');
  const substractBtn = document.getElementById('substract');
  const multiplyBtn = document.getElementById('multiply');
  const divisionBtn = document.getElementById('division');

  function sum() {
    let numX = document.getElementById('x').value;
    let numY = document.getElementById('y').value;
    numX = parseInt(numX);
    numY = parseInt(numY);
    let result;

    result = numX + numY;
    document.getElementById('result').innerHTML = result;
  }
  
  function substract() {
    let numX = document.getElementById('x').value;
    let numY = document.getElementById('y').value;
    numX = parseInt(numX);
    numY = parseInt(numY);
    let result;

    result = numX - numY;
    document.getElementById('result').innerHTML = result;
  }

  function multiply() {
    let numX = document.getElementById('x').value;
    let numY = document.getElementById('y').value;
    numX = parseInt(numX);
    numY = parseInt(numY);
    let result;

    result = numX * numY;
    document.getElementById('result').innerHTML = result;
  }

  function division() {
    let numX = document.getElementById('x').value;
    let numY = document.getElementById('y').value;
    numX = parseInt(numX);
    numY = parseInt(numY);
    let result;

    result = numX / numY;
    document.getElementById('result').innerHTML = result.toFixed(2);
  }

  sumBtn.addEventListener('click', sum);
  substractBtn.addEventListener('click', substract);
  multiplyBtn.addEventListener('click', multiply);
  divisionBtn.addEventListener('click', division);
};
