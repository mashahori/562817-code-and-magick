'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var ESC_BUTTON = 27;
var ENTER_BUTTON = 13;
var COUNT_WIZARDS = 4;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_BUTTON) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
  document.addEventListener('keydown', onPopupEscPress);
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    openPopup();
    document.addEventListener('keydown', onPopupEscPress);
  }
});

setupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

setupClose.addEventListener('click', function () {
  closePopup();
  document.removeEventListener('keydown', onPopupEscPress);
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    closePopup();
    document.removeEventListener('keydown', onPopupEscPress);
  }
});

var bigWizard = setup.querySelector('.setup-wizard-appearance');

var wizardCoat = setup.querySelector('.wizard-coat');
var inputCoat = bigWizard.querySelector('input[name=coat-color]');
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var bigWizardEyes = bigWizard.querySelector('.wizard-eyes');
var inputEyes = bigWizard.querySelector('input[name=eyes-color]');
var bigWizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var inputFireball = wizardFireball.querySelector('input');
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var random = function (wizardProperty) {
  return wizardProperty[Math.floor(Math.random() * wizardProperty.length)];
};

var changeCoatColor = function () {
  wizardCoat.style.fill = random(coatColors);
  inputCoat.value = random(coatColors);
};

var changeEyesColor = function () {
  bigWizardEyes.style.fill = random(bigWizardEyesColors);
  inputEyes.value = random(bigWizardEyesColors);
};

var changeFireballColor = function () {
  wizardFireball.style.background = random(fireballColors);
  inputFireball.value = random(fireballColors);
};

wizardCoat.addEventListener('click', changeCoatColor);
bigWizardEyes.addEventListener('click', changeEyesColor);
wizardFireball.addEventListener('click', changeFireballColor);

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var makeWizards = function (wizardsCount) {
  var totalWizards = [];
  for (var i = 0; i < wizardsCount; i++) {
    totalWizards.push({
      name: random(wizardNames) + ' ' + random(wizardSurnames),
      coatColor: random(wizardCoats),
      eyesColor: random(wizardEyes)
    });
  }
  return totalWizards;
};

var wizards = makeWizards(COUNT_WIZARDS);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
