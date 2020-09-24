function getChars() {
    var arr = {};
    $.ajax({
        type: "GET",
        url: "get_all_characters.php",
        dataType: "json",
        success: function(json_data) {
            $.each(json_data, function(id) {
                // console.log(JSON.stringify(this)); // DEBUG
                arr[id] = this;
            });
        },
        async: false
    });
    return arr;
};

function drawChars(listChars) {
    $.each(listChars, function(id) {
        var elem = {type:'htmlTag', tag:'a', flexC:'h', class:'charSelect', attrs:[{attr:'href', value:'crew.php?id='+id}], style:'width:240px; margin-right:10px; margin-bottom:10px; float:left; display:block;', children:[
            {type:'htmlTag', tag:'div', flexC:'h', style:'width:240px; float:left; display:block;', children:[
                {type:'htmlTag', tag:'div', flexC:'h', style:'width:240px; height:230px; border: solid '+getBorderColour(this.faction)+'; border-width: 5px 10px; position:relative;', children:[
                    {type:'img', src:'images/'+this.photo, style:'width:220px; height:220px;'},
                    {type:'img', src:'images/icons/careers/'+getCareer(this.career, "short")+'_'+getFaction(this.faction, "short")+'.png', style:'width:26px; height:26px; position:absolute; top:5px; left:5px;'},
                    {type:'img', src:'images/icons/recruit/'+getRecruit(this.recruit, false)+'.png', style:'width:26px; height:26px; position:absolute; top:5px; left:190px;'}
                ]},
                {type:'htmlTag', tag:'h3', style:'text-align:center; margin-bottom:0px;', color:'text-voy-yellow-1', text:this.fName+' '+this.lName+' ('+this.level+')'},
                {type:'htmlTag', tag:'h4', style:'text-align:center; margin-bottom:0px;', color:'text-voy-grey-1', text:getPrefix(this.sPref)+this.sName},
            ]},
        ]};
        $(elem).createObject({appendTo:'#charSelectList'});
    });

}
