function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // converting height to meters
    const bmi = weight / (height * height);
  
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are ${bmiCategory}.`;
  }