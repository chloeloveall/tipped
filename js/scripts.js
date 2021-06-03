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
    const splitTotal = ((bill + tip) / split).toFixed(2);

    document.getElementById('tip').innerHTML = `Tip: ${'$'} ${tip}`;
    document.getElementById('total').innerHTML = `Total: ${'$'} ${total}`;
    if (split > 1) {
      document.getElementById('splitTotal').innerHTML = `${'$'} ${splitTotal} each`;
    }
  }
});