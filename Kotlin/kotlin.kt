/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

fun main() {
    var soma:Int = soma(8,30)
println("Valor somado é $soma")

val pessoa:Person = Person("Frankão",24)
val pessoa2:Person = Person("Frankin",29)
println("${pessoa.name} , idade ${pessoa.age}")
println("${pessoa2.name} , idade ${pessoa2.age}")

val booleana = Square(10,11)
println(booleana.isQuare)

val esQuare = Square(20,20)
println(esQuare.isQuares())

val rgbValue = Color.RED.rgb()
println("valor rgb vermelho: $rgbValue ")


val mnemonica = getMnemonica(Color.ORANGE)
println(mnemonica)

val temp = getTemperatures(Color.BLUE)
println(temp)

//testar cast ((1+1)+4)
	val result = avaliacao(Summed(Summed(Numbered(1),Numbered(1)),Numbered(4)))
    println("Valor do cast é $result")

//teste cast com ramificação ((8+8)+3)-15)
	val resultB = avaliacaoRamificada(Summed(Summed(Summed(Numbered(8),Numbered(8)),Numbered(3)),Numbered(-15))) 
    println("Valor do cast Ramificado é $resultB")
    
    
    //for e while
    var temperatura:Int = 0
	var somatorio:Int = 0
    var quantidade:Int = 0
    
    while (temperatura != -1000){
        println("Digite uma temp ou -1000")
        temperatura = readLine()!!.toInt()
        
        if(temperatura != -1000){
            somatorio += temperatura
            quantidade ++
        }
        
        println("Temperatura $temp")
        println("Somatorio $somatorio")
    }


}

fun max(a:Int,b:Int):Int{
    return if(a > b) a else b
}

fun max1(a:Int,b:Int):Int = if(a > b) a else b

//string template
	fun soma(a:Int,b:Int):Int{
        return a+b
    }
    
    //classe com get e set
    class Person(
    	val name:String,
        val age:Int
    )
    
    
//acessores customizados 
class Square(val height : Int, val width : Int){
    val isQuare get() = height == width
    
    fun isQuares() :Boolean{
        return height == width
    }
}

//enums
 enum class Color(val red:Int, val green:Int,val blue:Int){
     RED(255,0,0),
     ORANGE(255,165,0),
     YELLOW(255,255,0),
     GREEN(0,255,0),
     BLUE(0,0,255);
     
     fun rgb() = ((red * 256 + green)*256+blue)
 }   
 
 //when
 fun getMnemonica(color:Color) = 
    when(color){
        Color.RED -> "Red"
        Color.ORANGE -> "Orange"
        Color.YELLOW -> "Yellow"
        Color.BLUE -> "Blue"
        Color.GREEN -> "Green"
    }
    
    //multiples when
 fun getTemperatures(color:Color):String{
     return when(color){
         Color.ORANGE,Color.RED,Color.YELLOW -> "Hot colors"
         Color.GREEN -> "Neutral color"
         Color.BLUE -> "Cold Color"
     }
 }
 
 //smartCasts
 interface Expression 
 class Numbered(val value:Int) :Expression
 class Summed(val left :Expression,val right:Expression):Expression
 
	//função que avalia o tipo de parametro passado para cast
	fun avaliacao(expression:Expression):Int{
        //caso seja um numero
        if(expression is Numbered){
            return expression.value
        }
        
        //caso seja a operação de soma
        if(expression is Summed){
            return avaliacao(expression.left)+avaliacao(expression.right)
        }
        
        //tratamento de erros
        throw IllegalArgumentException("Unknowed expression")
        
        
    }
 
 //
 
//blocos como ramificações
	fun avaliacaoRamificada(expression: Expression):Int = 
    	when(expression){
            is Numbered -> expression.value
            is Summed -> avaliacaoRamificada(expression.left)+ avaliacaoRamificada(expression.right)
            else -> throw IllegalArgumentException("Unknowed expression")
        }
 
 
 
 
 