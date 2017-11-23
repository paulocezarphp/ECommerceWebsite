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
    
    
    
    $(".caixa_imagem").click(function() {
        $("#fundo-cor").fadeIn(500); 
        $("#imagem-cor").fadeIn(500);
        $("#botao-cor").fadeIn(500);
    });
    
    $("#botao-cor").click(function() {
        $("#fundo-cor").fadeOut(500); 
        $("#imagem-cor").fadeOut(500);
        $("#botao-cor").fadeOut(500);
    });
    
    $("#fundo-cor").click(function() {
        $("#fundo-cor").fadeOut(500); 
        $("#imagem-cor").fadeOut(500);
        $("#botao-cor").fadeOut(500);
    });
    
    
    /*
     * Aqui nós colocamos o elemento dentro da lista do carrinho 
     */
    
    $("#v1").click(function() {
       
       var produto = "Camisa Niker v1";
       var preco = 134.99;            
       AddCarrinho();
       AtualizarCarrinho(); 
       $("#naLista").append("<div class='elementoLista'>" + produto + " <br> <strong>R$:</strong> " + preco + "</div>");   
            
    });
    
    $("#v2").click(function() {
       
       var produto2 = "Camisa Niker v2";
       var preco2 = 234.99;            
       AddCarrinho();
       AtualizarCarrinho(); 
       $("#naLista").append("<div class='elementoLista'>" + produto2 + " <br> <strong>R$:</strong> " + preco2 + "</div>");   
            
    });
    
    $("#v3").click(function() {
       
       var produto3 = "Camisa Niker v3";
       var preco3 = 77.99;            
       AddCarrinho();
       AtualizarCarrinho(); 
       $("#naLista").append("<div class='elementoLista'>" + produto3 + " <br> <strong>R$:</strong> " + preco3 + "</div>");   
            
    });
    
    $("#v4").click(function() {
       
       var produto4 = "Camisa Niker v4";
       var preco4 = 422.99;            
       AddCarrinho();
       AtualizarCarrinho(); 
       $("#naLista").append("<div class='elementoLista'>" + produto4 + " <br> <strong>R$:</strong> " + preco4 + "</div>");   
            
    });
    
    $("#v5").click(function() {
       
       var produto5 = "Camisa Niker v5";
       var preco5 = 34.99;            
       AddCarrinho();
       AtualizarCarrinho(); 
       $("#naLista").append("<div class='elementoLista'>" + produto5 + " <br> <strong>R$:</strong> " + preco5 + "</div>");   
            
    });
    
    $("#v6").click(function() {
       
       var produto6 = "Camisa Niker v6";
       var preco6 = 23.23;            
       AddCarrinho();
       AtualizarCarrinho(); 
       $("#naLista").append("<div class='elementoLista'>" + produto6 + " <br> <strong>R$:</strong> " + preco6 + "</div>");   
            
    });
    
    $("#v7").click(function() {
       
       var produto7 = "Camisa Niker v7";
       var preco7 = 42.23;            
       AddCarrinho();
       AtualizarCarrinho(); 
       $("#naLista").append("<div class='elementoLista'>" + produto7 + " <br> <strong>R$:</strong> " + preco7 + "</div>");   
            
    });
    
    $("#v8").click(function() {
       
       var produto8 = "Camisa Niker v8";
       var preco8 = 13.99;            
       AddCarrinho();
       AtualizarCarrinho(); 
       $("#naLista").append("<div class='elementoLista'>" + produto8 + " <br> <strong>R$:</strong> " + preco8 + "</div>");   
            
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
          $("#mais").text(" + ");
            
       }
       else{
         
         $("#naLista").show("slow");
         $("#mais").text(" - ");
            
       }    
                    
       controlebar++;   
       
       
    });

});

