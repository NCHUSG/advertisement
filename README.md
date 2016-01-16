## TO 中興資訊部

如果您是中興資訊部的話  
就只要把`My personal settings`的那一段貼進網頁裏面就可以了  
要注意你是不是已經有引入過`jQuery`了  
如果有就不用重複引入了  

因為現在學生會有兩台server（我是21屆）  
我是把整個`advertisement`的`repo`都放在`debian81`這台上面  
然後`script`和`link`所讀取的路徑都是ad.nchusg.org/檔名 [try it](ad.nchusg.org)  
因為我幫`advertisement`綁了cname  
所以他可以用網址去抓`debian81`上面`advertisement`的資源  

如果有人更改完這個專案的話  
要記得去debian81的`advertisement`裏面下`git pull`  
這樣就會讓所有學生會的網頁都套用到你的設定  

而這個廣告所讀取的google spreadsheet在這：[spreadsheet](https://docs.google.com/spreadsheets/d/12Kg_gazD75Tq9ItucMXzxvttCWiRlLsGr_iulD3P5U0/edit#gid=0)  
按照慣例這些表單都是放在：資訊部/網站資源


## Usage

1. These are required and optional links: And you need to put `fancybox` directory into your repository.

* required:

```html
<!-- Add jQuery library -->
<script type="text/javascript" src="../lib/jquery-1.10.1.min.js"></script>

<!-- Add fancyBox main JS and CSS files -->
<script type="text/javascript" src="../source/jquery.fancybox.js?v=2.1.5"></script>
<link rel="stylesheet" type="text/css" href="../source/jquery.fancybox.css?v=2.1.5" media="screen" />
```

* optional:

```html
<!-- Add mousewheel plugin (this is optional) -->
<script type="text/javascript" src="../lib/jquery.mousewheel-3.0.6.pack.js"></script>

<!-- Add Button helper (this is optional) -->
<link rel="stylesheet" type="text/css" href="../source/helpers/jquery.fancybox-buttons.css?v=1.0.5" />
<script type="text/javascript" src="../source/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>

<!-- Add Thumbnail helper (this is optional) -->
<link rel="stylesheet" type="text/css" href="../source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" />
<script type="text/javascript" src="../source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>

<!-- Add Media helper (this is optional) -->
<script type="text/javascript" src="../source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>
```

2.Further reading:[fancybox](http://fancybox.net/)

3.My personal settings: These link were deployed on the server of NCHUSG and made by my self. It might not be stable and well enough, so if you want, just make these script by your self. And any pull request is welcome!!
* script and link:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="http://ad.nchusg.org/fancybox/source/jquery.fancybox.js?v=2.1.5"></script>
<link rel="stylesheet" type="text/css" href="http://ad.nchusg.org/fancybox/source/jquery.fancybox.css?v=2.1.5" media="screen" />
```

* css:

```html
<link rel="stylesheet" type="text/css" href="http://ad.nchusg.org/ad.css" />  
```

* html: put these tag wherever you want, cause they will be hiddened.

```html
<div style="display:none">      
  <a id="fancybox-manual-b" href="javascript:;">advertisement</a>
</div>          
```

* js:

```html
<script src="http://ad.nchusg.org/ad.js"></script>
```

5.If documents and my tutorial are all difficult to read, please check `fancybox/demo/index.html`. You will find how to do.

# Use Google sheet as your JSON backend

1. [Go to your google drive](https://drive.google.com/drive/#my-drive), open a (new) google sheet if you haven't, click "File" (檔案) => "Publish to the web" (發布到網路).
2. choose link (文件連結), and copy the string `<COPY_THIS_STRING>` below, This is your sheet's id.

```
https://docs.google.com/spreadsheets/d/<COPY_THIS_STRING>/pubhtml
```

3. Then the JSON URL is

```
https://spreadsheets.google.com/feeds/list/<PUT_THE_STRING_HERE>/<grid_id>/public/values?alt=json
```

Remember to replace `<PUT_THE_STRING_HERE>` to the string, and `<grid_id>` is the table of your spreadsheet, use `default` and it will always be the first one.
Use 1 means the first table, 2 the second.

## EXAMPLE

* Assume we get the following url, after pressing "Publish to the web" (發布到網路).

```
https://docs.google.com/spreadsheets/d/17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE/pubhtml
```


* Then the string is

```
17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE
```

* So the JSON URL is

```
https://spreadsheets.google.com/feeds/list/17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE/default/public/values?alt=json
```
