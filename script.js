let imgbx = document.querySelectorAll('.imgbx');
        let contentbx = document.querySelectorAll('.contentbx');

        for (let i=0; i<imgbx.length; i++){
            imgbx[i].addEventListener('mouseover', function(){
                for(let i=0; i<contentbx.length; i++){
                    contentbx[i].className = 'contentbx';
                }
                document.getElementById(this.dataset.id).
                className = 'contentbx active';

                for (let i=0; i<imgbx.length; i++){
                    imgbx[i].className = 'imgbx';
                }
                this.className = 'imgbx active';
            })
        }