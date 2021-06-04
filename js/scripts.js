function outputUpdate(val) {
  document.querySelector('#percentDisplay').value=val;
}

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('#tipped-form').onchange = function(){
  
    const bill = Number(document.getElementById('bill').value);
    const percent = Number(document.getElementById('percent').value);
    const split = Number(document.getElementById('split').value);
    const tip = bill * ((percent/100).toFixed(2));
    const total = (bill + tip).toFixed(2);
    const splitTip = (tip / split).toFixed(2);
    const splitTotal = ((bill + tip) / split).toFixed(2);
    
    document.getElementById('tip').innerHTML = `${'$'} ${tip}`;
    document.getElementById('total').innerHTML = `${'$'} ${total}`;
    document.getElementById('splitTip').innerHTML = `${'$'} ${splitTip}`;
    document.getElementById('splitTotal').innerHTML = `${'$'} ${splitTotal}`;
  }
});

// Show an element
function showResults(elem) {
	elem.classList.add('is-visible');
};

document.addEventListener('click', function (event) {
	if (!event.target.classList.contains('toggle')) return;

  event.preventDefault();

	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// Show the content
	showResults(content);

}, false);