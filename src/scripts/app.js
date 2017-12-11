var tooltipDisplay = document.querySelector('.tooltip-body');
var tooltipHelp = document.querySelector('.code-tooltip');
var indexHum = document.querySelector('.index__menu_hamburger');
var indexMenu = document.querySelector('.index__menu');


tooltipDisplay.addEventListener('click', function(e) {
    e.preventDefault();
    tooltipDisplay.classList.toggle('active-show');});

tooltipHelp.addEventListener('click', function(e) {
    e.preventDefault();
    tooltipDisplay.classList.toggle('active-show');});

indexHum.addEventListener('click', function(e) {
    e.preventDefault();
    indexMenu.classList.toggle('active-show'); });


$('input').eq(0).bind("keypress", function () {
    if (this.value.length > 3) {
        return false;
    }
}).bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    var classList = this.classList;
    if (this.value.length > 3) {
        classList.remove('errorInput');
        classList.add('valid');
    } else {
        classList.add('errorInput');
        classList.remove('valid');
    }
});

$('input').eq(1).bind("keypress", function () {
    if (this.value.length > 3) {
        return false;
    }
}).bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    var classList = this.classList;
    if (this.value.length > 3) {
        classList.remove('errorInput');
        classList.add('valid');
    } else {
        classList.add('errorInput');
        classList.remove('valid');
    }
});

$('input').eq(2).bind("keypress", function () {
    if (this.value.length > 3) {
        return false;
    }
}).bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    var classList = this.classList;
    if (this.value.length > 3) {
        classList.remove('errorInput');
        classList.add('valid');
    } else {
        classList.add('errorInput');
        classList.remove('valid');
    }
});

$('input').eq(3).bind("keypress", function () {
    if (this.value.length > 3) {
        return false;
    }
}).bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    var classList = this.classList;
    if (this.value.length > 3) {
        classList.remove('errorInput');
        classList.add('valid');
    } else {
        classList.add('errorInput');
        classList.remove('valid');
    }
});

$('input').eq(4).bind("keypress", function () {
    if (this.value.length > 1) {
        return false;
    }
}).bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    var classList = this.classList;
    if (this.value.length > 1) {
        classList.remove('errorInput');
        classList.add('valid');
    } else {
        classList.add('errorInput');
        classList.remove('valid');
    }
});

$('input').eq(5).bind("keypress", function () {
    if (this.value.length > 3) {
        return false;
    }
}).bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    var classList = this.classList;
    if (this.value.length > 3) {
        classList.remove('errorInput');
        classList.add('valid');
    } else {
        classList.add('errorInput');
        classList.remove('valid');
    }
});

$('input').eq(7).bind("keypress", function () {
    if (this.value.length > 2) {
        return false;
    }
}).bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    var classList = this.classList;
    if (this.value.length > 2) {
        classList.remove('errorInput');
        classList.add('valid');
    } else {
        classList.add('errorInput');
        classList.remove('valid');
    }
});

$('input').eq(6).bind("keypress", function () {
    if (this.value.length > 30) {
        return false;
    } 
}).bind("change keyup input click", function() {
    if (this.value.match(/[^a-zA-Z]/g)) {
        this.value = this.value.replace(/[^a-zA-Z]/g, '');
    }
    var classList = this.classList;
    if (this.value.length > 30) {
        classList.remove('errorInput');
        classList.remove('valid');
    } else if (this.value.length >= 4) {
        classList.remove('errorInput');
        classList.add('valid');
    } else {
        classList.add('errorInput');
        classList.remove('valid');
    }
});


document.querySelector('.main-form').addEventListener("submit", function (event) {
    event.preventDefault ();
    var validClass = document.querySelectorAll('.valid').length;
    var allInput = document.getElementsByTagName('input');

    if (validClass == 9) {
        console.log ("Все формы заполнены");
    } else {
        for (i = 0; i < 9; i++) {
            var inputClass = allInput[i];
            var classList = inputClass.classList;
            if (!classList.contains('valid')) {
                classList.add('errorInput');
            }
        };
        console.log ("Не все формы заполнены");
    }
});
