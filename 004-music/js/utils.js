const log = console.log.bind(console)

const fetchAlbum = () => {
    let list = [
        {
            img: 'https://wangwenyue.github.io/Music_Player/pics/3.jpg',
            song: 'Chasing Pavement',
            artist: 'Adele',
            src: 'https://raw.githubusercontent.com/eddy0/ReactExpress/master/static/music/4.mp3',
        },
        {
            img: 'https://wangwenyue.github.io/Music_Player/pics/1.jpg',
            song: '走在冷风中',
            artist: '周二珂',
            src: 'https://raw.githubusercontent.com/eddy0/ReactExpress/master/static/music/1.mp3',
        },
        {
            img: 'https://wangwenyue.github.io/Music_Player/pics/2.jpg',
            song: '夜空中最亮的星',
            artist: '逃跑计划',
            src: 'https://raw.githubusercontent.com/eddy0/ReactExpress/master/static/music/3.mp3',
        },
    ]

    return Promise.resolve(list)
}

const random = (a, b) => {
    return Math.floor( Math.random() * (b - a + 1) + a )
}
