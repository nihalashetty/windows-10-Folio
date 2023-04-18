function isDialogOpen () {
    var anyDialogOpen = false;
    $('.ui-dialog-content').each(function() {
        if ($(this).dialog('isOpen')) {
            anyDialogOpen = true;
        }
    });

    console.log(anyDialogOpen);
    return anyDialogOpen;
}

$(document).on('dblclick', '#mydoc', function() {
    $(` 
        <div>
            <div id="dialog-static">
                <div><span class="ui-icon ui-icon-arrow-1-w"></span></div>
                <div><span class="ui-icon ui-icon-arrow-1-e"></span></div>
                <div><span class="ui-icon ui-icon-arrow-1-n"></span></div>
                <div class="search-bar path"><p>This PC > Nihal A Shetty > Front End Develoer > Valtech India</p></div>
                <div class="search-bar search"><p>Search</p></div>
            </div>
            <div id="mydoccontents">
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">Blender</p>
                </div>
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">FEH</p>
                </div>
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">Folio 2.0</p>
                </div>
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">Hybris</p>
                </div>
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">Pictures</p>
                </div>
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">React Projects</p>
                </div>
                <div id="abtme">
                    <div class="screenicon" id="file"></div>
                    <p class="icon-name">About Me</p>
                </div>
            </div>
        </div>
    `)
    .dialog({
        "title" : "My Documents",
        minWidth : 400,
        minHeight: 300,
        position: {
            my: isDialogOpen() ? 'center+40' : 'center',
            at: isDialogOpen() ? 'bottom' : 'center',
            of: window
        }
    //"buttons" : { "OK" : function(){ $(this).dialog("close"); } }
    })
    .dialogExtend({
        "closable" : true,
        "maximizable" : true,
        "minimizable" : true,
        "dblclick" : "maximize",
        "titlebar" : "transparent",
        "minimizeLocation" : "left",
        "icons" : {
            "close" : "ui-icon-close",
            "maximize" : "ui-icon-arrowthick-2-ne-sw",
            "minimize" : "ui-icon-minusthick",
            "restore" : "ui-icon-newwin"
        },
        "load" : function(evt, dlg){ },
        "beforeCollapse" : function(evt, dlg){ },
        "beforeMaximize" : function(evt, dlg){ },
        "beforeMinimize" : function(evt, dlg){ },
        "beforeRestore" : function(evt, dlg){ },
        "maximize" : function(evt, dlg){ },
        "minimize" : function(evt, dlg){ },
        "restore" : function(evt, dlg){ }
    });
});

$("#mybin").on('dblclick', function() {
    $(` 
        <div>
            <div id="dialog-static">
                <div><span class="ui-icon ui-icon-arrow-1-w"></span></div>
                <div><span class="ui-icon ui-icon-arrow-1-e"></span></div>
                <div><span class="ui-icon ui-icon-arrow-1-n"></span></div>
                <div class="search-bar path"><p>This PC > bin</p></div>
                <div class="search-bar search"><p>Search</p></div>
            </div>
            <div id="mydoccontents">
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">Documentations</p>
                </div>
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">Ex Photos</p>
                </div>
                <div>
                    <div class="screenicon" id="folder"></div>
                    <p class="icon-name">Ex Photos</p>
                </div>
                <div>
                    <div class="screenicon" id="file"></div>
                    <p class="icon-name">Movie Script</p>
                </div>
                <div>
                    <div class="screenicon" id="pdf"></div>
                    <p class="icon-name">Tax</p>
                </div>
            </div>
        </div>
    `)
    .dialog({
        "title" : "My Documents",
        minWidth : 400,
        minHeight: 300,
        position: {
            my: isDialogOpen() ? 'center+40' : 'center',
            at: isDialogOpen() ? 'bottom' : 'center',
            of: window
        }
    //"buttons" : { "OK" : function(){ $(this).dialog("close"); } }
    })
    .dialogExtend({
        "closable" : true,
        "maximizable" : true,
        "minimizable" : true,
        "dblclick" : "maximize",
        "titlebar" : "transparent",
        "minimizeLocation" : "left",
        "icons" : {
            "close" : "ui-icon-close",
            "maximize" : "ui-icon-arrowthick-2-ne-sw",
            "minimize" : "ui-icon-minusthick",
            "restore" : "ui-icon-newwin"
        },
        "load" : function(evt, dlg){ },
        "beforeCollapse" : function(evt, dlg){ },
        "beforeMaximize" : function(evt, dlg){ },
        "beforeMinimize" : function(evt, dlg){ },
        "beforeRestore" : function(evt, dlg){ },
        "maximize" : function(evt, dlg){ },
        "minimize" : function(evt, dlg){ },
        "restore" : function(evt, dlg){ }
    });
});

//Resume File
$(document).on('dblclick', '#abtme', function() {
    $(` 
        <p>This is About Me</p>
    `)
    .dialog({
        "title" : "About Me",
        minWidth : 400,
        minHeight: 300,
        position: {
            my: isDialogOpen() ? 'center+40' : 'center',
            at: isDialogOpen() ? 'bottom' : 'center',
            of: window
        }
    //"buttons" : { "OK" : function(){ $(this).dialog("close"); } }
    })
    .dialogExtend({
        "closable" : true,
        "maximizable" : true,
        "minimizable" : true,
        "dblclick" : "maximize",
        "titlebar" : "transparent",
        "minimizeLocation" : "left",
        "icons" : {
            "close" : "ui-icon-close",
            "maximize" : "ui-icon-arrowthick-2-ne-sw",
            "minimize" : "ui-icon-minusthick",
            "restore" : "ui-icon-newwin"
        },
        "load" : function(evt, dlg){ },
        "beforeCollapse" : function(evt, dlg){ },
        "beforeMaximize" : function(evt, dlg){ },
        "beforeMinimize" : function(evt, dlg){ },
        "beforeRestore" : function(evt, dlg){ },
        "maximize" : function(evt, dlg){ },
        "minimize" : function(evt, dlg){ },
        "restore" : function(evt, dlg){ }
    });
});