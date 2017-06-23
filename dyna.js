function sleep(milliseconds) {
  var start = new Date().getTime();
  console.log("pap");
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function colorChange(){
	document.getElementById("png").style.background-color="red";
	var red = [255,255,253,204];
	var green=[105,64,95,204];
	var blue=[180,64,0,0];
	var rd,gn,bl;
	var i=1,j=0;
	var k=i+1;
	while(false){
		i=i%4;
		k=k%4;
		j=0;
		while(j<100)
		{
			rd=red[i]*(100-j)/100+(red[k]*j)/100;
			gn=green[i]*(100-j)/100+(green[k]*j)/100;
			bl=blue[i]*(100-j)/100+(blue[k]*j)/100;
			document.getElementById("myform2").style.background-color="rgb(rd,gn,bl)";
			document.getElementById("male").style.background-color="rgb(rd,gn,bl)";
			j=j+1;
		}
		sleep(1000);
		i=i+1;
		k=k+1;
	}
}
document.getElementById("myform2").innerHTML="colorChange()";