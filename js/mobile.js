window.addEventListener("load",func);


function func(){
    
    if (screen.width< 800){
        document.getElementById("main").style.height=window.innerHeight +100+ "px";
        
        var texty = document.getElementsByClassName("intro");
        for (a=0;a<texty.length;a++){
        texty[a].style.fontSize="25px";
        }
        
    try{ 
        var fotkakucker = document.getElementById("kucker");
        fotkakucker.style.height="300px";
        
        var fotkasoukup = document.getElementById("soukup");
        fotkasoukup.style.height="300px";
        
        var A = document.getElementsByClassName("A");
        A[0].style.fontSize="200px";
        
        var B = document.getElementsByClassName("B");
        B[0].style.fontSize="200px";
        
        var vs = document.getElementById("vs");
        vs.style.fontSize="50px";
        vs.style.marginTop="5%";
        
    }
    catch(Exception){
    }
    
    try{
        var album = document.getElementsByClassName("album");
        album[0].style.margin="auto";
        album[0].style.top="-5%";
        album[0].style.width="70%";
        
        var card = document.getElementsByClassName("card");
         for (a=0;a<card.length;a++){
       card[a].style.margin="10px";  
        }
        
        
       var fotkytablo = document.getElementsByClassName("fotka-tablo");
       for (a=0;a<fotkytablo.length;a++){
        fotkytablo[a].style.height="40px";
        }
        
        var sipka = document.getElementsByClassName("sipka");
        sipka[0].style.top="-15%";
      
        var prvni= document.getElementById("first-row");
        prvni.style.position="relative";
        prvni.style.left="-5%";
        
        
        var rada = document.getElementsByClassName("row");
        for (a=0;a<rada.length;a++){
        rada[a].style.margin="0";
        rada[a].style.width="500px";
        }
        
    }
    catch(Exception){
        
    }
      try{
           document.getElementById("main").style.height=window.innerHeight +200+ "px";
          var hlavni=document.getElementsByClassName("right-text");
          hlavni[0].style.fontSize="15px";
          hlavni[0].style.height="350px";    
          
          var nadpis=document.getElementsByClassName("nadpis-ability");
          for (a=0;a<nadpis.length;a++){
        nadpis[a].style.fontSize="20px";
        }
        
        var hexagon=document.getElementsByClassName("hexagon");
        for (a=0;a<hexagon.length;a++){
        hexagon[a].style.height="30px";
        }
        
        var ulti=document.getElementsByClassName("ultimate-text");
        ulti[0].style.marginLeft="15%";
      
      
        var fotka=document.getElementsByClassName("profil-foto");
        fotka[0].style.height="300px";
        
      }    
      catch(Exception){
          
      }
}
if (window.innerHeight<740 && screen.width>800)
{ document.getElementById("main").style.height="780px";}
}

