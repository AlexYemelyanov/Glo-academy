let lang = prompt('Введите язык по примеру ru или eng');
let langArray = [];
let namePerson = prompt('Введите ваше имя:');
let person;

if (lang === 'ru') {
  message = ('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'eng') {
  message = ('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
};

switch (lang) {
  case 'ru':
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
  case 'eng':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
}


langArray['ru'] = ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'];
langArray['eng'] = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];


person = (namePerson == 'Артем') ? 'Директор' :
  (namePerson == 'Максим') ? 'Преподаватель' :
  (namePerson == 'Александр') ? 'Преподаватель' :
  'Студент';



console.log(message);
console.log(langArray[lang]);
alert(person);