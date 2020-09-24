function getStart(id) {
    var arr = {};
    $.ajax({
        type: "POST",
        data: {'id': id},
        url: "get_char_start_page.php",
        dataType: "json",
        success: function(json_data) {
            $.each(json_data, function(id) {
                arr[id] = this;
            });
        },
        async: false
    });
    return arr;
};

function getCaptain(id) {
    var arr = {};
    $.ajax({
        type: "POST",
        data: {'id': id},
        url: "get_captain.php",
        dataType: "json",
        success: function(json_data) {
            $.each(json_data, function(id) {
                arr[id] = this;
            });
        },
        async: false
    });
    return arr;
};

function createText(text) {
    var objList = [];
    rule =  {type:'row', flex:'h', flexC:'h', style:'min-height:0px; margin-bottom:8px;', children:[
                {type:'bar', version:'tiny', color:'bg-blue-4', noEvent:true, flexC:'h'}
            ]};
    // text = text.replace(/\[n\]/g, '\n');

    textList = text.split("[----]");

    var converter = new showdown.Converter();
    converter.setFlavor('original');
    htmlList = [];
    $.each(textList, function() {
        html = converter.makeHtml(this);
        html = html.replace(/<h1/g, '<h1 class="text-voy-yellow-1"');
        html = html.replace(/<h2/g, '<h2 class="text-voy-yellow-1"');
        html = html.replace(/<h3/g, '<h3 class="text-voy-yellow-1"');
        html = html.replace(/<p/g, '<p class="text-voy-grey-1" style="text-align:justify;"');
        html = html.replace(/<strong/g, '<strong style="display:inline; text-transform:none;"');
        html = html.replace(/<em/g, '<em style="display:inline; text-transform:none;"');
        html = html.replace(/<script>/g, '');
        html = html.replace(/<\/script>/g, '');
        htmlList.push(html);
    })

    $.each(htmlList, function() {
        elem = {type:'htmlTag', tag:'div', flexC:'h', children:''+this}
        objList.push(elem);
        objList.push(rule);
    });
    objList.pop();
    return objList;
};

function drawStart(list) {
    $.each(list, function() {
        $(this).createObject({appendTo:'#startContainer'});
    });
};

function drawText(box, destination) {
    $(box).createObject({appendTo:'#'+destination});
};

function addCaptain(id, json_data) {
    var elem = {
        type:'content',
        children:[
            {type:'htmlTag', tag:'div', flexC:'h', style:'padding-right:10px;', children:[
                {type:'htmlTag', tag:'div', flexC:'h', style:'margin-left:20px; float:right; max-width:305px;', children:[
                    {type:'bracket', template:LCARS.templates.sdk.bracket.typeA, children:[
                        {type:'img', src:'images/'+json_data.photo, style:'margin-left:25px; margin-right:25px; width:255px; height:255px;'}
                    ]},
                    {type:'htmlTag', tag:'h3', color:'text-voy-yellow-1', text:json_data.fName+' '+json_data.lName},
                    {type:'htmlTag', tag:'ul', children:[
                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Rank: '+getFactionRank(json_data.rank, json_data.faction)},
                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Species: '+getSpecies(json_data.species)},
                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Gender: '+getGender(json_data.gender)},
                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Age: '+json_data.age},
                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Career: '+getCareer(json_data.career, "long")},
                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Primary Specialisation: '+getPSpec(json_data.pSpec)},
                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Secondary Specialisation: '+getSSpec(json_data.sSpec)},
                        // if ($character["recruit"] != 0) {
                        //     {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Recruit: '.ucwords(getRecruit($character["recruit"])).''},
                        // }

                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Level: '+json_data.level},
                        {type:'htmlTag', tag:'li', color:'text-voy-grey-2', text:'Privacy: '+getPrivacy(json_data.privacy)},
                        {type:'row', flex:'h', style:'min-height:0px; margin-bottom:8px;', children:[
                            {type:'bar', version:'tiny', color:'bg-blue-4', noEvent:true, flexC:'h'},
                        ]},
                        {type:'row', flex:'h', style:'min-height:0px; margin-bottom:8px;', children:[
                            {type:'button', label:'Edit character', flexC:'h', style:'max-width:165px;/* margin-left:auto; margin-right:auto;*/', color:'bg-voy-yellow-1', click:function(){
                                window.location.href = 'edit.php?cid='+id+'&type=0';
                            }},
                            {type:'button', label:'Delete character', flexC:'h', style:'max-width:165px;', color:'bg-voy-yellow-1', click:function(){
                                window.location.href = 'delete.php?cid='+id+'&type=0';
                            }},
                        ]},
                    ]}
                ]},
                // if ($common["lName"] == NULL) {
                //     {type:'htmlTag', tag:'h2', color:'text-voy-yellow-1', text:''.addslashes($common["fName"]).''},
                // } else {
                //     {type:'htmlTag', tag:'h2', color:'text-voy-yellow-1', text:''.addslashes($common["lName"]).', '.addslashes($common["fName"]).' '.addslashes($common["mName"]).''},
                // }
                // if ($common["position"] != 0) {
                //     {type:'htmlTag', tag:'h3', color:'text-voy-grey-1', style:'margin-bottom:0px;', text:''.addslashes(getTitle($common["position"])).''},
                // }
                // if (($character["shipReg"] == NULL) || ($character["shipReg"] == '')) {
                //     {type:'htmlTag', tag:'h3', color:'text-voy-grey-1', text:''.getPrefix($character["shipPrefix"]).addslashes($character["shipName"]).''},
                // } else if (($character["shipRegPrefix"] == NULL) || ($character["shipReg"] == 0)) {
                //     {type:'htmlTag', tag:'h3', color:'text-voy-grey-1', text:''.getPrefix($character["shipPrefix"]).addslashes($character["shipName"]).' - '.$character["shipReg"].''},
                // } else {
                //     {type:'htmlTag', tag:'h3', color:'text-voy-grey-1', text:''.getPrefix($character["shipPrefix"]).addslashes($character["shipName"]).' - '.getRegPrefix($character["shipRegPrefix"])."-".$character["shipReg"].''},
                // }
                {type:'row', flex:'h', style:'min-height:0px; margin-bottom:8px;', children:[
                    {type:'bar', version:'tiny', color:'bg-blue-4', noEvent:true, flexC:'h'},
                ]},
                // {type:'htmlTag', tag:'p', color:'text-voy-grey-1', style:'text-align:justify;', text:''.parse($common["bio"], $db, $loginID).''},
                {type:'htmlTag', tag:'div', color:'text-voy-grey-1', style:'text-align:justify;', id:''+id+'-bio'},
                {type:'row', flex:'h', style:'min-height:0px; margin-bottom:8px;', children:[
                    {type:'bar', version:'tiny', color:'bg-blue-4', noEvent:true, flexC:'h'},
                ]},

            ]}
        ]
    }
    // return elem
    // iden = 'id'+id;
    visualGuide.visualGroups['id'+id] = elem;
    visualGuide.visualGroups['id'+id].text = createText(json_data.bio);
    console.log(visualGuide.visualGroups['id'+id].text);
    // $(elem).createObject({appendTo:'#charSelectList'});
}

function drawCharacter(id, array) {

}
