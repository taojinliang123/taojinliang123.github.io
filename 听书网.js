var rule = {
    title: '听书网',
    host: 'http://ting2.com/',
    url: 'http://ting2.com/book/fyclass-fypage.html',
    searchUrl: 'http://ting2.com/search.php?page=fypage&searchword=%**&searchtype=',
    class_parse: '.nav li;a&&Text;a&&href;.*/(.*?).html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    play_parse: true,
    lazy: $js.toString(() => {
        var html = request(input)
        var url = html.match(/var now="(.*?)"/)[1]
        input = {

            url: url

        }
    }),
    limit: 6,
    推荐: '.row1;li;img&&alt;img&&src;.tx-c1&&Text;a&&href',
    double: true,
    一级: '.row3 li;img&&alt;img&&src;.fr&&span&&Text;a&&href;.style-img&&p:eq(0)&&Text',
    二级: {
        title: 'h1&&Text;.detail_list&&ul:eq(1)&&li&&a:eq(2)&&Text',
        img: '.vodlist_thumb&&data-original',
        desc: '.style-img&&p:eq(0)&&Text;.style-img&&p:eq(1)&&Text;.style-img&&p:eq(2)&&Text',
        content: '.content_desc&&span&&Text',
        tabs: 'h2:not(:contains(h2:eq(1)))',
        lists: '.ul-36:eq(#id) a',
    },
    搜索: '*',
}