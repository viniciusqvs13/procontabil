/* Calculo dos Planos */
/* By Jorge Wendell */

function range(start, end, step = 1) {
  const len = Math.floor((end - start) / step) //+ 1
  return Array(len).fill().map((_, idx) => start + (idx * step))
}

function calcular() {

var tip = Number(document.getElementById("prsnlzd_tip").value);
var fat = Number(document.getElementById("prsnlzd_fat").value);
var soc = Number(document.getElementById("prsnlzd_soc").value);
var fun = Number(document.getElementById("prsnlzd_fun").value);
var fat2 = range(45000, fat, 5000);
var result = fat2.length*10;

if ((tip == 450) || (tip == 750)){

    if (soc <= 2) {
    	soc = 0;
    }
    else {
    	soc = (soc*15)-30;
    }

    if (fun <= 5) {
    	fun = 0;
    }
    else {
    	fun = (fun*15)-75;
    }

 }else if ((tip == 60) || (tip == 69)){
	 
    soc = 0;
    result = 0;
	
	if (fun <= 1) {
    	fun = 0;
    }
    else {
    	fun = (fun*15)-15;
    }

 }else if (tip == 59){
    soc = 0;
    result = 0;
	
	if (fun >= 1) {
    	fun = 15;
    }
    else {
    	fun = 0
    }
	
 }else if (tip == 58){
    soc = 0;
	fun = 0;
    result = 0;
	
 }else {
    soc = 0;
    fun = 0;
    result = 0;
 }   
    document.getElementById("prsnlzd_calc_valor").textContent = "R$ " + Number(tip + result + soc + fun) + ",00/mês";
}