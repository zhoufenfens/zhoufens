Zepto(function($) {

    MobinWeaver.mobinAppStart(function(para) {
        console.log("initialize");

        MobinWeaver.UIScreen.setUIScreenOrientation(MobinWeaver.UIScreen.SCREEN_ORIENTATION_LANDSCAPE);
        
       $("#play").bind('click', function(event) {
         var firstvideo=document.getElementById("test1");
         if(firstvideo.paused){
             firstvideo.play();
         }else{
             firstvideo.pause();
         }
       });
       
       
       $("#playbutton").bind('tap', function(event) {
         var firstvideo=document.getElementById("test1");
            firstvideo.play();
            $(this).addClass('hide');
       });
       var progresshandler=function(e){
           if(e.loaded){
           console.log(e);
           }
       }
      document.getElementById("test1").addEventListener("progress",progresshandler,false);
      
        var slider5 = new Swipe(document.getElementById("slider5"), {
            callback : function() {
                    console.log("当前是第"+(slider5.getPos()+1)+"个视频");
                    $("#play").unbind("click");
                    $("#play").bind('click', function(event) {
                        if(slider5.getPos()==0){
                      var test1=document.getElementById("test1");
                      if(test1.paused){
                          test1.play();
                      }else{
                          test1.pause();
                      }
                      }else if(slider5.getPos()==1){
                    var test2=document.getElementById("test2");
                      if(test2.paused){
                          test2.play();
                      }else{
                          test2.pause();
                      }
                      }else if(slider5.getPos()==2){
                    var test3=document.getElementById("test3");
                      if(test3.paused){
                          test3.play();
                      }else{
                          test3.pause();
                      }
                      }else if(slider5.getPos()==3){
                    var test4=document.getElementById("test4");
                      if(test4.paused){
                          test4.play();
                      }else{
                          test4.pause();
                      }
                      }else if(slider5.getPos()==4){
                    var test5=document.getElementById("test5");
                      if(test5.paused){
                          test5.play();
                      }else{
                          test5.pause();
                      }
                      }
                    });
                    
                    $("#playbutton").unbind("tap");
                    $("#playbutton").bind('tap', function(event) {
                        if(slider5.getPos()==0){
                      var test1=document.getElementById("test1");
                             test1.play();
                             $(this).addClass('hide');
                      }else if(slider5.getPos()==1){
                    var test2=document.getElementById("test2");
                             test2.play();
                             $(this).addClass('hide');
                      }else if(slider5.getPos()==2){
                    var test3=document.getElementById("test3");
                             test3.play();
                             $(this).addClass('hide');
                      }else if(slider5.getPos()==3){
                    var test4=document.getElementById("test4");
                             test4.play();
                             $(this).addClass('hide');
                      }else if(slider5.getPos()==4){
                    var test5=document.getElementById("test5");
                             test5.play();
                             $(this).addClass('hide');
                      }
                    });
            }
        });
 /*       var slider3 = new Swipe(document.getElementById("slider3"));
        $("#slider3 ul li div").bind('singleTap', function() {
            console.log("slider3 tapped");
            $(this).find("img").remove();
            if ($(this).children("video").length != 0) {
                console.log("video exists");
                $(this).children("video").show();
            } else {
                var video = document.createElement("video");
                var src = document.createAttribute("src");
                var width = document.createAttribute("width");
                var height = document.createAttribute("height");
                var controls = document.createAttribute("controls");
                src = "videos/test1.mp4";
                width = 280;
                height = 220;
                controls = "controls";
                video.setAttribute("src", src);
                video.setAttribute("width", width);
                video.setAttribute("height", height);
                video.setAttribute("controls", controls);
                $(this).append(video);
                var pausehandler = function() {
                    console.log($(this));
                    $(this).hide();
                    var img = document.createElement("img");
                    var src = document.createAttribute("src");
                    var width = document.createAttribute("width");
                    var height = document.createAttribute("height");
                    src = "videos/1.jpg";
                    width = "280";
                    height = "220";
                    img.setAttribute("src", src);
                    img.setAttribute("width", width);
                    img.setAttribute("height", height);
                    console.log(img);
                    $("#slider3 ul li div").append(img);
                }
                video.addEventListener("pause", pausehandler, false);
            }
        });  */
        var videos = document.getElementsByTagName("video");
        $("#sliderprev").bind('tap', function(e) {
            console.log("tap prev");
            slider5.prev();
            e.preventDefault();

            for ( i = 0; i < videos.length; i++) {
                document.getElementsByTagName("video").item(i).pause();
            };
        });
        $("#slidernext").bind('tap', function(e) {
            console.log("tap next");
            slider5.next();
            e.preventDefault();

            for ( i = 0; i < videos.length; i++) {
                document.getElementsByTagName("video").item(i).pause();
            };
        });
/*
        $("#slider5 ul li div video").live("swipe", function(e) {
            console.log("single tap");
            console.log(e.target);
            console.log($(e.target).attr("src"));
            var thissrc = $(e.target).attr("src");
            var myarray = new Array();
            myarray = ["videos/test1.mp4", "videos/test2.mp4", "videos/test3.mp4", "videos/test4.mp4", "videos/test5.mp4"];
            for (var i = 0; i < myarray.length; i++) {
                if (thissrc == myarray[i]) {
                    var currentindex = i;
                }
            }
        //    console.log(currentindex);
            if (currentindex > 0 && currentindex < myarray.length - 1) {
          //      console.log(myarray[currentindex - 1]);
         //       console.log(myarray[currentindex + 1]);
         //       console.log($(e.target).parents("li").next());
         //       console.log($(e.target).parents("li").prev());
          //      console.log($(e.target).parents("li").next().find("video"));
                if ($(e.target).parents("li").next().find("video").attr("src") !== myarray[currentindex + 1]) {
                    var li = document.createElement("li");
                    var div = document.createElement("div");
                    var video = document.createElement("video");
                    var src = document.createAttribute("src");
                    var width = document.createAttribute("width");
                    var height = document.createAttribute("height");
                    var controls = document.createAttribute("controls");
                    var style = document.createAttribute("style");
                    var listyle = document.createAttribute("style");
                    src = myarray[currentindex + 1];
                    width = 300;
                    height = 220;
                    controls = "controls";
                    listyle = "display: table-cell; width: 320px; vertical-align: top";
                    video.setAttribute("src", src);
                    video.setAttribute("width", width);
                    video.setAttribute("height", height);
                    video.setAttribute("controls", controls);
                    li.setAttribute("style", listyle);
                    div.appendChild(video);
                    li.appendChild(div);
                    $(e.target).parents("li").after(li);
                }

            }

            if (currentindex == 0) {
                if ($(e.target).parents("li").next().find("video").attr("src") !== myarray[currentindex + 1]) {
                    var li = document.createElement("li");
                    var div = document.createElement("div");
                    var video = document.createElement("video");
                    var src = document.createAttribute("src");
                    var width = document.createAttribute("width");
                    var height = document.createAttribute("height");
                    var controls = document.createAttribute("controls");
                    var style = document.createAttribute("style");
                    var listyle = document.createAttribute("style");
                    src = myarray[currentindex + 1];
                    width = 300;
                    height = 220;
                    controls = "controls";
                    listyle = "display: table-cell; width: 320px; vertical-align: top";
                    video.setAttribute("src", src);
                    video.setAttribute("width", width);
                    video.setAttribute("height", height);
                    video.setAttribute("controls", controls);
                    li.setAttribute("style", listyle);
                    div.appendChild(video);
                    li.appendChild(div);
                    $(e.target).parents("li").after(li);
                }
            }

            if (currentindex == myarray.length - 1) {
                if ($(e.target).parents("li").prev().find("video").attr("src") !== myarray[currentindex - 1]) {
                    var li = document.createElement("li");
                    var div = document.createElement("div");
                    var video = document.createElement("video");
                    var src = document.createAttribute("src");
                    var width = document.createAttribute("width");
                    var height = document.createAttribute("height");
                    var controls = document.createAttribute("controls");
                    var style = document.createAttribute("style");
                    var listyle = document.createAttribute("style");
                    src = myarray[currentindex + 1];
                    width = 300;
                    height = 220;
                    controls = "controls";
                    listyle = "display: table-cell; width: 320px; vertical-align: top";
                    video.setAttribute("src", src);
                    video.setAttribute("width", width);
                    video.setAttribute("height", height);
                    video.setAttribute("controls", controls);
                    li.setAttribute("style", listyle);
                    div.appendChild(video);
                    li.appendChild(div);
                    $(e.target).parents("li").before(li);
                }

            }

        });
   */     

        $("#slider5 ul li div").live('swipeLeft', function() {
            if($(this).parent().next().length!=0){
                console.log($(this).parent().next());
            console.log("pause the video when swipe to left");
            console.log($(this).parent().next().find("video").attr("id"));
             $("#playbutton").removeClass('pauseimage');
            var videoname=$(this).parent().next().find("video").attr("id");
  /*          var videos = document.getElementsByTagName("video");
            for ( i = 0; i < videos.length; i++) {
                document.getElementsByTagName("video").item(i).pause();
            };   */
                $(this).find("video")[0].pause();
                document.getElementById(videoname).play();
    };
        });
        $("#slider5 ul li div").live('swipeRight', function() {
            if($(this).parent().prev().length!=0){
                console.log($(this).parent().prev());
            console.log("pause the video when swipe to right");
            console.log($(this).parent().prev().find("video").attr("id"));
             $("#playbutton").removeClass('pauseimage');
            var videoname=$(this).parent().prev().find("video").attr("id");
     /*       var videos = document.getElementsByTagName("video");
            for ( i = 0; i < videos.length; i++) {
                document.getElementsByTagName("video").item(i).pause();
            };   */
                $(this).find("video")[0].pause();
                document.getElementById(videoname).play();
    };
        });


    $("#changeskins select").bind('change', function() {
        console.log(this.value);
        function changeskins(color){
           document.body.style.background=color;
           document.getElementsByTagName("div").item().style.backgroundColor=color;
           document.getElementsByTagName("html").item().style.background=color;
           $(".direction").css("backgroundColor",color);
           $("#changeskins").css("backgroundColor",color);
           $("#videolist").find("div").css("background-color",color);
           $("p").css("backgroundColor",color);
           $("img").css("backgroundColor",color);
        };
       switch(this.value){
           case "red":changeskins("#ff6347")
           break;
           case "purple":changeskins("#da70d6")
           break;
           case "yellow":changeskins("#ffd700")
           break;
           case "green":changeskins("green")
           break;
           case "default":changeskins("#eeeec1")
           break;
           default :changeskin("#eeeec1");
       }
    });
    
    $("#playbutton").bind('click', function(event) {
       
    });
    $("#slider5 ul li div video").bind('tap', function(e) {
      console.log("tap this video");
      $("#playbutton").removeClass('hide');
      $("#playbutton").addClass('pauseimage');
      var thisid=$(e.target).attr("id");
      var test=document.getElementById(thisid);
      if(test.paused){
          test.play();
          $("#playbutton").removeClass('pauseimage');
      }else{
          test.pause();
          $("#playbutton").addClass('pauseimage');
      }
          });

    });

});
