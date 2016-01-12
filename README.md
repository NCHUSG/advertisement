##Usage##

	1. Put `fancybox` directory into your repository.

	2.These are required links:
	

	3.Further reading:[fancybox](http://fancybox.net/)

	4.Template:
		*css:
		```
		.fancybox-custom .fancybox-skin {
		  box-shadow: 0 0 50px #222;
		}
		```

		*html:put these tag wherever you want, cause they will be hiddened.
		```
		<div style="display:none">      
		  <a class="fancybox" href="./images/nchuit.png" data-fancybox-group="gallery" title="Lorem ipsum dolor sit amet"><img src="./images/nchuit.png" alt="" /></a>
		</div>          
		```

		*js:
		```
		$('.fancybox').fancybox();
      $(".fancybox").click();
		```

	5.If documents and my tutorial are all difficult to read, please check `fancybox/demo/index.html`. You will find how to do.

# Use Google sheet as your JSON backend

 1. [Go to your google drive](https://drive.google.com/drive/#my-drive), open a (new) google sheet if you haven't, click "File" (檔案) => "Publish to the web" (發布到網路)
 2. choose link (文件連結), and copy the string `<COPY_THIS_STRING>` below, This is your sheet's id.

        "https://docs.google.com/spreadsheets/d/<COPY_THIS_STRING>/pubhtml"

 3. Then the JSON URL is

        "https://spreadsheets.google.com/feeds/list/<PUT_THE_STRING_HERE>/<grid_id>/public/values?alt=json"

    Remember to replace `<PUT_THE_STRING_HERE>` to the string, and `<grid_id>` is the table of your spreadsheet, use `default` and it will always be the first one.
    Use 1 means the first table, 2 the second.

## EXAMPLE

 * If you get 

        "https://docs.google.com/spreadsheets/d/17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE/pubhtml"

    after "Publish to the web" (發布到網路)

 * Then the string is

        "17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE"

 * So the JSON URL is

        "https://spreadsheets.google.com/feeds/list/17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE/default/public/values?alt=json"
