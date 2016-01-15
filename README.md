##Usage##

1. These are required and optional links: And you need to put `fancybox` directory into your repository.

*required:
```
<!-- Add jQuery library -->
<script type="text/javascript" src="../lib/jquery-1.10.1.min.js"></script>

<!-- Add fancyBox main JS and CSS files -->
<script type="text/javascript" src="../source/jquery.fancybox.js?v=2.1.5"></script>
<link rel="stylesheet" type="text/css" href="../source/jquery.fancybox.css?v=2.1.5" media="screen" />
```

*optional:
```
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
'''
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="http://ad.nchusg.org/fancybox/source/jquery.fancybox.js?v=2.1.5"></script>
<link rel="stylesheet" type="text/css" href="http://ad.nchusg.org/fancybox/source/jquery.fancybox.css?v=2.1.5" media="screen" />
'''

* css:

```
<link rel="stylesheet" type="text/css" href="http://ad.nchusg.org/ad.css" />  
```

* html: put these tag wherever you want, cause they will be hiddened.

```html
<div style="display:none">      
  <a id="fancybox-manual-b" href="javascript:;">advertisement</a>
</div>          
```

* js:

```
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
