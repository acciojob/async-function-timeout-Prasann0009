 async function delayAndDisplay() {
        const textInput = document.getElementById('text').value;
        const delayInput = document.getElementById('delay').value;

        // if (!textInput || !delayInput) {
        //     alert('Please enter text and delay');
        //     return;
        // }

        const delayInSeconds = parseInt(delayInput, 10);

        try {
            // Use the setTimeout function wrapped in a Promise to create a delay
            await new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));
            
            // Display the text after the delay
            document.getElementById('output').innerText = textInput;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    document.getElementById('btn').addEventListener('click', delayAndDisplay);