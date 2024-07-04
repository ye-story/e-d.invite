const names = [
  { id: "0", names: "Общее" },
  { id: "1", names: "мама и папа.jpg" },
  { id: "2", names: "Дорогие Ирина Николаевна, Александр Николаевич, Андрей и Юлия.jpg" },
  { id: "3", names: "Дорогие Анна и Мария.jpg" },
  { id: "4", names: "Дорогая Дария.jpg" },
  { id: "5", names: "Уважаемые Тамара Терентьевна и Александр Павлович.jpg" },
  { id: "6", names: "Уважаемые Степан Терентьевич и Валентина Антоновна.jpg" },
  { id: "7", names: "Дорогие Артём и Юлия.jpg" },
  { id: "8", names: "Дорогие Николай  Алексеевич, Светлана Алексеевна  , Павел и Кира.jpg" },
  { id: "9", names: "Дорогие Игорь Владимирович и Валентина Евгеньевна.jpg" },
  { id: "10", names: "Дорогие Владимир Викторович и Светлана Николаевна.jpg" },
  { id: "11", names: "Дорогая Крёстная.jpg" },
  { id: "12", names: "Дорогие Родион и Ева.jpg" },
  { id: "13", names: "Дорогие Ян и Алиса.jpg" },
  { id: "14", names: "Дорогая Кристина.jpg" },
  { id: "15", names: "Дорогие Ян и Анастасия.jpg" },
  { id: "16", names: "Дорогие Дмитрий и Маргарита.jpg" },
  { id: "17", names: "Дорогие Даниил , Татьяна и Анастасия.jpg" },
  { id: "18", names: "Дорогие Мама и Валерий.jpg" },
  { id: "19", names: "Дорогие Папа, Светлана и Анна.jpg" },
  { id: "20", names: "Уважаемые Анатолий Станиславович и Любовь Петровна.jpg" },
  { id: "21", names: "Уважаемые Галина Николаевна, Вадим Геннадьевич и Полина Константиновна.jpg" },
  { id: "22", names: "Дорогие Антонина , Виктор, Злата и Рома.jpg" },
  { id: "23", names: "Дорогие Светлана Петровна, Александр Олегович и Анастасия Олеговна.jpg" },
  { id: "24", names: "Дорогие Анна, Дарья , Григорий Петрович и Валентина Николаевна.jpg" },
  { id: "25", names: "Дорогие Сергей и Галина.jpg" },
  { id: "26", names: "Дорогие Андрей и Оксана.jpg" },
  { id: "27", names: "Дорогие Дмитрий , Татьяна , Милана и Валерия.jpg" },
  { id: "28", names: "Дорогие Виталий и Виктория.jpg" },
  { id: "29", names: "Дорогие Анатолий и Ксения.jpg" },
  { id: "30", names: "Дорогие Сергей и Ксения.jpg" },
  { id: "31", names: "Дорогая Светлана.jpg" },
  { id: "32", names: "Уважаемые Маргарита Николаевна и Виктор Николаевич.jpg" },
  { id: "33", names: "Уважаемые Владимир Геннадьевич и Надежда Игоревна.jpg" },
  { id: "34", names: "Дорогие Александр и Елена.jpg" },
  { id: "35", names: "Дорогие Андрей и Юлия.jpg" },
  { id: "36", names: "Дорогие Сергей и Анастасия.jpg" },
  { id: "37", names: "Дорогие Артём и Иоланта.jpg" },
  { id: "38", names: "Дорогие Филипп и Маргарита.jpg" },
  { id: "39", names: "Дорогие Максим и Анастасия.jpg" },
  { id: "40", names: "Уважаемый Илья Сергеевич.jpg" },
  { id: "41", names: "Дорогой Сергей.jpg" },
  { id: "42", names: "Дорогой Денис.jpg" },
  { id: "43", names: "Уважаемый Артём Сергеевич.jpg" },
  { id: "44", names: "Дорогие Игорь и Виктория.jpg" },
  { id: "45", names: "Дорогие Константин и Кристина.jpg" },
  { id: "46", names: "Дорогие Максим и Марина.jpg" },
  { id: "47", names: "Уважаемый Егор Вячеславович.jpg" },
  { id: "48", names: "Дорогие Денис и Валерия.jpg" },
  { id: "49", names: "Дорогие Павел и Анна.jpg" },
  { id: "50", names: "Дорогие Михаил и Анна.jpg" },
  { id: "51", names: "Дорогой Олег.jpg" },
  { id: "52", names: "Дорогие Кирилл и Светлана.jpg" },

];

const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});
