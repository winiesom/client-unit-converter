
const apiUrl = process.env.API_URL;
console.log(apiUrl);

async function convert() {
  const form = document.getElementById('converterForm');
  const resultDiv = document.getElementById('result');
  
  const value = form.querySelector('#value').value;
  const conversionType = form.querySelector('#conversionType').value;
  
  const formData = { value, conversionType };
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  const data = await response.json();
  
  resultDiv.innerHTML = `Result: ${data.result}`;
}
