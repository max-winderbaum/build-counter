var fb = new Firebase('https://count-builds.firebaseio.com/build_count');

function update() {
    fb.once('value', showResults, console.error);
}

function showResults(snap) {
    var times = snap.val();
    var hours = Math.floor(((times * 0.3333) / 60) * 100) / 100;
    $('#hours').html(hours);
    $('#times').html(times);
}

setInterval(update, 2000);
update();