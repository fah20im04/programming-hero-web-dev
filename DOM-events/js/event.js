// option 2 to handle event

    // option 3 get element by id then set onclick
        const btnRed = document.getElementById('btn-red')
        // console.log(btnRed);
        btnRed.onclick = function makeRed(){
            document.body.style.backgroundColor='red';
        }
        // option 3 different vertion
         //  var btnMakePurple = document.getElementById('btn-make-purple');
        // //  console.log(btnMakePurple);
        // btnMakePurple.onclick = makePurple;
        // function makePurple(){
        //     document.body.style.backgroundColor = 'purple';
        // }