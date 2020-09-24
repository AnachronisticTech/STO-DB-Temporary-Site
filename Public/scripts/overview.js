function getStats(table) {
    var arr = {};
    $.ajax({
        type: "POST",
        data: {'table': table},
        url: "get_all_stats.php",
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

function drawStats(listStats, narrow) {
    $.each(listStats, function(id) {
        var elem = {type:'row', flex:'h', style:'min-height:0px; margin-bottom:0px;', id:''+id , children:[
            {type:'column', flex:'v', flexC:'h', style:'min-height:0px; margin-bottom:8px; max-width:230px;', children:[
                {type:'htmlTag', tag:'h4', color:'text-voy-grey-1', text:this.fName+' '+this.lName+' ('+this.level+')'},
            ]},
            {type:'column', flex:'v', flexC:'h', style:'min-height:0px; margin-bottom:8px; max-width:230px;', children:[
                {type:'htmlTag', tag:'h4', color:'text-voy-grey-1', text:getPrefix(this.sPref)+this.sName},
            ]},
        ]};
        $(elem).createObject({appendTo:'#charOverview'});
        populateStats(id, this.stats, narrow);
    });
}

function populateStats(id, data, narrow) {
    $.each(data, function() {
        if (narrow) {
            $({type:'column', flex:'v', flexC:'h', style:'min-height:0px; margin-bottom:8px; max-width:64px;', children:[
                {type:'htmlTag', tag:'h4', color:'text-voy-grey-1', style:'text-align:center;', text:''+this},
            ]}).createObject({appendTo: '#'+id});
        } else {
            $({type:'column', flex:'v', flexC:'h', style:'min-height:0px; margin-bottom:8px;', children:[
                {type:'htmlTag', tag:'h4', color:'text-voy-grey-1', text:''+this},
            ]}).createObject({appendTo: '#'+id});
        }
    });
}
