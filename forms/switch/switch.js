// defining and assigning values to variables by prompting the user
firstName = prompt('Enter your first name:')
state = prompt('Enter your state (two letter abbreviation):')
temperature = prompt('Enter your temperature in Fahreneit:')

// defining and assigning values to array
messages2 = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf, or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.', 'I have nothing to report.']

// starting switch
switch(true)
{

// checking for Nebraska and temperature less than 32; then printing appropriate message
    case state == 'NE' && temperature < 32:
        console.log(`${firstName}, please ${messages2[0]}`)
        break
        
// checking for Nebraska and temperture between 32 and 50 (both inclusive); then printing appropriate message
    case state == 'NE' && temperature >= 32 && temperature <= 50:
        console.log(`${firstName}, please ${messages2[1]}`)
        break

// checking for Florida and temperture between 32 and 50 (both inclusive); then printing appropriate message    
    case state == 'FL' && temperature >= 32 && temperature <= 50:
        console.log(`${firstName}, please ${messages2[2]}`)
        break
        
// checking for Florida and temperture between 50 (exclusive) and 70 (inclusive); then printing appropriate message    
    case state == 'FL' && temperature > 50 && temperature <= 70:
        console.log(`${firstName}, please ${messages2[3]}`)
        break

// printing default message if none of the above conditions are met
    default:
        console.log(`${firstName}, ${messages2[4]}`)
        break
}