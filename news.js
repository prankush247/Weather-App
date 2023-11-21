let news = document.getElementById("news")
window.addEventListener('load', async function() {
    // newsdata.io
    // https://newsdata.io/api/1/news?apikey=pub_32093dc794d90f43d14a271328776d3845ecf&q=weather
    //https://newsdata.io/api/1/news?apikey=pub_32093dc794d90f43d14a271328776d3845ecf
    const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_32093dc794d90f43d14a271328776d3845ecf&qInTitle=weather");
    
    const apiData = await response.json()
    console.log(apiData)
    news.innerHTML=""
    for(let i=0;i<apiData.results.length;i++){
    if(apiData.results[i].language=="english" && apiData.results[i].image_url!=null && (apiData.results[i].image_url.includes("jpg")||apiData.results[i].image_url.includes("jpeg")||apiData.results[i].image_url.includes("png"))){

        console.log(apiData.results[i].urlToImage)
        console.log(apiData.results[i].title)
        console.log(apiData.results[i].description)
        news.innerHTML += ` <div class="news-block" onclick="window.open('${apiData.results[i].link}', '_blank')">
        <div class="newsImg"><img alt="imgHere" width="200px" src=${apiData.results[i].image_url}></img></div>
        <div class="descArea">
        <div class="title">${apiData.results[i].title}</div>
        <div class="description">${apiData.results[i].description}</div>
        </div>                       
        </div>`
    }
        
    }
    
});
// 