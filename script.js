document.addEventListener('DOMContentLoaded', function () {
    // Replacing content
    document.getElementById('addcomment').addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            // Change the content of the "Aboutme" section based on the clicked comment
            document.getElementById('Aboutme').innerHTML = '<h2>' + e.target.innerText + '</h2><p>New content for ' + e.target.innerText + '.</p>';
        }
    });

    // Element creation and deletion
    function addItem() {
        var newItem = prompt('Enter a new comment:');
        if (newItem) {
            var li = document.createElement('li');
            li.innerText = '"' + newItem + '"';
            document.getElementById('addcomment').appendChild(li);
        }
    }

    function removeItem() {
        var items = document.getElementById('addcomment');
        if (items.children.length > 0) {
            items.removeChild(items.lastElementChild);
        }
    }

    // Event handling
    document.querySelector('header').addEventListener('mouseover', function () {
        alert('Welcome to the web page!');
    });

    // Button event listeners
    document.querySelector('button.addItemButton').addEventListener('click', addItem);
    document.querySelector('button.removeItemButton').addEventListener('click', removeItem);
});
document.addEventListener('DOMContentLoaded', function () {
    let welcomeAlertShown = false;

    // Replacing content
    document.getElementById('addcomment').addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            // Change the content of the "Aboutme" section based on the clicked comment
            document.getElementById('Aboutme').innerHTML = '<h2>' + e.target.innerText + '</h2><p>New content for ' + e.target.innerText + '.</p>';
        }
    });

    // Element creation and deletion
    function addItem() {
        var newItem = prompt('Enter a new comment:');
        if (newItem) {
            var li = document.createElement('li');
            li.innerText = '"' + newItem + '"';
            document.getElementById('addcomment').appendChild(li);
        }
    }

    function removeItem() {
        var items = document.getElementById('addcomment');
        if (items.children.length > 0) {
            items.removeChild(items.lastElementChild);
        }
    }

    // Event handling
    document.querySelector('header').addEventListener('mouseover', function () {
        if (!welcomeAlertShown) {
            alert('Welcome to the web page!');
            welcomeAlertShown = true;
        }
    });

    // Button event listeners
    document.querySelector('.addItemButton').addEventListener('click', addItem);
    document.querySelector('.removeItemButton').addEventListener('click', removeItem);
});