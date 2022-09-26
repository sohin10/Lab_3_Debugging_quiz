// {<script>}
function quiz() {
	let score = 0;
	let question;
    let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
    ];

	let quiz_answers = [1, 82, 0];

	
	//get total number of questions
	let totalQuestion = quiz_questions.length;
	
	//generate random number for question
	// let = Math.floor(Math.random() * 3);
		
	for (let count = 0; count < totalQuestion; count++) {

   
		question = quiz_questions[count];
		answer = prompt(question);
		if (answer == quiz_answers[count]) {
			score++;
			alert("Correct!");
		} else {
			alert("Wrong");
		}

		// count++;
		// if (count = totalQuestion) {
		// 	count = 0;
        // }
    }


  document.write(`<p>You got ${score} out of ${totalQuestion} questions correct.</p>`);

}
