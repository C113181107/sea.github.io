document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    {
      id: "q1",
      question: "哪一個地區的生態有白海豚？",
      options: ["台北市", "花蓮縣", "台中市"],
      answer: "花蓮縣"
    },
    {
      id: "q2",
      question: "下列哪一個海灘位於高雄市？",
      options: ["金山海岸", "旗津海灘", "沙鹿海灘"],
      answer: "旗津海灘"
    },
    {
      id: "q3",
      question: "哪個地區的海灘為『後壁湖』？",
      options: ["屏東縣", "澎湖縣", "金門縣"],
      answer: "屏東縣"
    }
  ];

  const form = document.getElementById('quizForm');
  form.innerHTML = '';  // 先清空，避免重複題目跟按鈕

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

  // 確認有沒有按鈕，沒有才新增
  if (!form.querySelector('button[type="submit"]')) {
    const submitBtn = document.createElement('button');
    submitBtn.textContent = '提交';
    submitBtn.type = 'submit';
    form.appendChild(submitBtn);
  }

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