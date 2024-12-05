const words = [
    { word: "One", translation: "Один", transcription: "[wʌn]" },
    { word: "Two", translation: "Два", transcription: "[tuː]" },
    { word: "Three", translation: "Три", transcription: "[θriː]" },
    { word: "Four", translation: "Четыре", transcription: "[fɔːr]" },
    { word: "Five", translation: "Пять", transcription: "[faɪv]" },
    { word: "Six", translation: "Шесть", transcription: "[sɪks]" },
    { word: "Seven", translation: "Семь", transcription: "[ˈsɛv.ən]" },
    { word: "Eight", translation: "Восемь", transcription: "[eɪt]" },
    { word: "Nine", translation: "Девять", transcription: "[naɪn]" },
    { word: "Ten", translation: "Десять", transcription: "[tɛn]" },
    { word: "Eleven", translation: "Одиннадцать", transcription: "[ɪˈlɛv.ən]" },
    { word: "Twelve", translation: "Двенадцать", transcription: "[twɛlv]" },
    { word: "Thirteen", translation: "Тринадцать", transcription: "[θɜːrˈtiːn]" },
    { word: "Fourteen", translation: "Четырнадцать", transcription: "[fɔːrˈtiːn]" },
    { word: "Fifteen", translation: "Пятнадцать", transcription: "[ˈfɪf.tiːn]" },
    { word: "Sixteen", translation: "Шестнадцать", transcription: "[sɪksˈtiːn]" },
    { word: "Seventeen", translation: "Семнадцать", transcription: "[ˈsɛv.ənˌtiːn]" },
    { word: "Eighteen", translation: "Восемнадцать", transcription: "[eɪˈtiːn]" },
    { word: "Nineteen", translation: "Девятнадцать", transcription: "[naɪnˈtiːn]" },
    { word: "Twenty", translation: "Двадцать", transcription: "[ˈtwɛnti]" },
    { word: "Twenty-one", translation: "Двадцать один", transcription: "[ˈtwɛnti wʌn]" },
    { word: "Twenty-two", translation: "Двадцать два", transcription: "[ˈtwɛnti tuː]" },
    { word: "Twenty-three", translation: "Двадцать три", transcription: "[ˈtwɛnti θriː]" },
    { word: "Twenty-four", translation: "Двадцать четыре", transcription: "[ˈtwɛnti fɔːr]" },
    { word: "Twenty-five", translation: "Двадцать пять", transcription: "[ˈtwɛnti faɪv]" },
    { word: "Twenty-six", translation: "Двадцать шесть", transcription: "[ˈtwɛnti sɪks]" },
    { word: "Twenty-seven", translation: "Двадцать семь", transcription: "[ˈtwɛnti ˈsɛv.ən]" },
    { word: "Twenty-eight", translation: "Двадцать восемь", transcription: "[ˈtwɛnti eɪt]" },
    { word: "Twenty-nine", translation: "Двадцать девять", transcription: "[ˈtwɛnti naɪn]" },
    { word: "Thirty", translation: "Тридцать", transcription: "[ˈθɜːrti]" },
    { word: "Thirty-one", translation: "Тридцать один", transcription: "[ˈθɜːrti wʌn]" },
    { word: "Thirty-two", translation: "Тридцать два", transcription: "[ˈθɜːrti tuː]" },
    { word: "Thirty-three", translation: "Тридцать три", transcription: "[ˈθɜːrti θriː]" },
    { word: "Thirty-four", translation: "Тридцать четыре", transcription: "[ˈθɜːrti fɔːr]" },
    { word: "Thirty-five", translation: "Тридцать пять", transcription: "[ˈθɜːrti faɪv]" },
    { word: "Thirty-six", translation: "Тридцать шесть", transcription: "[ˈθɜːrti sɪks]" },
    { word: "Thirty-seven", translation: "Тридцать семь", transcription: "[ˈθɜːrti ˈsɛv.ən]" },
    { word: "Thirty-eight", translation: "Тридцать восемь", transcription: "[ˈθɜːrti eɪt]" },
    { word: "Thirty-nine", translation: "Тридцать девять", transcription: "[ˈθɜːrti naɪn]" },
    { word: "Forty", translation: "Сорок", transcription: "[ˈfɔːrti]" },
    { word: "Forty-one", translation: "Сорок один", transcription: "[ˈfɔːrti wʌn]" },
    { word: "Forty-two", translation: "Сорок два", transcription: "[ˈfɔːrti tuː]" },
    { word: "Forty-three", translation: "Сорок три", transcription: "[ˈfɔːrti θriː]" },
    { word: "Forty-four", translation: "Сорок четыре", transcription: "[ˈfɔːrti fɔːr]" },
    { word: "Forty-five", translation: "Сорок пять", transcription: "[ˈfɔːrti faɪv]" },
    { word: "Forty-six", translation: "Сорок шесть", transcription: "[ˈfɔːrti sɪks]" },
    { word: "Forty-seven", translation: "Сорок семь", transcription: "[ˈfɔːrti ˈsɛv.ən]" },
    { word: "Forty-eight", translation: "Сорок восемь", transcription: "[ˈfɔːrti eɪt]" },
    { word: "Forty-nine", translation: "Сорок девять", transcription: "[ˈfɔːrti naɪn]" },
    { word: "Fifty", translation: "Пятьдесят", transcription: "[ˈfɪfti]" },
    { word: "Fifty-one", translation: "Пятьдесят один", transcription: "[ˈfɪfti wʌn]" },
    { word: "Fifty-two", translation: "Пятьдесят два", transcription: "[ˈfɪfti tuː]" },
    { word: "Fifty-three", translation: "Пятьдесят три", transcription: "[ˈfɪfti θriː]" },
    { word: "Fifty-four", translation: "Пятьдесят четыре", transcription: "[ˈfɪfti fɔːr]" },
    { word: "Fifty-five", translation: "Пятьдесят пять", transcription: "[ˈfɪfti faɪv]" },
    { word: "Fifty-six", translation: "Пятьдесят шесть", transcription: "[ˈfɪfti sɪks]" },
    { word: "Fifty-seven", translation: "Пятьдесят семь", transcription: "[ˈfɪfti ˈsɛv.ən]" },
    { word: "Fifty-eight", translation: "Пятьдесят восемь", transcription: "[ˈfɪfti eɪt]" },
    { word: "Fifty-nine", translation: "Пятьдесят девять", transcription: "[ˈfɪfti naɪn]" },
    { word: "Sixty", translation: "Шестьдесят", transcription: "[ˈsɪksti]" },
    { word: "Sixty-one", translation: "Шестьдесят один", transcription: "[ˈsɪksti wʌn]" },
    { word: "Sixty-two", translation: "Шестьдесят два", transcription: "[ˈsɪksti tuː]" },
    { word: "Sixty-three", translation: "Шестьдесят три", transcription: "[ˈsɪksti θriː]" },
    { word: "Sixty-four", translation: "Шестьдесят четыре", transcription: "[ˈsɪksti fɔːr]" },
    { word: "Sixty-five", translation: "Шестьдесят пять", transcription: "[ˈsɪksti faɪv]" },
    { word: "Sixty-six", translation: "Шестьдесят шесть", transcription: "[ˈsɪksti sɪks]" },
    { word: "Sixty-seven", translation: "Шестьдесят семь", transcription: "[ˈsɪksti ˈsɛv.ən]" },
    { word: "Sixty-eight", translation: "Шестьдесят восемь", transcription: "[ˈsɪksti eɪt]" },
    { word: "Sixty-nine", translation: "Шестьдесят девять", transcription: "[ˈsɪksti naɪn]" },
    { word: "Seventy", translation: "Семьдесят", transcription: "[ˈsɛv.ən.ti]" },
    { word: "Seventy-one", translation: "Семьдесят один", transcription: "[ˈsɛv.ən.ti wʌn]" },
    { word: "Seventy-two", translation: "Семьдесят два", transcription: "[ˈsɛv.ən.ti tuː]" },
    { word: "Seventy-three", translation: "Семьдесят три", transcription: "[ˈsɛv.ən.ti θriː]" },
    { word: "Seventy-four", translation: "Семьдесят четыре", transcription: "[ˈsɛv.ən.ti fɔːr]" },
    { word: "Seventy-five", translation: "Семьдесят пять", transcription: "[ˈsɛv.ən.ti faɪv]" },
    { word: "Seventy-six", translation: "Семьдесят шесть", transcription: "[ˈsɛv.ən.ti sɪks]" },
    { word: "Seventy-seven", translation: "Семьдесят семь", transcription: "[ˈsɛv.ən.ti ˈsɛv.ən]" },
    { word: "Seventy-eight", translation: "Семьдесят восемь", transcription: "[ˈsɛv.ən.ti eɪt]" },
    { word: "Seventy-nine", translation: "Семьдесят девять", transcription: "[ˈsɛv.ən.ti naɪn]" },
    { word: "Eighty", translation: "Восемьдесят", transcription: "[ˈeɪti]" },
    { word: "Eighty-one", translation: "Восемьдесят один", transcription: "[ˈeɪti wʌn]" },
    { word: "Eighty-two", translation: "Восемьдесят два", transcription: "[ˈeɪti tuː]" },
    { word: "Eighty-three", translation: "Восемьдесят три", transcription: "[ˈeɪti θriː]" },
    { word: "Eighty-four", translation: "Восемьдесят четыре", transcription: "[ˈeɪti fɔːr]" },
    { word: "Eighty-five", translation: "Восемьдесят пять", transcription: "[ˈeɪti faɪv]" },
    { word: "Eighty-six", translation: "Восемьдесят шесть", transcription: "[ˈeɪti sɪks]" },
    { word: "Eighty-seven", translation: "Восемьдесят семь", transcription: "[ˈeɪti ˈsɛv.ən]" },
    { word: "Eighty-eight", translation: "Восемьдесят восемь", transcription: "[ˈeɪti eɪt]" },
    { word: "Eighty-nine", translation: "Восемьдесят девять", transcription: "[ˈeɪti naɪn]" },
    { word: "Ninety", translation: "Девяносто", transcription: "[ˈnaɪnti]" },
    { word: "Ninety-one", translation: "Девяносто один", transcription: "[ˈnaɪnti wʌn]" },
    { word: "Ninety-two", translation: "Девяносто два", transcription: "[ˈnaɪnti tuː]" },
    { word: "Ninety-three", translation: "Девяносто три", transcription: "[ˈnaɪnti θriː]" },
    { word: "Ninety-four", translation: "Девяносто четыре", transcription: "[ˈnaɪnti fɔːr]" },
    { word: "Ninety-five", translation: "Девяносто пять", transcription: "[ˈnaɪnti faɪv]" },
    { word: "Ninety-six", translation: "Девяносто шесть", transcription: "[ˈnaɪnti sɪks]" },
    { word: "Ninety-seven", translation: "Девяносто семь", transcription: "[ˈnaɪnti ˈsɛv.ən]" },
    { word: "Ninety-eight", translation: "Девяносто восемь", transcription: "[ˈnaɪnti eɪt]" },
    { word: "Ninety-nine", translation: "Девяносто девять", transcription: "[ˈnaɪnti naɪn]" },
    { word: "One hundred", translation: "Сто", transcription: "[wʌn ˈhʌndrəd]" },
];

const wordList = document.getElementById('word-list');
const searchInput = document.getElementById('search');

function displayWords(filteredWords) {
    wordList.innerHTML = '';
    filteredWords.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'word-item';
        div.innerHTML = `<strong>${item.word}</strong> - ${item.translation} <em>${item.transcription}</em>`;
        wordList.appendChild(div);
    });
}

function filterWords() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredWords = words.filter(item => 
        item.word.toLowerCase().includes(searchTerm) || 
        item.translation.toLowerCase().includes(searchTerm)
    );
    displayWords(filteredWords);
}

// Initial display of all words
displayWords(words);

// Event listener for search input
searchInput.addEventListener('input', filterWords);

