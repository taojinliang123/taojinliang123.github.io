var rule = {
  类型: '听书',
  title: '小懒听书',
  host: 'https://m.lrts.me',
  url: '/ajax/getResourceList?dsize=50&entityId=fyclass&entityType=1&pageNum=fypage&showFilters=1',
  searchUrl: '/ajax/searchBook?keyWord=**&pageSize=15&pageNum=fypage',
  searchable: 2,
  quickSearch: 0,
  filterable:1,
  timeout: 5000,
  class_name: '奇幻玄幻&都市传说&穿越架空&武侠仙侠&青春校园&历史幻想&科幻空间&网游竞技&热血军事&官场商战&次元专区',
  class_url: '11&8&3109&14&3106&12&3021&9042&9041&44&9287',
  play_parse: true,
  lazy: $js.toString(()=>{
        let html = request(input);
        let url = JSON.parse(html).list[0].path;
      input = {url: url,parse: 0}
  }),
  double: true,
 一级: $js.toString(()=>{
        let d = [];
        let html = request(input);
        let data = JSON.parse(html).books;
        data.forEach(it => {
            let id = 'https://m.lrts.me/ajax/getBookMenu?bookId='+it.baseEntityId;
            d.push({
            url:id,
            title:it.name,
            img:it.cover,
            desc:it.desc,
        })
        })
       setResult(d);
    }),
    二级: $js.toString(()=>{
    let urls = [];
    let pg = 1;
    while(pg){
    let html = request(input+'&pageNum='+pg+'&pageSize=40&sortType=0');
    let bookId = JSON.parse(html).bookId
    try{
    let data = JSON.parse(html).list;
    data.forEach(it => {
        urls.push(it.name+'$'+`https://m.lrts.me/ajax/getPlayPath?entityId=${bookId}&entityType=3&opType=1&sections=[${it.section}]&id=${it.id}`);
        })
        pg++  
    }catch(e){
        break
    }
    }
    VOD = {
            vod_play_from: '球球啦',
            vod_play_url: urls.join('#')
        };
    }),
  搜索: $js.toString(()=>{
        let d = [];
        let html = request(input);
        let data = JSON.parse(html).books;
        data.forEach(it => {
            let id = 'https://m.lrts.me/ajax/getBookMenu?bookId='+it.baseEntityId;
            d.push({
            url:id,
            title:it.name,
            img:it.cover,
            desc:it.desc,
        })
        })
       setResult(d);
    })
}