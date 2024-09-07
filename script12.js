var main = document.getElementById("main");
var iframe1 = document.getElementById("iframe1");
var logo = document.getElementById("logo");
var footer = document.getElementById("footer");
var menu = document.getElementById("menu");
var menubtn = document.getElementById("menubtn");
var closex = document.getElementById("closex");
var shop = document.getElementById("shop");
var elements = document.querySelectorAll(".caft");


   
    footer.style.height = window.innerHeight+"px";
    main.style.top = "0px";
    var len = window.innerHeight;
    iframe1.style.height = len+"px";
    //Link değişecek
    shop.onclick = function(){
        window.open("http://127.0.0.1:5500/daryl/products.html", "_blank");
    }


    
    // PC part start
    // Setting size of pictures

    for(var i=0;i<elements.length;i++){
        elements[i].style.height = len+"px"
    }
    menu.style.height = len+"px";

    menubtn.onclick = function(){        
        menu.style.marginLeft = "0px";
    }

    
    var counter = 0;
    var test = true;
    window.onresize = function(){
        len = window.innerHeight;
        footer.style.height = window.innerHeight+"px";
        for(var i=0;i<elements.length;i++){
            elements[i].style.height = len+"px"
        }
    }
    footer.onscroll = function(e){
        console.log(e.target.scrollTop);
        
    }
    closex.onclick = function(){
        menu.style.marginLeft = "-100%";
    }

    window.addEventListener("wheel", event => {
        const delta = Math.sign(event.deltaY);
        //console.info(delta);
        if(test == true){
            test = false;
            if(event.deltaY>0){
                
                if(counter<5){
                    console.log("aşağı");
                    counter++;
                    main.style.marginTop = "-"+counter*len+"px";
                    
                    
                }
                
            }
            else{
                if(counter>0){
                    console.log("yukarı");
                    counter--;    
                    main.style.marginTop = "-"+counter*len+"px";
                    
                    //alert();
                                      
                }
                   
                
                
                
            }
            aa = setTimeout(function(){
                test = true;
              
                // alert();
            }, 200);
            
        }
    });

    //PC part end

    //Phone part start
    var counter2 = 0;
    var test2 = true;
    var test3 = false;
    var locationY;
    var locationY2;
    
    var locationY3;
    var x = "0px";  
    var up = false;
  //  console.log(x);
    document.ontouchstart = function(e){
        up = false;
        test3 = true;
      //  main.style.transition = "0s";
        var touch = e.touches[0] || e.changedTouches[0];
       
        y = touch.pageY;        
        locationY = touch.pageY;        
        x = main.style.top;
        if(x ==""){
            x = "0px"
        }  
        x = x.substring(0,x.length-2)
        x = parseInt(x);
       // console.log(x)
    }
    document.ontouchmove = function(e){
       // console.log(locationY2);
      
        if(test2){
            if(test3){
                var touch = e.touches[0] || e.changedTouches[0];          
                test2 = false;              
                locationY2 = touch.pageY;
                //console.log("1:"+locationY+"2:"+locationY2);
                if(locationY>locationY2+5){
                    //yukarı kaydırmak ve sayfayı aşağı indirmek
                    if(counter2<5){
                    
                        counter2++;
                        main.style.top = "-"+counter2*len+"px";
                       
                        
                    }
                    test3 = false;
                    console.log("yukarı kaydırma");
                }
                else if(locationY2>locationY+5){
                    //aşağı kaydırmak ve sayfayı yukarı çıkarmak
                    if(counter2>0){
                    
                        counter2--;    
                        main.style.top = "-"+counter2*len+"px";;
                       
                    }
                    test3 = false;
                    console.log("aşağı kaydırma");
                }
                ab = setTimeout(function(){
                    test2 = true;
                
                    // alert();
                }, 200);
                }
            
        }
    }
    document.ontouchend = function(e){
        test3 = true;       
    }
    document.ontouchcancel = function(){
        test3 = true;       
    }










