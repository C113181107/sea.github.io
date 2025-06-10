fetch('questions.json')
  .then(response => response.json())
  .then(questions => {
    const form = document.getElementById('quizForm');

    questions.forEach(q => {
      const div = document.createElement('div');
      div.innerHTML = `<p><strong>${q.question}</strong></p>`;
      
      q.options.forEach(opt => {
        div.innerHTML += `
          <label>
            <input type="radio" name="${q.id}" value="${opt}" required> ${opt}
          </label><br>`;
      });

      form.appendChild(div);
    });

    const submitBtn = document.createElement('button');
    submitBtn.textContent = '提交';
    submitBtn.type = 'submit';
    form.appendChild(submitBtn);

    form.addEventListener('submit', e => {
      e.preventDefault();
      let score = 0;

      questions.forEach(q => {
        const selected = form.elements[q.id].value;
        if (selected === q.answer) {
          score++;
        }
      });

      document.getElementById('result').innerHTML =
        `<h2>你的得分是：${score} / ${questions.length}</h2>`;
    });
  });