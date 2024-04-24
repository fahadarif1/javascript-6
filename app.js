// 1
        // Ek sample list of integers banao
        let numbers = [10, 5, 8, 20, 15];

        // Pehle element ko maximum assume karo
        let max = numbers[0];
        
        // List ke baaki elements ko check karo
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i]
            }
        }
        
        // Maximum element ko print karo
        console.log("Maximum element:", max);
        
        
        // 2
        let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(num);
        let eveNumber = [];
        for(let i= 0; i < num.lenght; i++){
            if (num[i] % 2 === 0) {
                eveNumber.push(num[i]);
            }
        }
        console.log(eveNumber);
        
        
        
        // 3
        const inputString = "Ahmed, Usman, Haider, Ali"
        let reversedString = '';
        
        for (let i = inputString.length -1; i >= 0; i--) {
            reversedString += inputString[i];
        }
        
        console.log(reversedString);
        
        
        
        // 4
        const String = "Hello, how are you?"; // Aap yahaan input string ko change kar sakte hain
        
        let vowelCount = 0;
        
        // Convert the input string to lowercase for case-insensitive counting
        const lowercaseString = String.toLowerCase();
        
        // Iterate through each character in the string
        for (let i = 0; i < lowercaseString.length; i++) {
            // Check if the current character is a vowel (a, e, i, o, u)
            if (lowercaseString[i] === 'a' ||lowercaseString[i]  === 'e' || lowercaseString[i] === 'i' || lowercaseString[i] === 'o' || lowercaseString[i] === 'u') {
                vowelCount++;
            }
        }
        
        console.log(`The number of vowels in the string is: ${vowelCount}`);