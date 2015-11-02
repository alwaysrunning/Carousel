// 1、给JQuery类本身添加方法
/*jQuery.foo=function(){
	alert('hello')
	};
jQuery.bar=function(para){
	alert(para)
	}	*/


// 1、给JQuery添加方法
/*	
jQuery.extend({
   foo: function(){
	alert('hello')
	},
   bar: function(para){
	alert(para)
	}	
})	*/

//通过这个技巧（使用独立的插件名），我们可以避免命名空间内函数的冲突。
/*jQuery.myPlugin={
   foo: function(){
	  alert('hello')
	},
   bar: function(para){
	alert(para)
	}	
}
$.myPlugin.foo();         
$.myPlugin.bar('baz');*/ 





// 2、给JQuery对象添加方法
/*;(function($){
$.fn.extend({        
     alertWhileClick: function(){       
         $(this).click(function(){      
              alert($(this).val());       
          });       
      }       
  }); 	
})(jQuery)*/


/*;(function($){
$.fn.alertWhileClick=function(){
	$(this).click(function(){
		alert($(this).html())
		})
	}	
}(jQuery))


;(function($){
 $.fn.extend({
	 fontChange: function(options){
	     var defaults={
			 fontSize: 12,
			 fontColor: 'red',
			 height:  23,
			 backGround: 'blue',
			 }
		var settings = $.extend(defaults,options)
	    console.log(this)
		return $(this).css({'fontSize':settings.fontSize,'color':settings.fontColor,'height':settings.height,'backgroundColor':settings.backGround})	 	 
	 }
  })
}(jQuery))
*/
     
;(function($){
  $.fn.extend({
	 slider:function(options){
		 var defaults = {
		   obj   :   '#scroll',
		   speed  :    3000,
		   auto:      true,
		   scrollNums : 2,
		   direction : "left"
		 }
		 var timeId;
		 var len = $('#scroll a').length;
		 var settings = $.extend(defaults,options)
		 var width = $('#scroll a').width()
		 var auto  = settings.auto
		 var scrollNums  = settings.scrollNums
		 var direction = settings.direction=="left" ? true : false
		 if(auto){
		 	 if(!direction){
                $('#scrollF').hover(function(){
		          timeId && clearInterval(timeId)
		        },function(){
		           timeId = setInterval(scrollright,settings.speed)
	            }).trigger('mouseleave') 
		 	 }else{
		 	 	$('#scrollF').hover(function(){
		          timeId && clearInterval(timeId)
		        },function(){
		           timeId = setInterval(scrollleft,settings.speed)
	            }).trigger('mouseleave') 
		 	 }			 
	    }else{
			 timeId && clearInterval(timeId)	 
		}
		 
		$('#leftArrow').click(function(){
		    if($('#scroll a').is(':animated')){$('#scroll a').stop(true,true);}
		    setTimeout(scrollleft,0)
	    })
	    $('#rightArrow').click(function(){
		  if($('#scroll a').is(':animated')){$('#scroll a').stop(true,true)} 
           setTimeout(scrollright,0)		  
	    })	
		var Arr = [];
		for(var i=0; i<len; i++){
           var nums = width*(i-1) 
		   Arr.push(nums)
		}
		$('#scroll a').each(function(i){
			$(this).css('left',Arr[i])
		})

		function scrollleft(){
		     $('#scroll a').each(function(){
			  var left = parseInt($(this).css('left'))
			  if(left<=-width){$(this).css('left',parseInt($(this).css("left"))+width*len)}	  
			  $(this).animate({left:parseInt($(this).css('left'))-width*scrollNums},'slow')}
		      )
	     }
	     function scrollright(){
		    $('#scroll a').each(function(){
			   var left = parseInt($(this).css('left'))
			if(left>=width*(len-scrollNums)){$(this).css('left',parseInt($(this).css('left'))-width*len)}
			$(this).animate({left:parseInt($(this).css('left'))+width*scrollNums},'slow')
		  })
	     }
	 }
  })	
}(jQuery))















