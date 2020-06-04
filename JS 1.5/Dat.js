
    var Yearmounthdate = prompt ('Введите дату в формате ДД.ММ.ГГГГ', ''), 
      t = Yearmounthdate.split ('.'),
      Year1 = t [2],
      Month1 = parseInt (t [1]) - 1, 
      Date1 = parseInt (t [0]); 

    if(Month1 == 1 && Date1 > 29) 
    {
        alert ("Ошибка");

    }
    else if(Month1 % 2 == 1 && Date1 > 30) 
    {
        alert ("Ошибка");
    }
    else if(Month1 % 2 == 0 && Date1 > 31)
    {
        alert ("Ошибка");
    }
    else if(Date1 > 31) 
    {
        alert ("Ошибка");
    }
    else 
    {
        alert (Year1 + "-" + (Month1 + 1) + "-" + Date1);
    }
    
    
   
    


