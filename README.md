
# 解析支持：优酷、爱奇艺、腾讯、芒果、乐视、搜狐、MP4、M3U8、FLV等等

## 方法一：

### 查询：

```
curl --location 'https://svip.bljiex.cc/api.php?out=json&wd=%E7%81%BC%E7%81%BC%E9%A3%8E%E6%B5%81' \
--header 'Referer: https://svip.bljiex.cc/so.php?wd=%E7%81%BC%E7%81%BC%E9%A3%8E%E6%B5%81'
```

### 返回：

```
{
    "success": 1,
    "code": 0,
    "title": "灼灼风流",
    "info": [
        {
            "flag": 3,
            "flag_name": "BL高清X",
            "from": "BL高清X",
            "type": "国产剧",
            "id": "36644",
            "title": "灼灼风流",
            "img:": "null"
        },
        {
            "flag": 6,
            "flag_name": "Hn高清",
            "from": "Hn高清",
            "type": "国产剧",
            "id": "77527",
            "title": "灼灼风流",
            "img:": "null"
        },
        {
            "flag": 7,
            "flag_name": "Xl高清",
            "from": "Xl高清",
            "type": "大陆剧",
            "id": "97878",
            "title": "灼灼风流",
            "img:": "null"
        }
    ]
}
```

### 查询：

```
curl --location 'https://svip.bljiex.cc/api.php?out=json&flag=6&id=77527' \
--header 'Referer: https://svip.bljiex.cc/so.php?wd=%E7%81%BC%E7%81%BC%E9%A3%8E%E6%B5%81'

```

### 返回：

```
{
    "success": 1,
    "code": 200,
    "url": "https://hnzy.bfvvs.com/play/RdGE0m7a/index.m3u8",
    "pic": "https://image.maimn.com/cover/244b0c93b290a9c469f42f678eb21cd8.jpg",
    "title": "灼灼风流",
    "part": 1,
    "type": "hnm3u8",
    "info": [
        {
            "flag": "hnm3u8",
            "flag_name": "Hn高清",
            "part": 6,
            "video": [
                "第01集$https://hnzy.bfvvs.com/play/RdGE0m7a/index.m3u8$",
                "第02集$https://hnzy.bfvvs.com/play/lejP14lb/index.m3u8$",
                "第03集$https://hnzy.bfvvs.com/play/lejP1rRb/index.m3u8$",
                "第04集$https://hnzy.bfvvs.com/play/mepP15Ne/index.m3u8$",
                "第05集$https://hnzy.bfvvs.com/play/9b6jQJlb/index.m3u8$",
                "第06集$https://hnzy.bfvvs.com/play/qaQRMELb/index.m3u8$"
            ]
        }
    ]
}
```

### 播放：

```
https://dm.xbqgx.com/?url=https://hnzy.bfvvs.com/play/RdGE0m7a/index.m3u8
```

## 方法二：

### 请求：

```
curl --location 'https://svip.bljiex.cc/api.php?out=json&url=https://v.qq.com/x/cover/mzc00200ct230h1/f0046zof4ze.html?j_vid=z0046yv00gg' \
--header 'Referer: https://svip.bljiex.cc/index.php?url=https://v.qq.com/x/cover/mzc00200ct230h1/f0046zof4ze.html' \

```
### 返回：

```
{
    "success": 1,
    "code": 200,
    "title": "灼灼风流",
    "part": "01",
    "url": "https://vip.kuaikan-cdn2.com/20230819/sEapqxTv/index.m3u8",
    "type": "hls",
    "info": [
        {
            "flag": "kuaikan",
            "flag_name": "BL高清D",
            "site": 7,
            "part": 12,
            "video": [
                "1$https://vip.kuaikan-cdn2.com/20230819/sEapqxTv/index.m3u8$kuaikan",
                "2$https://vip.kuaikan-cdn2.com/20230821/jQhQETRO/index.m3u8$kuaikan",
                "3$https://vip.kuaikan-cdn2.com/20230819/04cXwzTZ/index.m3u8$kuaikan",
                "4$https://vip.kuaikan-cdn2.com/20230819/uVoJjmqY/index.m3u8$kuaikan",
                "5$https://vip.kuaikan-cdn2.com/20230819/aO2RjjzW/index.m3u8$kuaikan",
                "6$https://vip.kuaikan-cdn2.com/20230819/NwcwbDko/index.m3u8$kuaikan",
                "7$https://vip.kuaikan-cdn2.com/20230821/PUahB0pZ/index.m3u8$kuaikan",
                "8$https://vip.kuaikan-cdn2.com/20230821/8DMZwFk2/index.m3u8$kuaikan",
                "9$https://vip.kuaikan-cdn2.com/20230821/a0fhVnhc/index.m3u8$kuaikan",
                "10$https://vip.kuaikan-cdn2.com/20230821/qZ3A8IMX/index.m3u8$kuaikan",
                "11$https://vip.kuaikan-cdn2.com/20230822/2U2KDQBO/index.m3u8$kuaikan",
                "12$https://vip.kuaikan-cdn2.com/20230822/1t1JOeCs/index.m3u8$kuaikan"
            ]
        }
    ]
}
```

### 播放：

```
https://dm.xbqgx.com/?url=https://vip.kuaikan-cdn2.com/20230819/sEapqxTv/index.m3u8
```
