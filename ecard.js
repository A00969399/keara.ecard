var hop = document.getElementById("bunny"),
    egg1 = document.getElementById("egg1"),
    bite = document.getElementById("bite"),
    choco = document.getElementById("choco"),
    eggtop = document.getElementById("top"),
    egg2 = document.getElementById("egg2");


//Bunny will pop up

document.getElementById("basket").addEventListener("click", function(){
hop.style.top= "330px"; 
          
});

//Rainbow Appears

var rainb = document.getElementById("rb");
 
document.getElementById("bg").addEventListener("click", function(){
   
rainb.style.top= "100px"; 
          
});

//Tulips will grow
 
document.getElementById("seed").addEventListener("click", function(){
    
 document.getElementById("tulip1").style.opacity = "1";
    
document.getElementById("seed").style.display = "none";    
          
});

 
document.getElementById("seed2").addEventListener("click", function(){
    
 document.getElementById("tulip2").style.opacity = "1";
    
document.getElementById("seed2").style.display = "none";    
          
});

 
document.getElementById("seed3").addEventListener("click", function(){
    
 document.getElementById("tulip3").style.opacity = "1";
    
document.getElementById("seed3").style.display = "none";    
 
});

//Purple Egg will wiggle

egg1.addEventListener("mouseenter", function(){
   egg1.style.animation="wiggle .1s"
egg1.style.animationIterationCount = "10";
;

});

//Take a bite out of chocolate bunny 

choco.addEventListener("click", function(){
   bite.style.display = "none"; 
   choco.style.animation="wiggle .09s";
});

//Chick will hatch when top of egg is clicked

eggtop.addEventListener("click", function(){
    console.log("top");
    eggtop.classList.add("topAnimate");
    eggtop.style.left = "80px";
    eggtop.style.bottom = "45px";
    eggtop.style.opacity = "0";
});

//Pink egg will bounce

egg2.addEventListener("click", function(){
   console.log("egg2");
   egg2.classList.add("egg2");
});

//Fact Bubbles//

var bubble1 = document.getElementById("bubble1")
var bubble2 = document.getElementById("bubble2")
var bubble3 = document.getElementById("bubble3")
var bubble4 = document.getElementById("bubble4")
var bubble5 = document.getElementById("bubble5")
var bubble6 = document.getElementById("bubble6")
var bubble7 = document.getElementById("bubble7")
var bubble8 = document.getElementById("bubble8")

//Click pink egg Appear//
document.getElementById("egg2").addEventListener("click", function(){
    
bubble1.style.opacity = "1";

});
//Click bubble Disappear//
bubble1.addEventListener("click", function(){
bubble1.style.opacity = 0;   
    
});

//Click chocolate bunny Appear//
document.getElementById("choco").addEventListener("click",function(){
    
bubble2.style.opacity = "1";
    
});

//click bubble Disapear
bubble2.addEventListener("click", function (){
bubble2.style.opacity = "0"
    
});

//Click purple egg Appear

document.getElementById("egg1").addEventListener("click", function(){
    
 document.getElementById("bubble3").style.opacity = "1";

});
//Click bubble Disappear

bubble3.addEventListener("click", function(){
bubble3.style.opacity = 0;  
});

//Click bottom red shell Appear

document.getElementById("bottom").addEventListener("click", function(){
    
 document.getElementById("bubble4").style.opacity = "1";

    });
//Click bubble Disappear

bubble4.addEventListener("click", function(){
bubble4.style.opacity = 0;  
});

//Click pink tulip Appear

document.getElementById("tulip1").addEventListener("click", function(){
    
 bubble5.style.opacity = "1";

    });

//Click bubble Disappear

bubble5.addEventListener("click", function(){
bubble5.style.opacity = 0;  
});

//Click red tulip Appear

document.getElementById("tulip2").addEventListener("click", function(){
    
 bubble6.style.opacity = "1";

    });

//Click bubble Disappear

bubble6.addEventListener("click", function(){
bubble6.style.opacity = 0;  
});


//Click orange tulip Appear

document.getElementById("tulip3").addEventListener("click", function(){
    
 bubble7.style.opacity = "1";

    });

//Click bubble Disappear

bubble7.addEventListener("click", function(){
bubble7.style.opacity = 0;  
});

//Page 2: Click Happy Easter to enter

document.getElementById("title").addEventListener("click", function(){
    console.log("title");
document.getElementById("page2").style.zIndex = "100";    
document.getElementById("page2").style.display = "block";
});

//Return Page 1

document.getElementById("barrow").addEventListener("click", function(){
   
document.getElementById("page2").style.display = "none";    
});


// Fact Bubble Page2

var bubble8 =  document.getElementById("bubble8")
var bubble9 = document.getElementById("bubble9")
var bubble10 = document.getElementById("bubble10")

//Click happy Appear
  
document.getElementById("happy").addEventListener("click", function(){
    
bubble8.style.opacity = "1";

    });

//Click bubble Disappear

bubble8.addEventListener("click", function(){
bubble8.style.opacity = 0;  
});

//Click easter Appear
  
document.getElementById("easter").addEventListener("click", function(){
    
bubble9.style.opacity = "1";

    });

//Click bubble Disappear

bubble9.addEventListener("click", function(){
bubble9.style.opacity = 0;  
});

//Click background Appear
  
document.getElementById("bg2").addEventListener("click", function(){
    
    
bubble10.style.opacity = "1";

    });

//Click bubble Disappear

bubble10.addEventListener("click", function(){
    console.log("click")
bubble10.style.display = "none";  
});

//Falling flowers

var dispDiv = document.getElementById("page2");
function make10fall(){
    makefall();
    makefall();
    makefall();
    makefall();
    makefall();
    makefall();
    makefall();
    makefall();
}
function makefall(){
    var flowers = document.createElement("img");
    var mLeft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*50)+20;
    
    flowers.src = "SVG/yellowflower.svg";
    dispDiv.appendChild(flowers);
    flowers.className = "fall";
    flowers.style.left = mLeft+"%";
    flowers.style.height = mdim+"px";
    flowers.style.width = mdim+"px";
 if(mdim > 40){
        flowers.style.transition = "top 10s";
        flowers.style.opacity = "0.9";
    } else if(mdim > 30){
        flowers.style.transition = "top 30s";
        flowers.style.opacity = "0.5";
    } else if(mdim > 20){
        flowers.style.transition = "top 10s";
        flowers.style.opacity = "0.2";
    } else {
        flowers.style.transition = "top 20s";
    }
        
    setTimeout(function(){
        flowers.style.top = "150%";
        
        setTimeout(function(){
        dispDiv.removeChild(flowers);
   }, 4000);
  }, 10);  
  
} document.getElementById("page2").addEventListener("mouseenter", function(){
        makefall();
        setInterval(make10fall, 500);
    });
        
    
  
