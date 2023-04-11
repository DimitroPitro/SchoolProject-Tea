const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');

icon.onclick = function() {
    search.classList.toggle('active');
    if (search.classList.contains('active')) {
        document.querySelector('#mySearch').focus();
        search.scrollLeft = 0;
    }
};

clear.onclick = function() {
    document.getElementById('mySearch').value = '';
};

document.querySelector('#mySearch').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != ''){
        elasticItems.forEach(function(elem) {
            if (elem.innerText.toLowerCase().search(val.toLowerCase()) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function(elem){
            elem.classList.remove('hide'); 
        });
    }
};


