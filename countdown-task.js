var i = 11;
setTimeout(function(){
    document.getElementById("callback-hell").innerHTML="The Countdown Starts now";
    setTimeout(function(){
        i--;
        document.getElementById("callback-hell").innerHTML=i;
        setTimeout(function(){
            i--;
            document.getElementById("callback-hell").innerHTML=i;
            setTimeout(function(){
                i--;
                document.getElementById("callback-hell").innerHTML=i;
                setTimeout(function(){
                    i--;
                    document.getElementById("callback-hell").innerHTML=i;
                    setTimeout(function(){
                        i--;
                        document.getElementById("callback-hell").innerHTML=i;
                        setTimeout(function(){
                            i--;
                            document.getElementById("callback-hell").innerHTML=i;
                            setTimeout(function(){
                                i--;
                                document.getElementById("callback-hell").innerHTML=i;
                                setTimeout(function(){
                                    i--;
                                    document.getElementById("callback-hell").innerHTML=i;
                                    setTimeout(function(){
                                        i--;
                                        document.getElementById("callback-hell").innerHTML=i;
                                        setTimeout(function(){
                                            i--;
                                            document.getElementById("callback-hell").innerHTML="HAPPY INDEPENDENCE DAY";
                                            setTimeout(function(){
                                                i--;
                                            },1200);
                                        },1200);
                                    },1200);
                                },1200);
                            },1200);
                        },1200);
                    },1200);
                },1200);
            },1200);
                                           
            
            
        },1200);
    },1200);
    
}, 1000);