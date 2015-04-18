
	var inte=0;
	var numaleatorio=0;

	function init()
	{
		inicio();
	}

	function inicio()
	{
		nummax=aleatorio(200, 50);
		console.log(nummax);
		numaleatorio=aleatorio(nummax,1);
		document.getElementById("rangoAdivina").innerHTML="El número está entre 1 y "+" "+nummax;
		console.log(numaleatorio);
		document.getElementById("comprueba").addEventListener("click", comprobar, false);
		document.getElementById("reiniciar").addEventListener("click", reiniciar, false);

	}

	function comprobar(){
		
		if(document.getElementById("adivina").value==numaleatorio)
		{
			document.getElementById("mensaje").innerHTML="Acertaste. El Numero... "+ " "+ numaleatorio;
			inte=0;
			document.getElementById("comprueba").removeEventListener("click", comprobar);
		}else 
			if(document.getElementById("adivina").value=="")
			{
				document.getElementById("mensaje").innerHTML="Ingresa un numero";
			}else
				{
					inte++;
					var valor=numaleatorio-document.getElementById("adivina").value;
					if(valor<0)
					{
						valor*=-1;
					}
					document.getElementById("intentos").innerHTML="Intentos"+" "+inte+" "+"de 20";
					if(valor>=16)
						{
							document.getElementById("mensaje").innerHTML="Frio";
						}else 
							if(valor>5 && valor<=15)
							{
								document.getElementById("mensaje").innerHTML="Templado";
							}else 
								if(valor>=1 && valor<=5)
								{
									document.getElementById("mensaje").innerHTML="Caliente";
								}
				}
				if(inte>=20)
				{
					document.getElementById("mensaje").innerHTML="Has perdido. Vuelve a intentarlo";
					document.getElementById("comprueba").removeEventListener("click", comprobar);
				}
	}

	function reiniciar()
	{
		document.getElementById("comprueba").addEventListener("click", comprobar, false);
		document.getElementById("adivina").value=""
		inte=0;
		inicio();
	}

	function aleatorio(max, min)
	{
		return Math.floor(Math.random()*(min-max)+max);
	}
	window.addEventListener("load", init, false);



			




	