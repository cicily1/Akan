function processFormData(){
    var birthDate = document.getElementById('birthDate').value;
    const male = document.getElementById('maleOption');
    const female = document.getElementById('femaleOption');
    var dayIndex = new Date(birthDate).getDay();

    //This one evaluates for the day of the week based on the day index
    const getDayName = (dayIndex) =>{
	    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	    return days[dayIndex];
    }
    const dayName = getDayName(dayIndex)

    //This code block evaluates for the Male Akan Name based on the dayindex above.
    const getMaleAkanName = (dayIndex)=>{
        const names = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
        return names[dayIndex];
    }
    
    //This code block evaluates for the Female Akan Name based on the dayindex above.
    const getFemaleAkanName = (dayIndex)=>{
        const names = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
        return names[dayIndex];
    }

    //This code block evaluates for the gender based on the gender selected
    if(male.selected){
        var gender = "Male"
        var akanName = getMaleAkanName(dayIndex)

    }else if(female.selected){
        var gender = "Female"
        var akanName = getFemaleAkanName(dayIndex)
    }

    //Display Akan Name
    console.log(akanName)

    

    document.getElementById('displayName').innerHTML ='<div class="alert alert-primary" role="alert"> Congratulations!!!!!! <br><span style="color: red;">Your Akan Name is:'+akanName+'</span> <br> You are '+gender+' <br><span style="color: red;">Born on a '+dayName+'</span> <br> </div>'
}

    
 