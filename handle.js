//  function handleQuestion() {
//       const input = document.getElementById("questionInput").value.toLowerCase();
//       const displayElement = document.getElementById("answerDisplay");
//       displayElement.innerHTML = ""; // Clear previous answer

//       // Simple keyword-based matching
//       let found = false;
//       for (const faq of faqData) {
//         const keywords = faq.question.toLowerCase().split(" ");
//         if (keywords.some(word => input.includes(word))) {
//           typeWriterEffect(faq.answer, displayElement);
//           found = true;
//           break;
//         }
//       }

//       if (!found) {
//         typeWriterEffect("Sorry, I don't have an answer to that question.", displayElement);
//       }
//     }

//     function typeWriterEffect(text, element, speed = 50, i = 0) {
//       if (i < text.length) {
//         element.innerHTML += text.charAt(i);
//         setTimeout(() => typeWriterEffect(text, element, speed, i + 1), speed);
//       }
//     }