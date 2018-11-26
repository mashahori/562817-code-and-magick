var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];


var random = function ( wizardProperty) {
    return wizardProperty[Math.floor(Math.random() * wizarProperty.length)];
};

var wizards = [
  {
  name: wizardNames[Math.floor(Math.random() * wizardSurnames.length)] + ' ' + wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)],
  coatColor: wizardCoats[Math.floor(Math.random() * wizardCoats.length)],
  eyesColor: wizardEyes[Math.floor(Math.random() * wizardEyes.length)]
  },
  {
  name: wizardNames[Math.floor(Math.random() * wizardNames.length)]+ ' ' + wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)],
  coatColor: wizardCoats[Math.floor(Math.random() * wizardCoats.length)],
  eyesColor: wizardEyes[Math.floor(Math.random() * wizardEyes.length)]
  },
  {
  name: wizardNames[Math.floor(Math.random() * wizardNames.length)]+ ' ' + wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)],
  coatColor: wizardCoats[Math.floor(Math.random() * wizardCoats.length)],
  eyesColor: wizardEyes[Math.floor(Math.random() * wizardEyes.length)]
  },
  {
  name: wizardNames[Math.floor(Math.random() * wizardNames.length)]+ ' ' + wizardSurnames[Math.floor(Math.random() * wizardSurnames.length)],
  coatColor: wizardCoats[Math.floor(Math.random() * wizardCoats.length)],
  eyesColor: wizardEyes[Math.floor(Math.random() * wizardEyes.length)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

  similarListElement.appendChild(fragment);
