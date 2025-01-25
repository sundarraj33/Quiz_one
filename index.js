    var counts = 0;
    var marks = 0;
                            
    document.querySelector("#next").disabled = true;
    document.querySelector("#next").style.cursor = 'no-drop';
    document.querySelector("#qtn_count").innerText = counts+1  +"/"+ quetions.length;
    var notification = document.querySelector(".notification");
    
    function start(counts){
        
        document.querySelector('.title').innerText = quetions[counts].question;
    
        document.querySelector('.option1').innerText = quetions[counts].option1;
        document.querySelector('.option2').innerText = quetions[counts].option2;
        document.querySelector('.option3').innerText = quetions[counts].option3;
        document.querySelector('.option4').innerText = quetions[counts].option4;
        
        document.querySelector('.option1val').value = quetions[counts].option1;
        document.querySelector('.option2val').value = quetions[counts].option2;
        document.querySelector('.option3val').value = quetions[counts].option3;
        document.querySelector('.option4val').value = quetions[counts].option4;
    }
    
    
    
    function sub(){
        var option1valchecked = document.querySelectorAll(".option:checked");
        var getans = option1valchecked[0];
        
        if(getans == undefined){
            notification.innerText = "Please Select value";
            notification.style.color = "red";
        }
        
        
        markresult(getans);
        
        document.querySelector("#next").disabled = false;
        document.querySelector("#next").style.cursor = 'pointer';
        document.querySelector("#submit").disabled = true;
        document.querySelector("#submit").style.cursor = 'no-drop';
        var check = document.querySelectorAll(".options_field");
        
    }
    
    
    function next(){
        var options_field = document.querySelectorAll(".options_field");
        counts++;
        document.querySelector("#qtn_count").innerText =counts+1 +"/"+ quetions.length; 
        var options_field1 = document.querySelectorAll(".option");
        for(var i=0;i<options_field1.length;i++){
            options_field1[i].checked = false;
        }
        
        
        
        
        if(quetions.length-1 < counts){
            document.querySelector(".box1").style.display = 'none';
            document.querySelector(".results").style.display = 'block';
            document.querySelector(".scores").innerText = marks;
        }else{
            start(counts);
        }
        document.querySelector("#next").disabled = true;
        document.querySelector("#next").style.cursor = 'no-drop';
        document.querySelector("#submit").disabled = false;
        document.querySelector("#submit").style.cursor = 'pointer';
        document.querySelector(".options_field").style.cursor = 'pointer';
            document.querySelector(".notification").innerText = '';
    }
    
    
    function markresult(getans){
        var score = document.querySelector(".score");
        var answer = quetions[counts].answers;
        var notification = document.querySelector(".notification");
        if(getans.value == answer){
            notification.innerHTML = `<p class='success' style='color:green'>Correct</p>`;
            marks = marks+10; 
        }else{
            notification.innerHTML = `<p class='faill' style='color:red'>Wrong.. Correct Answer is <span style='color:black'>${answer}</span></p>`;
        }
        score.innerText = marks;
    }
    start(counts);
           
           