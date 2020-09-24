/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

LCARS.templates.sdk.bracket = {
	typeA:{type:'wrapper', class:'sdk bracket typeA', children:[
			{type:'wrapper', class:'content'},
			{type:'elbow', version:'top-left', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
			{type:'elbow', version:'top-right', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
			{type:'elbow', version:'bottom-left', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},	
			{type:'elbow', version:'bottom-right', size:'small', color:'bg-', children:[{type:'bar'}], noEvent:true},        
			{type:'column', flex:'v', children:[
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-', children:[{type:'bar', color:'bg-'}]},
				{type:'bar', flexC:'v', color:'bg-'}                     
			]},
			{type:'column', flex:'v', children:[
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-'}                     
			]},
			{type:'column', flex:'v', children:[
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-', children:[{type:'bar', color:'bg-'}]},
				{type:'bar', flexC:'v', color:'bg-'}                     
			]},
			{type:'column', flex:'v', children:[
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-'},
				{type:'bar', flexC:'v', color:'bg-'}                     
			]}
		]
	}                
};