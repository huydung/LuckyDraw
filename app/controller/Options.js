Ext.define('LuckyDraw.controller.Options', {
    extend: 'Ext.app.Controller',
    storeName: 'Options',
    requires: ['Ext.MessageBox'],
    config: {
        
        refs: {
            txtNewOption: 'textfield[name=newOptionField]',
            btnClear: 'button[action=clearOptionsList]',
            optionsList: 'dataview[baseCls=optionsList]',
            tabDrawButton: 'tabbar button[iconCls=team]'
        },
        control: {
            txtNewOption: {
                keyup: 'onTxtNewOptionKeyUp',
                scope: this
            },
            btnClear: {
                tap: 'onBtnClearTap'
            },
            optionsList: {
                onItemDeleteRequest: 'onItemDeleteRequest',
                updatedata: 'updateDrawTabBadgeText'
            },
            tabDrawButton: {
                show: function(){ console.log('Button shown!'); }
            }
        }
    },

    //Add new item to the list
    onTxtNewOptionKeyUp: function(txtField, e, options) {        
        //console.log(e.event.keyCode);
        if( e.event.eventPhase == 1 && (e.event.keyCode === 13 || e.event.keyIdentifier === "Enter") ) {
            var store = Ext.getStore(this.storeName);
            var maxId = store.max('id');
            var newOption = Ext.create('LuckyDraw.model.Option', {
                id: maxId+1,
                timestamp: new Date(),
                name: txtField.getValue(),
                selected: false
            });
            newOption.save();
            store.add(newOption);
            //store.sort();
            store.sync();

            txtField.setValue('');
            txtField.focus();

            return false;
        };
    },
    
    //Delete one item from the list
    onItemDeleteRequest: function( record ) {
        //console.log(record);
        var store = Ext.getStore(this.storeName);
        store.remove(record);
        store.sync();
    },

    //Delete all item from the list
    onBtnClearTap: function() {
        Ext.Msg.confirm(
            'One second please...',
            'You\'re about to delete all the current options! Sure about that?',
            function(answer) {
                if( answer == 'yes' ) {
                    var store = Ext.getStore(this.storeName);
                    store.removeAll();
                    store.sync();
                }
            }, this
        );        
    },

    /***************
    *** UTILITIES METHODS
    ***************/
    updateDrawTabBadgeText: function() {
        var store = Ext.getStore(this.storeName);
        console.log('updateDrawTabBadgeText called!');
        if( typeof store != 'undefined' ) {
            var str = '';
            if( store.getAllCount() != 0 ) {
                str += store.getSelected() + '/' + store.getAllCount();
            }
            
            var tabDrawButton = this.getTabDrawButton();
            //console.log(tabDrawButton);
            if( typeof tabDrawButton != 'undefined' ) {
                tabDrawButton.setBadgeText(str);
                //tabDrawButton.setBadgeCls('hdbadge');
            }   
        }    
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        //console.log("Options Controller launched - 2");
        var store = Ext.getStore(this.storeName);
        store.load();
        store.on({
            addrecords: this.updateDrawTabBadgeText,
            removerecords: this.updateDrawTabBadgeText,
            refresh: this.updateDrawTabBadgeText,
            scope: this
        });
        this.updateDrawTabBadgeText();
        

    },
    init: function(){
        //console.log("Options Controller inited - 1");
    }
});