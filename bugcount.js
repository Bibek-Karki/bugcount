var xposition = 1;
var yposition = 1;
    
var div = new Array();
var Xposition = new Array();
var Yposition = new Array();
window.onload = createDiv();

   
function createDiv() {
       
    for (i=1; i<12; i++){
        
        var div1 = document.createElement("div");
        div1.setAttribute('id', 'div_id' + i );
                            
                        
        div1.style = "position:absolute;  top:" + X + "px; left:" + Y + "px;";
        var X =  Math.floor((Math.random() * 840)+ 1) ;
        var Y =  Math.floor((Math.random() * 490)+ 1);
    
                              
                                
        const maindiv = document.getElementById("box");
        maindiv.append(div1);              
                              
        var ladybird = document.createElement('img');
        ladybird.src = "Bug.png";
        ladybird.setAttribute("style", "width:60px; height:60px;");
        div1.appendChild(ladybird);
        div1.addEventListener('click', function() {
            deletedivs(div1);
        });
        Movement(0.2, 0.2, X, Y, div1, i);
                   
    }    
}
function deletedivs(div2) {
                         
    const del = div2.parentElement;
    del.removeChild(div2);
                      
                      
}
    
function Movement(xposition, yposition, X, Y, div3, index){
    count = 0;
    div3.onclick = function(){  
        count ++;
        document.querySelector(".para").innerHTML = "Total Flies Killed = " + count;              
        deletedivs(div3);
    }
        
    setInterval(() => {
        X += xposition;
        div3.style.left = X + "px";
    
        Y += yposition;
        div3.style.top = Y + "px";
            
    
        if(X > 450 || X < 10){
            xposition = xposition * -1;
        }
        if (Y > 450 || Y < 10) {
            yposition = yposition * -1;
        }
        Xposition[index] = X;
        Yposition[index] = Y;
    
        for (var i = 0; i < 6; i++) {
    
            if (!(i === index)) {
                if ((Xposition[i] < X + 50) && (Xposition[i] + 50 > X) && (Yposition[i] < Y + 50) && (Yposition[i] + 50 > Y)) {
                    xposition = xposition * -1;
                    yposition = yposition * -1;
                }
            }
        }
    }, 10);
    
    
}
