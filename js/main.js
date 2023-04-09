 const generateButton = document.querySelector('.btn')
 const questionsArray = []
 const generateQuestions = async () => {
    try {
        console.log('...loading')
        fetch('https://the-trivia-api.com/api/questions?categories=history')
        .then((response)=>response.json())
        .then((questions)=>{
            questionsArray =[...questions]
            console.log(questionsArray)
            console.log('Done..')
        })
        
    } catch (error) {
        console.log("problem generating the Questions!!")
        console.log(error)
    }
 }
 generateButton.addEventListener('click' , generateQuestions);
 