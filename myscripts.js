
function fnconcatok(i){
	i = i.toString();
	return "ok"+i;
}
function fnconcatno(i){
	i = i.toString();
	return "no"+i;
}
function score() {
	var s =18;
	var ch1="";
	var ch2="";
	var i,j;
	for (i = 1; i < 42; i++) {
		ch1 = fnconcatok(i);
		if(document.getElementsByName(ch1)[0].checked){
			s=s+2;
			}
		
	}
	for (j = 1; j < 92; j++) {
		ch2 = fnconcatno(j);
		if(document.getElementsByName(ch2)[0].checked){
			s=s-2;
			}
	}
alert("votre score = "+s); 

}
