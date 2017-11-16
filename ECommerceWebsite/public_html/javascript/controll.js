/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){

    var carrinho = 0;
    var nocarrinho = [];   
    var controlebar = 0;
    
    
    
    
    
    /*
     * Aqui nós atualizamos o numero de elementos do carrinho
     */
    
    function AtualizarCarrinho(){
        
        $("#elemento_carrinho").text(carrinho);
        
    }

    /*
     * Aqui nós adicionamos um elemento dentro do carrinho
     */
    
    function AddCarrinho(){
        
        carrinho = carrinho + 1;
        
    }

     /*
     * Aqui nós removemos um elemento dentro do carrinho
     */
    
    function RemCarrinho(){
        
        carrinho = carrinho - 1;
        
    }
    
    /*
     * Aqui nós colocamos o elemento dentro da lista do carrinho 
     */
    
    $(".evento_comprar").click(function() {
       
        AddCarrinho();
        AtualizarCarrinho(); 
       
        var valor = $(".botao").attr("value");
       
        $("#naLista").append("<div class='elementoLista'>" + valor + "</div>");
       
       
    });
    
    /*
     * Aqui nós controlamos o MenuBar que exibe os elementos da lista 
     */
    
    $("#mais").click(function() {
        
       if(controlebar > 1){
           controlebar = 0;
       }
       
       
       if(controlebar === 0){
           
          $("#naLista").hide("slow");  
          $("#mais").text(" - ");
            
       }
       else{
         
         $("#naLista").show("slow");
         $("#mais").text(" + ");
            
       }    
                    
       controlebar++;   
       
       
    });

});

