function prime()
{
    let number = document.getElementById("input").value //sets number to input

    let f1 = 2; //first prime number
    let counter = 0; //counter varible for max num in row
    let counter2 = 2; //counter varaiable that checks if number is prime
    let maxColumn = 10; //max num in row

    let blank = '&nbsp';

    if(maxColumn > number) //sets colum number to number if less than 10
    {
        maxColumn = number;
    }

    let output = '<table>' + //start of table
                    '<tr>';
    for(let i = 0; i <= maxColumn; i++) //top heading row
    {
       if(i == 0)
        {
            output += '<th>'+ blank +'</th>';
        }
        else
        {
            output += '<th>'+ i + '</th>';
        }
        
    }
    output += '</tr>';
    output += '<tr>';
    
    for(let i = 0; i <= number; i++) // checks if number is prime
    {
        if(i == 0 || (i % 11) == 0)
        {
            if(i % i == 0 && i > 0)
            {
                output += '</tr>' + '<tr>';
            
            }
            output += '<th>'+ counter + '</th>';
            counter += 10;
            if(i > 1)
            {
                number++;
            }
        }
        else
        {
            for(let j = f1 - 1; j > 1; j--)
            {
                if(f1 % j != 0)
                {
                    counter2++;
                }
                
                
            }
            if(f1 == counter2)
                {
                    output += '<td>'+ f1 + '</td>';
                   
                }
                if(f1 != counter2)
                {
                    i--;
                }
                f1++;
                
                
        }
        
        counter2 = 2;

    }


        output += '</tr>' +
                '</table>';
    
       


        document.getElementById('output').innerHTML += output; //output
}

function elapsedTime() //function that checks for elapsed time
{
    let startTime = performance.now();
    prime();
    let endTime = performance.now();
    let timeDiff = endTime - startTime;
    timeDiff += "ms";
    document.getElementById('seconds').innerHTML += timeDiff;
}