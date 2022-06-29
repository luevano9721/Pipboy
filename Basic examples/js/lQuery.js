
class lquery{
    constructor(el){
        
        if(el.indexOf('.')>-1){
            el=el.replace('.','');
            this.elements=document.getElementsByClassName(el);
        }else if(el.indexOf('#')>-1){
            el=el.replace('#','');
            this.elements=[document.getElementById(el)];
        }else{
            this.elements=document;
        }

        
    }


    addClass(cl){
        var count=0;
        while(count<this.elements.length){
            this.elements[count].className+=" "+cl;
            count++;
        }
    }
}

function lQuery(el){
    var element=new lquery(el);
    return element;
}