var count = prompt('кол-во точек: ') - 0;

if (!isNaN(count) &&
    count > 2 && 
    parseInt(count) === count
) {
    // спросить,  что хотим посчитать 
    var arr = [];
    for (var i = 0; i < count; i++) {
        var x = prompt('X - ') - 0;
        var y = prompt('Y - ') - 0;
        if (!isNaN(x) && !isNaN(y)) {
                arr[i] = [x, y];
        } else {
            break;
        }
    }
    if (arr.length > 2) {
        for (var i = 0; i < arr.length; i++ ) {

        }
    }

}

var action = prompt('Что делать то будем? ') ;
if (action === 'Периметр') {
    var p;
    for (var i = 0; i<arr.length; i++) {
        (arr[0][0]
    }
}


