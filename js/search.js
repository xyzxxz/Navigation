const engine = [
    {
        name: ".bing",
        url: "https://www.bing.com/search?",
        key: "q",
        path: "./static/image/Bing-logo.png"
    },
    {
        name: ".baidu",
        url: "https://www.baidu.com/s?",
        key: "wd",
        path: "./static/image/Baidu-logo.png"
    },
    {
        name: ".google",
        url: "https://www.google.co.uk/search?",
        key: "q",
        path: "./static/image/Google-logo.png"
    }
]
// for (let i = 0; i < engine.length; i++) {
//     const element = engine[i];
//     $('form .toggle').append(`<div class=${element.name}><img src=${element.path}></div>`)
// }

let defalt_engine = localStorage.getItem('engine')

if (defalt_engine == null) {
    defalt_engine = JSON.stringify(engine[0])
}else {
    $('.engine').attr('src', JSON.parse(localStorage.getItem('engine')).path)
}

for (let i = 0; i < engine.length; i++) {
    const element = engine[i];
    $(element.name).on('click', function(){
        $('form').attr('action', element.url);
        $('input[type=search]').attr('name', element.key)
        $('.engine').attr('src', $(this).children().attr('src'));
        localStorage.setItem('engine', JSON.stringify(element));
    })
}

$('form img').on('click', () => {
    $('form .toggle').toggle();
})
