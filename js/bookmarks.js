var bookmark = [
    {
        title: "常用网址",
        urls: [
            {
                url: "https://github.com/",
                logo: "",
                name: "GitHub",
                desc: "Github"
            },
            {
                url: "https://www.github-zh.com/",
                logo: "",
                name: "Github 中文社区",
                desc: "Github 中文社区"
            },
            {
                url: "https://www.bilibili.com/",
                logo: "",
                name: "哔哩哔哩",
                desc: "bilibili"
            },
            {
                url: "https://youtube.com/",
                logo: "",
                name: "YouTube",
                desc: "youtube"
            },
            {
                url: "https://freeclash.org/",
                logo: "",
                name: "FreeClash",
                desc: "免费clash节点"
            }
        ]
    },
    {
        title: "前端库",
        urls: [
            {
                url: "https://react.docschina.org/learn",
                logo: "",
                name: "React",
                desc: "Learn React"
            },
            {
                url: "https://cn.vuejs.org/guide/introduction.html",
                logo: "",
                name: "Vue",
                desc: "Learn Vue"
            },
            {
                url: "https://www.electronjs.org/zh/docs/latest/",
                logo: "",
                name: "Electron",
                desc: "Learn Electron"
            },
            {
                url: "https://vitejs.dev/config/",
                logo: "",
                name: "Vite",
                desc: "Vite Config"
            },
            {
                url: "https://element-plus.org/zh-CN/",
                logo: "",
                name: "Element Plus",
                desc: "a Vue Library"
            },
            {
                url: "https://www.axios-http.cn/",
                logo: "",
                name: "Axios",
                desc: "Axios Library"
            },
            {
                url: "https://echarts.apache.org/examples/zh/index.html",
                logo: "",
                name: "Echarts",
                desc: "a chart library"
            },
        ]
    },
    {
        title: "Org and LaTeX",
        urls: [
            {
                url: "https://www.latexstudio.net/articles/",
                logo: "",
                name: "LaTeX studio",
                desc: "LaTeX resources"
            },
            {
                url: "https://orgmode.org/org.html",
                logo: "",
                name: "Org Mode",
                desc: "Org mode Manual"
            }
        ]
    },
    {
        title: "Arch",
        urls: [
            {
                url: "https://www.gnu.org/software/emacs/",
                logo: "",
                name: "Emacs",
                desc: "Emacs Document"
            },
            {
                url: "https://neovim.io/",
                logo: "",
                name: "Neovim",
                desc: "Neovim document"
            },
            {
                url: "https://i3wm.org/",
                logo: "",
                name: "i3 wm",
                desc: "i3 wm document"
            }
        ]
    },
    {
        title: "设计",
        urls: [
            {
                url: "https://wallhaven.cc/",
                logo: "",
                name: "wallhaven",
                desc: "wallpaper website"
            },
            {
                url: "http://zhongguose.com",
                logo: "",
                name: "中国传统颜色",
                desc: "中国传统颜色"
            }
        ]
    }
]

var content = $('.bookmark > .container')

function getFavicon(url) {
    icon_url = url.split('/').slice(0, 3).join('/')
    // const link = document.createElement("a");
    // link.href = icon_url;
    // link.download = 'favicon.ico';
    // link.click();
}

function createCard(url) {
    getFavicon(url.url);
    let logo = ""
    if(url.logo == ""){
        logo = `<span class="logo">󰖟 </span>`
    }else{
        logo = `<img src="${url.logo}" class="logo"></img>`
    }
    let name = `<span class="name">${url.name}</span>`
    let desc = `<span class="desc">${url.desc}</span>`
    let card = `<a class="card" href=${url.url}>` + logo + name + desc + `</a>`
    return card
}

function createCategray(categray) {
    let title = '<div class="title"><span>' + categray.title + '</span></div>'
    let arr = '<div class="content">'
    for (let i = 0; i < categray.urls.length; i++) {
        const url = categray.urls[i];
        arr = arr.concat(createCard(url));
    }
    arr = arr.concat("</div>");
    return '<div class="categray">' + title + arr + '</div>'
}
bookmark.forEach(element => {
    content.append(createCategray(element));
});
