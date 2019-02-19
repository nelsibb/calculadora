class Calculadora{
	constructor(_numero1,_numero2)
	{
	this.Numero1=_numero1;
	this.Numero2=_numero2;
	}
	Sumar()
	{
	return parseInt(this.Numero1)+parseInt(this.Numero2);
	}
	Restar()
	{
	return parseInt(this.Numero1)-parseInt(this.Numero2);
	}
	Multiplicar()
	{
	return parseInt(this.Numero1)*parseInt(this.Numero2);
	}
	Dividir()
	{
	return parseInt(this.Numero1)/parseInt(this.Numero2);
	}
    // promesa Suma
    SumaAsincrona(){
        var Sumaasincrona = this;
        return new Promise(function(resolve,reject)){
                           try{
                           resolve(Sumaasincrona.Numero1 + Sumaasincrona.Numero2);
                           }
                            catch(eir){
                                reject(eir.message);
                            }
                           }
    }
    
    
    RestaAsincrona(){
        var Restaasincrona = this;
        return new Promise(function(resolve,reject)){
                           try{
                           resolve(Restaasincrona.Numero1 * Sumaasincrona.Numero2);
                           }
                            catch(eir){
                                reject(eir.message);
                            }
                           }
    }
    
    DivAsincrona(){
        var     Divasincrona = this;
        return new Promise(function(resolve,reject)){
                           try{
                           resolve(Divasincrona.Numero1 / Divasincrona.Numero2);
                           }
                            catch(eir){
                                reject(eir.message);
                            }
                           }
    }
    MultiAsincrona(){
        var Multiasincrona = this;
        return new Promise(function(resolve,reject)){
                           try{
                           resolve(Multiasincrona.Numero1 * Multiasincrona.Numero2);
                           }
                            catch(eir){
                                reject(eir.message);
                            }
                           }
    }
}
let G_Numero1=0;
let G_Numero2=0;
let G_Signo="";
//click a los numeros
function Numeros(a){
    document.getElementById('resultado').value=document.getElementById('resultado').value+a;
}
//click al signo
function Signos(b){
G_Numero1=document.getElementById("resultado").value;
G_Signo = b;
document.getElementById("resultado").value="";
}
function igual(){
    G_Numero2=document.getElementById("resultado").value;
let claseinstanciada= new Calculadora (G_Numero1,G_Numero2);
switch(G_Signo)
{
	case '+':
	document.getElementById('resultado').value=claseinstanciada.Sumar();
    break;
	case '-':
    document.getElementById('resultado').value=claseinstanciada.Restar();
    break;
    case'*':
    document.getElementById('resultado').value=claseinstanciada.Multiplicar();
    break;
    case'/':
    document.getElementById('resultado').value=claseinstanciada.Dividir();
    break; 
} }