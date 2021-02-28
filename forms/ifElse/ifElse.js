// defining and assigning values to variables by prompting the user
firstName = prompt('Enter your first name:')
state = prompt('Enter your state (two letter abbreviation):')
temperature = prompt('Enter your temperature in Fahreneit:')

// defining and assigning values to array
messages = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf, or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.', 'I have nothing to report.']

// checking for Nebraska and temperature less than 32; then printing appropriate message
if (state == 'NE' && temperature < 32)
    console.log(`${firstName}, please ${messages[0]}`)
    
// checking for Nebraska and temperture between 32 and 50 (both inclusive); then printing appropriate message
else if (state == 'NE' && temperature >= 32 && temperature <= 50)
    console.log(`${firstName}, please ${messages[1]}`)
    
// checking for Florida and temperture between 32 and 50 (both inclusive); then printing appropriate message    

else if(state == 'FL' &&  temperature >= 32 && temperature <= 50)
    console.log(`${firstName}, please ${messages[2]}`)
    
// checking for Florida and temperture between 50 (exclusive) and 70 (inclusive); then printing appropriate message    
else if(state == 'FL' &&  temperature > 50 && temperature <= 70)
    console.log(`${firstName}, please ${messages[3]}`)
    
// printing default message if none of the above conditions are met
else
    console.log(`${firstName}, ${messages[4]}`)
