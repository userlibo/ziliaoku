        var bannerSwiper = new Swiper ('#banner', {
          loop: true, // 循环模式选项
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });

        $(document).ready(function() {
            var blw=$("#myscrollbox li").outerWidth(true);
            //获取单个子元素所需宽度
            var liArr = $("#myscrollbox ul").children("li");
            //获取子元素数量
            var mysw = $("#myscroll").width();
            //获取子元素所在区域宽度
            var mus = parseInt(mysw/blw);
            //计算出需要显示的子元素的数量
            var length = liArr.length-mus;
            //计算子元素可移动次数（被隐藏的子元素数量）
            var i=0;
            $("#right").click(function(){
                i++;
                //点击i加1
                if(i<length){
                    $("#myscrollbox").css("left",-(blw*i));
                    //子元素集合向左移动，距离为子元素的宽度乘以i。
                }else{
                    i=length;
                    $("#myscrollbox").css("left",-(blw*length));
                    //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
                }
            });
            $("#left").click(function(){
                i--;
                //点击i减1
                if(i>=0){
                    $("#myscrollbox").css("left",-(blw*i));
                    //子元素集合向右移动，距离为子元素的宽度乘以i。
                }else{
                    i=0;
                    $("#myscrollbox").css("left",0);
                    //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
                }
            });
			
			
			var Accordion = function(el, multiple) {
			    this.el = el || {};
			    this.multiple = multiple || false;
			    var links = this.el.find('.link');
			    links.on('click', {
			        el: this.el,
			        multiple: this.multiple
			    },
			    this.dropdown)
			};
			Accordion.prototype.dropdown = function(e) {
			    var $el = e.data.el;
			    $this = $(this),
			    $next = $this.next();
			    $next.slideToggle();
			    $this.parent().toggleClass('open');
			    if (!e.data.multiple) {
			        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
                }
            };
			var accordion = new Accordion($('#accordion'), false);
			var accordion = new Accordion($('#m-accordion'), false);

        });  
			
		$('#suspension').on('click',function(){
			$('#m-mainnav').toggle();
		});		
		
		$('#sort-card').on('click',function(){
			$('.right-products-item').removeClass('list');
		});	
		
		$('#sort-list').on('click',function(){
			$('.right-products-item').addClass('list');
		});	
		
	  var recommendproduct = new Swiper ('#recommend-product', {
		slidesPerView: 'auto',
		slidesPerGroup: 5,
		navigation: {
			nextEl: '#tjcp-left',
			prevEl: '#tjcp-right'
		}
	  });
	  
	  var newestproduct = new Swiper ('#newest-product', {
	  		slidesPerView: 'auto',
	  		slidesPerGroup: 5,
	  		navigation: {
	  			nextEl: '#zxcp-left',
	  			prevEl: '#zxcp-right'
	  		}
	  });
	  
	  var insidedetailbanner = new Swiper ('.inside-detail-thumb .swiper-container', {
	    loop: true, // 循环模式选项
	    
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  });
	  
	  $(window).bind("load resize",function(){
	      if(document.documentElement.clientWidth < 900){
			  recommendproduct.destroy(false);
	          newestproduct.destroy(false);
			  if ( $("#isSwiper").length > 0 ) { 
				$("#isSwiper").removeClass("swiper-wrapper");
			  } 
			  if ( $("#isSwipers").length > 0 ) {
			  	$("#isSwipers").removeClass("swiper-wrapper");
			  } 
	      }else{
			  recommendproduct.init();
			  newestproduct.init();
			  if ( $("#isSwiper").length > 0 ) {
			  	$("#isSwiper").addClass("swiper-wrapper");
			  } 
			  if ( $("#isSwipers").length > 0 ) {
			  	$("#isSwipers").addClass("swiper-wrapper");
			  } 
		  }
	  });
	  
	   		$('.all-sort-list > .item').hover(function(){
	   			var eq = $('.all-sort-list > .item').index(this),				//获取当前滑过是第几个元素
	   				h = $('.all-sort-list').offset().top,						//获取当前下拉菜单距离窗口多少像素
	   				s = $(window).scrollTop(),									//获取游览器滚动了多少高度
	   				i = $(this).offset().top,									//当前元素滑过距离窗口多少像素
	   				item = $(this).children('.item-list').height(),				//下拉菜单子类内容容器的高度
	   				sort = $('.all-sort-list').height();						//父类分类列表容器的高度
	   			
	   			if ( item < sort ){												//如果子类的高度小于父类的高度
	   				if ( eq == 0 ){
	   					$(this).children('.item-list').css('top', (i-h));
	   				} else {
	   					$(this).children('.item-list').css('top', (i-h)+1);
	   				}
	   			} else {
	   				if ( s > h ) {												//判断子类的显示位置，如果滚动的高度大于所有分类列表容器的高度
	   					if ( i-s > 0 ){											//则 继续判断当前滑过容器的位置 是否有一半超出窗口一半在窗口内显示的Bug,
	   						$(this).children('.item-list').css('top', (s-h)+2 );
	   					} else {
	   						$(this).children('.item-list').css('top', (s-h)-(-(i-s))+2 );
	   					}
	   				} else {
	   					$(this).children('.item-list').css('top', 0 );
	   				}
	   			}	
	   
				$(this).addClass('hover');
	   			$(this).children('.item-list').fadeIn(800);

	   		},function(){
	   			$(this).removeClass('hover');
	   			$(this).children('.item-list').css('display','none');
	   		});

	   		$('.item > .item-list > .close').click(function(){
	   			$(this).parent().parent().removeClass('hover');
	   			$(this).parent().hide();
	   		});
			
			// $(".slideTxtBox").slide({});

			// 右侧导航
			$('#toTop').on('click',function(){
				$('html,body').animate({
					scrollTop: '0'
				},800)
			});