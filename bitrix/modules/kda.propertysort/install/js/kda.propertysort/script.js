var PRSortBtn = {
	Show: function(settings)
	{
		if(settings)
		{
			this.settings = settings;
		}

		var arPropertyID = this.settings.PROP_ID;		
		if(typeof arPropertyID == 'object')
		{
			for(var i=0; i<arPropertyID.length; i++)
			{
				var propId = arPropertyID[i];
				var tr = document.getElementById('tr_PROPERTY_'+propId);
				if(tr && tr.cells && !tr.getAttribute('sort_init'))
				{
					var url = "'/bitrix/admin/kda.propertysort/property_sort.php?lang="+this.settings.LANG_ID+"&IBLOCK_ID="+this.settings.IBLOCK_ID+"&IBLOCK_ELEMENT_ID="+this.settings.IBLOCK_ELEMENT_ID+"&IBLOCK_PROPERTY_ID="+propId+"'";
					tr.cells[0].innerHTML += '<a href="javascript:void(0)" class="property-sort-icon" onclick="PRSort.ShowPopup('+url+')" title="'+KDA_SORT_LINK+'"></a>';
					tr.setAttribute('sort_init', 1);
				}
			}
		}
	}
}

var PRSort = {
	ShowPopup: function(url)
	{
		var dialog = new BX.CAdminDialog({
			'content_url':url,
			'width':'600',
			'height':'500',
			'resizable':true
		});
		dialog.SetButtons([
			dialog.btnCancel,
			new BX.CWindowButton(
			{
				title: BX.message('JS_CORE_WINDOW_SAVE'),
				id: 'savebtn',
				name: 'savebtn',
				className: BX.browser.IsIE() && BX.browser.IsDoctype() && !BX.browser.IsIE10() ? '' : 'adm-btn-save',
				action: function () {
					this.disableUntilError();
					PRSort.Save();
				}
			})
		]);
		
		BX.addCustomEvent(dialog, 'onWindowRegister', function(){
			PRDrag.Init();
		});
		
		dialog.Show();
	},
	
	Up: function(link)
	{
		var parent = $(link).closest('.property-sort-item');
		var prev = parent.prev();
		parent.insertBefore(prev);
		return false;
	},
	
	Down: function(link)
	{
		var parent = $(link).closest('.property-sort-item');
		var next = parent.next();
		parent.insertAfter(next);
		return false;
	},
	
	Save: function()
	{
		var form = document.psortForm;
		if(form['PROPS[]'].length > 0)
		{
			var aGet = ['AJAX=Y'];
			var inputs = form.getElementsByTagName('input');
			for(var i=0; i<inputs.length; i++)
			{
				if(inputs[i].name && inputs[i].name.length > 0 && inputs[i].value && inputs[i].value.length > 0)
				{
					aGet.push(inputs[i].name+'='+inputs[i].value);
				}
			}
			
			BX.showWait();
			BX.ajax.post('/bitrix/admin/kda.propertysort/property_sort.php', aGet.join('&'), function(data){
				window.location.reload();
				BX.closeWait();
			});
		}
	}
}

var PRDrag = {
	dragging: null,
	emptyMove: null,
	findPlace: null,
	
	Init: function()
	{
		var obj = this;

		$(document.body).bind("mousemove", function(e) {
			obj.OnMouseMove(e);
		});
		
		$(document.body).bind("mouseup", function(){
			obj.OnMouseUp();
		});
		
		$(".property-sort-list .property-sort-item").bind("mousedown", function(e){
			obj.OnMouseDown(e, this);
		});
		
		$(".property-sort-list .property-sort-item .arrow_up").bind('click', function(e){
			PRSort.Up(this);
			return false;
		});
		
		$(".property-sort-list .property-sort-item .arrow_down").bind('click', function(e){
			PRSort.Down(this);
			return false;
		});
		
		$(".property-sort-list .property-sort-item .arrow_up, .property-sort-list .property-sort-item .arrow_down").bind("mousedown", function(e){
			e.preventDefault();
			return false;
		});
	},
	
	OnMouseMove: function(e)
	{
		if(this.dragging) 
		{
			if(!this.dragging.hasClass('draggable'))
			{
				this.dragging.addClass('draggable');
				
				var obj = this.dragging[0];
				this.places = [];
				var items = $(".property-sort-list .property-sort-item");
				for(var i=0; i<items.length; i++)
				{
					if(items[i]!=obj)
					{
						this.places.push({key: i, top: $(items[i]).offset().top + Math.round(items[i].offsetHeight / 2)});
					}
					else
					{
						this.currentItem = i;
					}
				}
				if(items[items.length-1]!=obj)
				{
					this.places.push({key: items.length, top: $(items[items.length-1]).offset().top + items[items.length-1].offsetHeight + 10});
				}
				this.cnt = items.length;
			}
			
			this.dragging.offset({
				top: e.pageY - this.diff.top,
				left: e.pageX - this.diff.left
			});
			
			var findPlace = false;
			for(var i=0; i<this.places.length; i++)
			{
				if((e.pageY > this.places[i].top - 10) && (e.pageY < this.places[i].top + 10))
				{
					findPlace = this.places[i].key;
					break;
				}
			}
			
			if(this.emptyMove && (findPlace===false || (findPlace!=this.findPlace)))
			{
				this.emptyMove.remove();
				this.emptyMove = null;
			}
			
			if(findPlace!==false)
			{
				if(!this.emptyMove)
				{
					if(findPlace < this.cnt)
					{
						this.emptyMove = $('<div class="property-sort-item property-sort-item-empty"></div>').insertBefore('.property-sort-list .property-sort-item:eq('+findPlace+')');
					}
					else
					{
						this.emptyMove = $('<div class="property-sort-item property-sort-item-empty"></div>').insertAfter('.property-sort-list .property-sort-item:eq('+(this.cnt-1)+')');
					}
					this.emptyMove.css({
						height: this.dragging[0].offsetHeight - 24
					});
				}
			}
			
			this.findPlace = findPlace;
		}
	},
	
	OnMouseDown: function(e, obj)
	{
		this.dragging = $(obj);
		this.dragging.css('z-index', 5);
		var offset = this.dragging.offset();
		this.diff = {
			top: e.pageY - offset.top,
			left: e.pageX - offset.left
		};
	},
	
	OnMouseUp: function()
	{
		if(this.dragging)
		{			
			if(this.findPlace!==false)
			{
				if(this.findPlace < this.cnt)
				{
					/*if(this.findPlace > currentItem)
					{
						this.findPlace--;
					}*/
					this.dragging.insertBefore('.property-sort-list .property-sort-item:eq('+this.findPlace+')');
				}
				else
				{
					this.dragging.insertAfter('.property-sort-list .property-sort-item:eq('+(this.cnt - 1)+')');
				}
				if(this.emptyMove)
				{
					this.emptyMove.remove();
				}
				this.findPlace = false;
			}
			
			this.dragging.css({top:'auto', left:'auto'});
			this.dragging.css('z-index', 'auto');
			this.dragging = null;
		}
		
		$('.property-sort-list .property-sort-item').removeClass('draggable');
	},
	
	GetBackground: function(item)
	{
		var items = $(".property-sort-list .property-sort-item");
		for(var i=0; i<items.length; i++)
		{
			if(items[i]==item) break;
		}
		if(i%2==0)
		{
			return '#e0e9ec';
		}
		else
		{
			return '#ffffff';
		}
	}
}