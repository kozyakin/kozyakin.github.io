/*!
 * Processing task parameter for MFTI students cite
 * Copyright 2023 V. Kozyakin
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
var lastname = '';
var firstname = '';
var patronymic = '';
var tasks = '';
var hours = '';
var minutes = '';
var success = false;
var numtask = 2;
var body = '';

function getNumtask() {
    numtask = document.getElementById("mySelect").selectedIndex + 1;
};

function taskGenerator() {
    var a = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
    var b = [4, 3, 4, 1, 4, 4, 1, 1, 1, 1, 1, 5, 5, 1, 1, 2, 1, 1, 2, 3, 3, 3, 1, 3, 4, 2, 2, 2, 1];
    var c = ["a", "b", "c", "d", "e"];
    var al = a.length;
    var n;
    var r = [];
    for (n = 1; n <= numtask; ++n) {
        var i = Math.floor((Math.random() * (al - n + 1)));
        w = "";
        if (b[i] > 1) {
            var j = Math.floor((Math.random() * b[i]));
            w = c[j];
        }
        r.push(a[i] + w);
        a[i] = a[al - n];
        b[i] = b[al - n];
    }
    r.sort();
    tasks = r[0];
    for (i = 1; i < numtask; i++) {
        tasks += ", " + r[i];
    }
    hours = (new Date()).getHours();
    minutes = (new Date()).getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    if (patronymic == "" || firstname == "" || lastname == "") {
        alert("Не введены фамилия, имя или отчество! Введите их!");
    }
    else {
        document.getElementById("task").innerHTML = "<b>" + firstname + " " + patronymic + "!</b><br><br><b>Вам необходимо решить задачи с номерами " + tasks + ".<br><br>" + "Время начала экзамена " + hours + ":" + minutes + ". На решение каждой задачи отводится 15 минут.</b>";
        document.getElementById("firstName").disabled = true;
        document.getElementById("patroName").disabled = true;
        document.getElementById("lastName").disabled = true;
        document.getElementById("mySelect").disabled = true;
        success = true;
        body = lastname + " " + firstname + " " + patronymic + ". Начало экзамена " + hours + ":" + minutes + ". Задачи " + tasks + ".";
        body = body.replace(/\s+/g, ' ').trim();
        var hash = cyrb53(body).toString(16);
        //document.getElementById("info").innerHTML = "<b>"+ body + "</b>";
        document.location.href = `mailto:Victor Kozyakin <kozyakin@gmail.com>?subject=Экзамен, ${lastname}&body=${body}%0A%0D%0A%0D%0AКонтрольный код: ${hash}`;
    }
};

function getName() {
    lastname = document.getElementById("lastName").value.replace(/\s+/g, ' ').trim();
    firstname = document.getElementById("firstName").value.replace(/\s+/g, ' ').trim();
    patronymic = document.getElementById("patroName").value.replace(/\s+/g, ' ').trim();
    //document.getElementById("info").innerHTML = "<b>Уважаемый/ая "+ lastname+ " " + firstname + " " + patronymic + "!</b>";
};

function timeNow(i) {
    i.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

var cyrb53 = function (str) {
    var p1 = 2654435761, p2 = 1597334677, h1 = 0xdeadbeef | 0, h2 = 0x41c6ce57 | 0;
    for (var i = 0; i < str.length; i++)
        ch = str.charCodeAt(i), h1 = Math.imul(h1 + ch, p1), h2 = Math.imul(h2 + ch, p2);
    h1 = Math.imul(h1 ^ h1 >>> 16, p2), h2 = Math.imul(h2 ^ h2 >>> 15, p1);
    return (h2 & 2097151) * 4294967296 + h1;
};
