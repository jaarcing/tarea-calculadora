function operacion(tipo){

	numero1 = parseInt(document.getElementById('num1').value);
	numero2 = parseInt(document.getElementById('num2').value);
	total 	=  document.getElementById('total');

	switch (tipo){
		
		case 'sumar':
				if (String(numero2)=="NaN" || (String (numero1) == "NaN") )
				
					{alert("ingrese numeros");
					total.value ="no se puede realizar calculo";
				}
				else
					{
					total.value =numero1+numero2;
					}
				break;
		case 'restar':
				if (String(numero2)=="NaN" || (String (numero1) == "NaN") )
				
					{alert("ingrese numeros");
					total.value ="no se puede realizar calculo";
				}
				else
					{
					total.value =numero1-numero2;
					}
				break;
		case 'multiplicar':
				if (String(numero2)=="NaN" || (String (numero1) == "NaN") )
				
					{alert("ingrese numeros");
					total.value ="no se puede realizar calculo";
				}
				else
					{
					total.value =numero1*numero2;
					}
				break;
		case 'dividir':
		if (String(numero2)=="NaN" || (String (numero1) == "NaN") )
					{alert("ingrese numeros");
					total.value ="no se puede realizar calculo";}
				else
					{
					if (numero2 != 0) {
					total.value =numero1/numero2;
					}
					else{total.value ="numero2 no debe ser cero";}
					}
				break;
		
	}


}






































