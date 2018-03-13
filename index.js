var express = require("express")
var app = express()
var BodyParser = require("body-parser")
var mongoose = require("mongoose")
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({
	extended:true
}))



mongoose.Promise = global.Promise

mongoose.connect("mongodb://127.0.0.1:27017/enjoy")
		// 现在mongoose可以直接调用then方法了 表示连接上数据库
	.then(function(db){
		//连接上后的提示信息  
		//现在已经连接上数据库 但是添加模型骨架（schema）建立映射才能构建  创建一个schema文件夹
		console.log("success connect mongodb in enjoy")
	})
var products = require("./module/products.js")
var findcarousels = require("./module/findcarousels.js")
var details = require("./module/Detalis.js")





// 测试
app.post('/api/get',function(req,res) {
	res.json({
		code:0,
		msg:"OK!"
	})
})

//城市请求
app.post('/api/headercity',function(req,res){
	res.json({
		code:0,
		message:city
	})
})
app.post('/api/initdata',function(req,res){
	products.find(function(err,doc){
		res.json({
			code:0,
			msg:doc
		})
	})
})

//admin 设置
app.post('/api/getcitydata',function(req,res){
	let {id} = req.body
	var p = new products({
		group_section:req.body.group_section,
		tabs:req.body.tabs


	})
	p.save(function(err,doc){
		if(err){
			console.log(err)
		}
		products.find(function(err,doc){
			res.json({
				code:0,
				msg:doc
			})
		})
	})
	
	

})

//设置轮播图
app.post('/api/getfindcarousel',function(req,res){
	var p = new findcarousels({
		img:req.body.img,
		text1:req.body.text1,
		text2:req.body.text2,
		text3:req.body.text3
	})
	p.save(function(err,doc){
		if(err){
			console.log(err)
		}
		findcarousels.find(function(err,doc){
			res.json({
			code:0,
			msg:doc
		})		
		})
	})
	
})
//find获取轮播图资源
app.post('/api/initfindcarousel',function(req,res){
	findcarousels.find(function(err,doc){
		res.json({
			code:0,
			msg:doc
		})
	})
})


//详情请求
app.post('/api/savedetail',function(req,res){
	var p = new details({
		modules:req.body.modules,
		 basic:req.body.basic

	})
		p.save(function(err,doc){
		if(err){
			console.log(err)
		}
		details.find(function(err,doc){
			res.json({
			code:0,
			msg:doc
		})		
		})
	})

})
//详情页面拿到数据的请求

app.post('/api/initdetail',function(req,res){
	var id = req.body.id	
	details.find(function(err,doc){
		console.log(doc[0].basic.product_id,id)
		for(var i = 0 ;i<doc.length;i++){
			if(doc[i].basic.product_id == id){
				res.json({
					code:0,
					msg:doc[i]
				})
			}
		}
	/*	for(var i=1;i<doc.length;i++){
			if(id == doc[i].basic.product_id){
				return res.json({
					code:0,
					msg:doc[i]
				})	
			}else{
				res.json({
					code:1,
					msg:'aa'
				})
			}
		}*/
		
	})
})

	/*if( doc.basic.product_id){
				res.json({
				code:0,
				msg:doc
			})	
		}else{
			res.json({
				code:1,
				msg:'aa'
			})
		}*/









app.listen(8090,function(){
	console.log("connect success")
})


// city:
var city = ['上海','北京','南京','天津','广州','成都','杭州','深圳','苏州','西安','重庆','长沙']