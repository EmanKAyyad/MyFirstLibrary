(function ( global ){
    //this library is to create an object with it's method's to create and edit dom element.
    global.bgCounter = 0;
    var availableColors = ['red','green','blue','yellow','black'];
    
    var background = function(color,bgWidth,bgHeight){
      return new BG(color,bgWidth,bgHeight);  
    };
    
    
    var BG = function(color , bgWidth , bgHeight){
        this.color = color || "red";
        this.width = bgWidth || 800;
        this.height = bgHeight || 600;
    };
    
    // methods added to the prototype of the object created for better and faster performance.
    
    BG.prototype = {
        createBG : function(){
            
            var newBG = document.createElement("div");
            newBG.style.width = this.width +"px";
            newBG.style.height = this.height + "px";
            newBG.className = "B$";
            newBG.setAttribute("id", "Bg-background-" + global.bgCounter);
            document.getElementsByTagName("body")[0].appendChild(newBG);
            this.counter = global.bgCounter;
            global.bgCounter++;
            // return this added to return the processed object for further edits.
            
            return this;

        },
        applyColor : function(){
            var self = this;
            if(availableColors.indexOf(this.color) === -1){
                throw "Color not available";
            
            }else{
                document.getElementById("Bg-background-" + self.counter).style.backgroundColor = this.color;
            }
            return this;
        },
        changeColor : function(newColor){
            
            var self = this;
            if(availableColors.indexOf(newColor) === -1){
                throw "Color not available";
            }else{
                setInterval(function(){
                document.getElementById("Bg-background-" + self.counter).style.backgroundColor = newColor;
                },500);
            }
            return this;
        }
    }
    
    
    // to add this method to the global lexical environment.
    global.B$ = background;
}(window));