var parent = document.querySelector('.parent_class');
var content ='';
for (let i = 1; i <17 ; i++) {
 content += "<div class='child wh' data-id='0' data-check='no'>2</div>";
}
parent.innerHTML = content;




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
    })
   }



