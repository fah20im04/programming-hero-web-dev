// console.log('event handler');
  document.getElementById('btn-update-title').addEventListener('click',function(){
            // console.log('button clicked')
            const pageTitleElement=document.getElementById('page-title');
            console.log(pageTitleElement);
            pageTitleElement.innerText ='updated title text';
        })
  document.getElementById('btn-log-in').addEventListener('click',function(){
        const userInfoEl = document.getElementById('user-info');
        userInfoEl.innerText = 'user logged in succesfully';
      })