var parent = document.querySelector('.parent_class');
var content ='';
for (let i = 1; i <17 ; i++) {
 content += "<div class='child wh' data-id='0' data-check='no'></div>";
}
parent.innerHTML = content;



function start(){
    setTimeout(function() {
        var dd = document.querySelectorAll('.child');
        for (d = 0; d < dd.length; d++) {
        dd[d].classList.remove('animate');

    }},1000)}

var child = document.querySelectorAll('.child');
for (i = 0; i < child.length; i++) {
    child[i].addEventListener('click',(e)=>{
        var item = document.querySelectorAll('.child');
        let target = e.target;
        var target_id = target.getAttribute('data-check');
        var arr = [];
        for (j = 0; j < item.length; j++) {
            let aa = parseInt(item[j].getAttribute('data-id'));
                arr.push(aa);
            }
      
        var l = Math.max(...arr);
        if (target_id == 'no'){
            if (l < 16){
                var k = l+1;
                target.innerHTML = k;
                target.setAttribute('data-id',k);
                target.setAttribute('data-check','yes');


                var cc = document.querySelectorAll('.child');
                cc.forEach(box => {
                    box.classList.remove('col1');
                    box.classList.remove('col2');
                  });
                for (m = 0; m < item.length; m++) {
                    let mm = parseInt(item[m].getAttribute('data-id'));
                    if(mm == k){
                        cc[m].classList.add('col1');
                    }
                    if(mm == l && l !==0){
                        cc[m].classList.add('col2');
                    }
                        
                }
            }
        }
        else{
            target.classList.add('animate');
            start();
        }
    })
   }



//    function clockInit(){
//     var hour = document.getElementById('hour');
//     var minute = document.getElementById('minute');
//     var second = document.getElementById('second');
 
//     var d = new Date();
//     var hh = d.getHours() * 30;
//     var mm = d.getMinutes() * 6;
//     var ss = d.getSeconds() * 6;
 
//     hour.style.transform =`rotatez(${hh+(mm/12)}deg)`; 
//     minute.style.transform =`rotatez(${mm}deg)`; 
//     second.style.transform =`rotatez(${ss}deg)`; 
//    }