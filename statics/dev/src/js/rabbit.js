// Elevator
$(function() {
	
	$('.nav > li.dropdown').hover(
		function(){
			$(this).parent().addClass('open');
			$(this).attr('aria-expanded', true);
		},
		function(){
			$(this).parent().removeClass('open');
			$(this).attr('aria-expanded', false);
		}
	);
	
	$('.nav > li.dropdown.open > ul.dropdown-menu').hover(
		function(){
			$(this).parent().addClass('open');
			$(this).attr('aria-expanded', true);
		},
		function(){
			$(this).parent().removeClass('open');
			$(this).attr('aria-expanded', false);
		}
	);
	
	// $(window).scroll(function(){
	// 	var scrolltop=$(this).scrollTop();		
	// 	if(scrolltop>=100){		
	// 		$("#elevator_item").show();
	// 	}else{
	// 		$("#elevator_item").hide();
	// 	}
	// });
	$("#elevator_item").show();
	$("#elevator").click(function(){
		$("html,body").animate({scrollTop: 0}, 500);	
	});
	$(".qr").hover(function(){
		$(".qr-popup").show();
	},function(){
		$(".qr-popup").hide();
	});
	
	$.ajax({
		url: '/index.php?m=content&c=daodate',
		dataType: 'json',
		success: function(data){
			if (data !== null) {
				//var str1 = data.solar.year + '年 ' + data.solar.month + '月 ' + data.solar.day + '日 ' + ' 周' + data.solar.week + ' ' + data.solar.hour + ':' + data.solar.minute;
				var str2 = data.lunar.year + '年 ' + data.lunar.tg + '' + data.lunar.dz + '' + data.lunar.sx + '年  ' + data.lunar.month + '月 ' + data.lunar.day + '日 ';
				var str3 = data.daofestival;
				$('#announ').html('道历' + str2 + '&nbsp;&nbsp;' + str3);
			}
		}
	});
});