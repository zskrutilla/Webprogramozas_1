
function Proba() {
    let a = ReturnWithValue(1);
    ++a; /* a = a + 1 */

    if (a < 10) {
        document.getElementById("demo3").innerHTML = "Az A kisebb mint 10";
    }
    else if (a > 50) {
        document.getElementById("demo3").innerHTML = "Az 'a' értéke nagyobb mint 50 (értéke: " + a + ")";
    }
    else {
        document.getElementById("demo3").innerHTML = a;
    }

    switch (a) {
        case 50: {
            document.getElementById("demo4").innerHTML = "Az A értéke 50";
            /*.
            . 
            .
            .*/
        }
            break;
        case 10: {
            document.getElementById("demo4").innerHTML = "Az A értéke 10";
        }
            break;
        default: {
            document.getElementById("demo4").innerHTML = "Az A értéke egyéb";
        }
            break;
    }

    document.getElementById("demo3").innerHTML = (z > a) ? z : a;

    let result = 0;

    for (let index = 0; index < 10; index++) {
        console.log(result += index);
        result += index;
    }

    document.getElementById("demo4").innerHTML = result;
}

function Proba2(x) {
    let y = " Doe"
    let z = x + y;

    document.getElementById("demo1").innerHTML = z;

    /*x = 5;
    y = 6;
    z = x + y;

    document.getElementById("demo2").innerHTML = z;*/
}

function ReturnWithValue(i) {
    return i + 50;
}

function validateForm() {
    let user = document.forms["loginForm"]["userName"].value;
    let pass = document.forms["loginForm"]["userPass"].value;

    if (user == "" || pass == "") {
        alert("F.név és jelszó megadása kötelező!");
        if (user == "") {
            document.getElementById("userName").style.background = 'red';
        }

        if (pass == "") {
            document.getElementById("userPass").style.background = 'red';
        }
        return false;
    }
    return true;
} 