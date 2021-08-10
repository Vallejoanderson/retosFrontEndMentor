const btn = document.getElementById('checkbox');
btn.addEventListener('change', function(){
	if(btn.checked){
		console.log('True'); //Dark mode
	}
	else{
		console.log('False'); //Light mode
	}
});