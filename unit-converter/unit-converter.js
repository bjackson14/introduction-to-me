const conversionInput = document.getElementById('conversion-input');
const convertBtn = document.getElementById('convert-btn');
const conversionContainer = document.getElementById('conversion-container');
const conversions = [
  { type: 'length', metric: 'meters', imperial: 'feet', conversion: 3.281 },
  { type: 'volume', metric: 'liters', imperial: 'gallons', conversion: 3.785},
  { type: 'mass', metric: 'kilograms', shortMetric: 'kilos', imperial: 'pounds', conversion: 2.205 }
]

convertBtn.addEventListener('click', () => {
  let numberToConvert = conversionInput.value;
  let calculationsHtml = '';

  conversionContainer.innerHTML = '';
  if (numberToConvert) {
    conversions.forEach((conversion) => {
      calculationsHtml += `
        <div class="conversion-value-container">
          <p class="unit-type">${conversion.type.charAt(0).toUpperCase()}${conversion.type.slice(1)} (${conversion.metric.charAt(0).toUpperCase()}${conversion.metric.slice(1)}/${conversion.imperial.charAt(0).toUpperCase()}${conversion.imperial.slice(1)})</p>
          <p class="unit-data">${numberToConvert} ${conversion.shortMetric ? conversion.shortMetric : conversion.metric} = ${(conversion.type === 'volume' ? numberToConvert / conversion.conversion : numberToConvert * conversion.conversion).toFixed(3)} ${conversion.imperial} | ${numberToConvert} ${conversion.imperial} = ${(conversion.type === 'volume' ? numberToConvert * conversion.conversion : numberToConvert / conversion.conversion).toFixed(3)} ${conversion.shortMetric ? conversion.shortMetric : conversion.metric}</p>
        </div>
      `;
    });
    conversionContainer.innerHTML += calculationsHtml;
  }
});