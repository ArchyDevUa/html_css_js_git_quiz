import React,{useState} from 'react';
import './App.css';

function App() {

  let [showFinalResult,setFinalResult] = useState(false);
  const [score,setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      "text": "Какая разница между тегами <span> и <div> ?",
      "options": [
      { "id": 0, "text": "<span> — это строчный (inline) элемент, <div> — это блочный (block) элемент.", "isCorrect": true },
      { "id": 1, "text": "<div> — это строчный (inline) элемент, <span> — это блочный (block) элемент.", "isCorrect": false },
      { "id": 2, "text": "Нет никакой разницы", "isCorrect": false }
    ]
    },
    {
      "text": "Для чего нужен тег <li> ?",
      "options": [
      { "id": 0, "text": "Сделать текст жирным", "isCorrect": false },
      { "id": 1, "text": "Сделать текст подчёркнутым", "isCorrect": false },
      { "id": 2, "text": "Поднять текст к верхнему регистру", "isCorrect": false },
      { "id": 2, "text": "Создать элемент списка", "isCorrect": true }
    ]
    },
    {
      "text": "Какой из тегов являеться семантическим ?",
      "options": [
      { "id": 0, "text": "<img>", "isCorrect": false },
      { "id": 1, "text": "<aside>", "isCorrect": true },
      { "id": 2, "text": "<button>", "isCorrect": false },
      { "id": 2, "text": "<table>", "isCorrect": false }
    ]
    },
    {
      "text": "Выберите псевдокласс который срабатывает при наведении на блок",
      "options": [
      { "id": 0, "text": ":not()", "isCorrect": false },
      { "id": 1, "text": ":focus", "isCorrect": false },
      { "id": 2, "text": ":hover", "isCorrect": true },
      { "id": 2, "text": ":active", "isCorrect": false }
    ]
    },
    {
      "text": "Какая строка выровняет блок по центру (по горизонтале) относительно родителя ?",
      "options": [
      { "id": 0, "text": "box-sizing:border-box;", "isCorrect": false },
      { "id": 1, "text": "overflow:hidden;", "isCorrect": false },
      { "id": 2, "text": "!important;", "isCorrect": false },
      { "id": 2, "text": "margin: 0 auto;", "isCorrect": true }
    ]
    },
    {
      "text": "Какая команда в git используется для выгрузки содержимого локального репозитория в удаленный репозиторий",
      "options": [
      { "id": 0, "text": "git add", "isCorrect": false },
      { "id": 1, "text": "git clone", "isCorrect": false },
      { "id": 2, "text": "git push", "isCorrect": true },
      { "id": 2, "text": "git commit", "isCorrect": false }
    ]
    },
    {
      "text": "Какая команда в git используется для перехода в другую ветку",
      "options": [
      { "id": 0, "text": "git checkout", "isCorrect": true },
      { "id": 1, "text": "git clone", "isCorrect": false },
      { "id": 2, "text": "git branch", "isCorrect": false },
      { "id": 2, "text": "git push", "isCorrect": false }
    ]
    },
    {
      "text": "С помощью какого оператора можно произвести конкантинацию между двумя строками в js",
      "options": [
      { "id": 0, "text": "*", "isCorrect": false },
      { "id": 1, "text": "-", "isCorrect": false },
      { "id": 2, "text": "+", "isCorrect": true },
      { "id": 2, "text": "/", "isCorrect": false }
    ]
    },
    {
      "text": "Какой метод из ниже перечисленных превратит строку в массив букв.",
      "options": [
      { "id": 0, "text": ".split('')", "isCorrect": true },
      { "id": 1, "text": ".join('')", "isCorrect": false },
      { "id": 2, "text": ".reverse()", "isCorrect": false },
      { "id": 2, "text": ".find()", "isCorrect": false }
    ]
    },
    {
      "text": "Каким способом мы можем проверить переменную 'variable' на то являетьсяли она массивом или нет?",
      "options": [
      { "id": 0, "text": "variable === 'array'", "isCorrect": false },
      { "id": 1, "text": "typeof(variable) === 'array'", "isCorrect": false },
      { "id": 2, "text": "Array(varibale)", "isCorrect": false },
      { "id": 2, "text": "Arrau.isArray(variable)", "isCorrect": true }
    ]
    },
    {
      "text": "Необходимо от слова отрезать первую и последнюю букву и вернуть то что останеться, выбирите правельный вариант",
      "options": [
      { "id": 0, "text": "'hello'.splice(1,-1)", "isCorrect": false },
      { "id": 1, "text": "'hello'.slice(1,-1)", "isCorrect": true },
      { "id": 2, "text": "'hello'.replace(1,-1)", "isCorrect": false },
      { "id": 2, "text": "'hello'.indexOf(1,-1)", "isCorrect": false }
    ]
    },
    {
      "text": "Какой метода добавляет новое значение в начало массива?",
      "options": [
      { "id": 0, "text": ".push()", "isCorrect": false },
      { "id": 1, "text": ".pop()", "isCorrect": false },
      { "id": 2, "text": ".shift()", "isCorrect": false },
      { "id": 2, "text": ".unshift()", "isCorrect": true }
    ]
    },
    {
      "text": "Какой метод перебирает все значения массива,модифицирует эти значения и возвращает новый массив",
      "options": [
      { "id": 0, "text": ".filter()", "isCorrect": false },
      { "id": 1, "text": ".map()", "isCorrect": true },
      { "id": 2, "text": ".reduce()", "isCorrect": false },
      { "id": 2, "text": ".reverse()", "isCorrect": false }
    ]
    },
    {
      "text": "В чем отличие между локальной и глобальной переменной?",
      "options": [
      { "id": 0, "text": "Отличий нет", "isCorrect": false },
      { "id": 1, "text": "Локальные видны повсюду, глобальные только в функциях", "isCorrect": false },
      { "id": 2, "text": "Глобальные можно переопределять, локальные нельзя", "isCorrect": false },
      { "id": 2, "text": "Глобальные видны повсюду, локальные только в функциях", "isCorrect": true }
    ]
    },
    {
      "text": "Где верно указан вывод данных?",
      "options": [
      { "id": 0, "text": "write('Hello');", "isCorrect": false },
      { "id": 1, "text": "console.log('Hello');", "isCorrect": true },
      { "id": 2, "text": "print(Hello);", "isCorrect": false },
      { "id": 2, "text": "documentWrite('Hello');", "isCorrect": false }
    ]
    },
    {
      "text": "Чему равна переменная name, let name = 'книга'.replace('н', 'р')",
      "options": [
      { "id": 0, "text": "книга", "isCorrect": false },
      { "id": 1, "text": "крига", "isCorrect": true },
      { "id": 2, "text": "книга-крига", "isCorrect": false },
      { "id": 2, "text": "рига", "isCorrect": false }
    ]
    }
  ];


  function optionClick(isCorrect){
    if(isCorrect){
      setScore(score + 1)
    }
    if(currentQuestion +1 < questions.length){
      setCurrentQuestion(currentQuestion +1)
    }else{
      setFinalResult(true)
    }
    
  }

  function restartGame(){
    setCurrentQuestion(0)
    setScore(0)
    setFinalResult(false)
  }

  return (
    <div className="App">
      <h1>Тест по программированию</h1>
      <h2>Количество очков : {score}</h2>

      {showFinalResult ? ( 
        <div className='final-results'>
          <h1>Финальный результат</h1>
          <h2>
            {score} из {questions.length} правильно - ({(score/questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Начать игру заново</button>
        </div>):
        (
          <div className="question-card">
          <h2>Вопрос {currentQuestion + 1} из {questions.length}</h2>
          <h3>{questions[currentQuestion].text }</h3>
  
          <ul>
           {questions[currentQuestion].options.map((option) => {
            return(
              <li onClick={() => optionClick(option.isCorrect)} key={option.id}>{option.text}</li>
            )
           })}
          </ul>
        </div>
        )}
     
     
    </div>
  );
}

export default App;
