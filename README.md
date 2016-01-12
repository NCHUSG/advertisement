# Use Google sheet as your JSON backend

 1. [Go to your google drive](https://drive.google.com/drive/#my-drive), open a (new) google sheet if you haven't, click "File" (檔案) => "Publish to the web" (發布到網路)
 2. choose link (文件連結), and copy the string `<COPY_THIS_STRING>` below, This is your sheet's id.

        "https://docs.google.com/spreadsheets/d/<COPY_THIS_STRING>/pubhtml"

 3. Then the JSON URL is

        "https://spreadsheets.google.com/feeds/list/<PUT_THE_STRING_HERE>/<grid_id>/public/values?alt=json"

    Remember to replace `<PUT_THE_STRING_HERE>` to the string, and `<grid_id>` is the worksheet of your sheet, use `default` and it will always be the first one.

## EXAMPLE

 * If you get 

        "https://docs.google.com/spreadsheets/d/17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE/pubhtml"

    after "Publish to the web" (發布到網路)

 * Then the string is

        "17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE"

 * So the JSON URL is

        "https://spreadsheets.google.com/feeds/list/17F1pLjK_U92ROo1Y-etn68YXoda72Dm8GCBJYZlIWOE/default/public/values?alt=json"
