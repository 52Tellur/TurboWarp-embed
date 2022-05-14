const showMessage = () => {
    const textbox = document.getElementById("URL");
    const inputValue = textbox.value;
    const TBwidth = document.getElementById("width");//text box width
    const inputWidth = TBwidth.value;
    const TBheight = document.getElementById("height");
    const inputHeight =TBheight.value;

    let parameters = "?";
    
    //ここからオプション
    let cloud=document.getElementById('cloud');
    if(cloud!="wss://clouddata.turbowarp.org"){
        parameters = parameters + cloud;
    }
    let autoplay=document.getElementById('autoplay');
    if (autoplay.checked){
        if (parameters == "?"){
            parameters = parameters + "autoplay";
        } else{
            parameters = parameters + "&autoplay";
        }
    }
    
    //出力するメッセージを生成 合体！いったいどうなるんだー
    let output = "\<iframe src=\"https://turbowarp.org/" + inputValue + "/embed" + parameters + "\" width=\"" + inputWidth + "\" height=\"" + inputHeight + "\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" allowfullscreen\>\</iframe\>";

    //表示
    embed.innerHTML = output;

    //コード表示用に変換
    code = output.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g,'&quot').replace(/\//g,'&#047;').replace(/=/g,'&#061;');
    //出力
    embedcode.innerHTML = code;
  }
