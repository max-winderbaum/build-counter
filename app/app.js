var fb = new Firebase('https://count-builds.firebaseio.com/build_count');

function update() {
    fb.once('value', showResults, console.error);
}

function showResults(snap) {
    var times = snap.val();
    var hours = ((times * 0.3333) / 60) - 1;
    hours = hours.toFixed(2);
    $('#hours').html(hours);
    $('#times').html(times);
}

setInterval(update, 2000);
update();