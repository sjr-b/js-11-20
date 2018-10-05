// This is the eleventh problem, firstLast6.
function firstLast6(array){
    if (array[0] == 6 || array[array.length - 1] == 6){
        return true;
    } else {
        return false;
    }
}

// This is the twelfth problem, has23.
function has23(array){
    for (var i = 0; i < 2; i++){
        if (array[i] == 2 || array[i] == 3){
            return true;
        }
    }
    return false;
}

// This is the thirteenth problem, fix23.
function fix23(array){
    for (var i = 0; i < 3; i++){
        if (array[i] == 2 && array[i+1] == 3){
            array[i+1] = 0;
            return array;
        }
    }
    return array;
}

// This is the fourteenth problem, countYZ.
function countYZ(str){
    var string = str.toLowerCase();
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if(string.substring(i,i+1) == "z" || string.substring(i,i+1) == "y"){
            if(string.substring(i+1,i+2) == " "){
                count ++;
            }
        }
    }
    if(string.substring(string.length-1,string.length) == "z" || string.substring(string.length-1,string.length) == "y"){
        count ++;
    }
    return count;
}

// This is the fifteenth problem, endOther.
function endOther(str1, str2){
    var string1 = str1.toLowerCase();
    var string2 = str2.toLowerCase();
    if (string1.substring(string1.length, string1.length - string2.length) == string2){
        return true;
    } else if (string2.substring(string2.length, string2.length - string1.length) == string1){
        return true;
    } else {
        return false;
    }
}

// This is the sixteenth problem, starOut.
function starOut(string){
    var newString = "";
    for(var i = 0; i < string.length; i++){
        if(string.substring(i-1, i) != "*"){
            if(string.substring(i, i+1) != "*"){
                if(string.substring(i+1, i+2) != "*"){
                    newString += string.substring(i, i+1);
                }
            }
        }
    }
    return newString;
}

// This is the seventeenth problem, getSandwich.
function getSandwich(string){
    // The following seven lines are to make sure that there are at least two breads.
    var countBread = 0;
    var contents = "";
    for(var l = 0; l < string.length; l++){
        if(string.substring(l, l+5) == "bread"){
            countBread++;
        }
    }
    if (countBread >= 2){
        // The following eight lines are to find the position of the first letter of the final bread within the string (finalBread is this coordinate).
        var finalBread = 0;
        var a = string.length;
        while (finalBread == 0){
            if(string.substring(a-4, a+1) == "bread"){
                finalBread += a-4;
            }
            a--;
        }
        // The following lines are to actually get the contents of the bread.
        for (var i = 0; i < string.length; i++){
            if (string.substring(i, i+5) == "bread"){
                for (var j = i + 5; j < string.length; j++){
                    if (j < finalBread){
                        contents += string.substring(j, j+1);
                    } else {
                        return contents;
                    }
                }
            }
        }
    } else {
        // This is to say that there are no contents of the sandwich.... because there is no sandwich.
        return contents;
    }
}

// This is the eighteenth function, canBalance.
function canBalance(array){
    var forward = 0;
    var backward = 0;
    if(array.length == 1){
        return false;
    }
    for(var l = 0; l < array.length; l++){
        for(var i = 0; i < array.length; i++){
            forward += array[i];
            for(var j = array.length-1; j > i; j--){
                backward += array[j];
            }
            if(forward == backward){
                return true;
            }
            backward = 0;
        }
    }
    return false;
}

// This is the ninteenth function, countClumps.
function countClumps(array){
    var num = 0;
    for(var i = 0; i < array.length; i++){
        if (array[i] == array[i+1]){
            while(array[i] == array[i+1]){
                i++;
            }
            num ++;
        }
    }
    return num;
}

// This is the twentieth function, evenlySpaced.
function evenlySpaced(a, b, c){
    if (a > b && a > c){
        var large = a;
        if (b > c){
            var med = b;
            var small = c;
        } else {
            var med = c;
            var small = b;
        }
    } else if (b > a && b > c){
        var large = b;
        if (a > c){
            var med = a;
            var small = c;
        } else {
            var med = c;
            var small = a;
        }
    } else {
        var large = c;
        if (a > b){
            var med = a;
            var small = b;
        } else {
            var med = b;
            var small = a;
        }
    }
    if (large - med == med - small){
        return true;
    } else {
        return false;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6([1, 2, 3, 6]);
    document.getElementById("output").innerHTML += has23([1, 2]);
    document.getElementById("output").innerHTML += fix23([1, 2, 3]);
    document.getElementById("output").innerHTML += countYZ("fez day");
    document.getElementById("output").innerHTML += endOther("Hiabc", "abc");
    document.getElementById("output").innerHTML += starOut("ad*cb");
    document.getElementById("output").innerHTML += getSandwich("breadjambread");
    document.getElementById("output").innerHTML += canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output").innerHTML += countClumps([1, 2, 2, 4, 7, 7, 7, 7, 9]);
    document.getElementById("output").innerHTML += evenlySpaced(1, 2, 3);
}