 const generateButton = document.querySelector('.btn')
 const CategoryInput = document.querySelector('#Category')
 const RegionInput = document.querySelector('#Region')
 const DifficultyInput = document.querySelector('#Difficulty')
 const questionContainer = document.querySelector('.container')
 const submit_section = document.querySelector('.submit_section')
 const QsubmitButton = document.querySelector('#submit')
 const Qcount = document.querySelector('.Qcount')
 let questionsArray = []
 let questionsHtml = [] 
 let global_Qcount_index = 0
 submit_section.style.display = "none";

 const generateQuestions = async () => {
    try {
        console.log('...loading')
        generateButton.innerHTML += `<img src="assets/images/loader.gif" class="loaderImg" alt="loader-gif">`
        let CategoryValue = CategoryInput.value 
        let RegionValue = RegionInput.value
        let DifficultyValue = DifficultyInput.value
        console.log(CategoryValue , RegionValue , DifficultyValue);
        fetch(`https://the-trivia-api.com/api/questions?categories=${CategoryValue}&limit=10&region=${RegionValue}&difficulty=${DifficultyValue}`)
        .then((response)=>response.json())
        .then((questions)=>{
            questionsArray =[...questions]
            console.log(questionsArray)
            console.log('Done..')
        }).then(()=>{
            questionsHtml = questionsArray.map((element , index)=>{
                let Answers = [element.correctAnswer , ...element.incorrectAnswers]
                Answers = Answers.sort()
                return(
                        `<h1 class="Qindex">${index + 1}</h1>
                        <h1>${element.question}</h1>
                        <div>
                            <h4 style="margin:0%">Answers</h4>
                            <div class = "answers">
                                <div class="answer">
                                <input type="radio" name="a" id="a" value="Egypt">
                                <label for="a:">a) ${Answers[0]}</label>
                                </div>
                                <div class="answer">
                                <input type="radio" name="b" id="b" value="hfh">
                                <label for="b:">b) ${Answers[1]}</label>
                                </div>
                                <div class="answer">
                                <input type="radio" name="c" id="c" value="Egykdjfpt">
                                <label for="c:">c) ${Answers[2]}</label>
                                </div>
                                <div class="answer">
                                <input type="radio" name="d" id="d" value="Egykdjfpt">
                                <label for="d:">d) ${Answers[3]}</label>
                                </div>
                            </div>
                        </div>
                        
                        `
                )
            })
        }).then(()=>{
            questionContainer.innerHTML = questionsHtml[0]
            submit_section.style.display = "";
            Qcount.innerHTML = `${(global_Qcount_index + 1)} / 10`
            
        })

        
    } catch (error) {
        console.log("problem generating the Questions!!")
        console.log(error)
    }
 }

 const questionSubmit = ()=>{
    if(global_Qcount_index > 8){
        console.log("Questions Finished !!")
    }
    else{
        global_Qcount_index++;
        console.log(global_Qcount_index)
        questionContainer.innerHTML = questionsHtml[global_Qcount_index]
        Qcount.innerHTML = `${(global_Qcount_index + 1)} / 10`

    }
    
}
generateButton.addEventListener('click' , generateQuestions);    
QsubmitButton.addEventListener('click' , questionSubmit);

    

