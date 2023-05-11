let nowPage = document.getElementById('articlesort');
let nextPage = document.getElementById('nextPage');
let prevpage = document.getElementById('prevPage');

var pagecount = 1;

function tothenextpage(){
    if(nextPage.addEventListener('click') && pagecount < 100){
        pagecount += 1;
        nowPage.innerText = `Total 100건 ${pagecount} 페이지`; 
    }
    else{
        alert("Last page");
    }
}

function totheprevpage() {
    if(prevPage.addEventListener('click') && pagecount > 2){
        pagecount -= 1;
        nowPage.innerText = `Total 100건 ${pagecount} 페이지`; 
    }
    else{
        alert("First page");
    }
}