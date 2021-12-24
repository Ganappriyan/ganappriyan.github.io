function calculate() {
    var boy = "karthiban";
    var girl = document.getElementById("girl").value.toLowerCase();

    for (var i of girl) {
        boy = boy.replace(i, "");
    }

    for (var i of boy) {
        girl = girl.replace(i, "");
    }

    var a = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Sister"];

    var b = ((boy.length + girl.length) % 6) - 1;
    if (b == -1) {
        b = 5;
    }
    document.getElementById("out").innerHTML = a[b];

}