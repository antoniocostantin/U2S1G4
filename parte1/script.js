window.addEventListener('load', function () {

    const postits = document.getElementsByClassName('postit');

    let i = 0;

    const myInterval = setInterval(function (){
            if(i < postits.length ){
                const targetClassList = postits[i].classList;

                if (targetClassList.contains('rotate18'))
                    targetClassList.add('pinrot18');
                 else if (targetClassList.contains('rotate12'))
                    (targetClassList.add('pinrot12'))
                 else if (targetClassList.contains('rotate-8'))
                    (targetClassList.add('pinrot8'))
                

               i++
            }
            else
                clearInterval(myInterval);
        },
        1500
    )

})