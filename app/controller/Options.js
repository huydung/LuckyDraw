Ext.define('LuckyDraw.controller.Options', {
    extend: 'Ext.app.Controller',
    storeName: 'Options',
    requires: ['Ext.MessageBox'],
    config: {
        
        refs: {
            txtNewOption: 'textfield[name=newOptionField]',
            btnClear: 'button[action=clearOptionsList]',
            optionsList: 'dataview[baseCls=optionsList]',
            tabDrawButton: 'tabbar button[iconCls=team]',
            lblStatNumberTotal: 'DrawPage container[cls=stat-total] label[cls=stat-number]',
            lblStatNumberSelected: 'DrawPage container[cls=stat-selected] label[cls=stat-number]',
            tabPanel: 'tabpanel',
            btnDrawWinner: 'button[action=drawNewWinner]'
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
            },
            tabPanel: {
                activeitemchange: function(container, newValue, oldValue) {
                    console.log(newValue);
                    console.log(newValue.getCls()[0]);
                    if( newValue.getCls()[0] == 'tabDraw' ) {
                        this.getTabDrawButton().setBadgeText('');
                    } else {
                        this.updateViewsAboutStoreItems();
                    }
                },
                scope: this
            },
            btnDrawWinner: {
                tap: 'drawNewWinner'
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

    formatNumber: function(number){
        return (number < 10 ? '0' : '') + number;
    },

    drawNewWinner: function(){
        var store = Ext.getStore(this.storeName);
        //Filter only the unselected options
        var unselectedOptions = store.queryBy(function(record){
            return record.get('selected') == false;
        });
        var unselectedCount = unselectedOptions.length;
        console.log(unselectedOptions);
        if( unselectedCount == 0 ) {
            Ext.Msg.alert('Ooops', 'All options has been selected! Please consider add more options :)');
        } else {
            var selectedIndex = Math.floor(Math.random() * unselectedCount);
            console.log('Selected Index: ' + selectedIndex);

            var id = unselectedOptions.getAt(selectedIndex).getId();
            console.log('Selected ID: ' + id);

            var record = store.getById(id);
            if( typeof record != 'undefined' ) {
                record.set('selected', true);
                record.save();
            };

            store.sync();
            this.getOptionsList().refresh();
        }      
        return false;
    },

    /***************
    *** UTILITIES METHODS
    ***************/
    updateViewsAboutStoreItems: function() {
        var store = Ext.getStore(this.storeName);
        console.log('updateViewsAboutStoreItems called!');
        if( typeof store != 'undefined' ) {
            var str = '';
            if( this.getTabPanel().getActiveItem().getCls()[0] != 'tabDraw' ) {
                if( store.getAllCount() != 0 ) {
                    str += store.getSelected() + '/' + store.getAllCount();
                }
            }
            
            this.getLblStatNumberTotal().setHtml( this.formatNumber(store.getAllCount()) );
            this.getLblStatNumberSelected().setHtml( this.formatNumber(store.getSelected()) );
        
            
            var tabDrawButton = this.getTabDrawButton();
            //console.log(tabDrawButton);
            if( typeof tabDrawButton != 'undefined' ) {
                tabDrawButton.setBadgeText(str);
                //tabDrawButton.setBadgeCls('hdbadge');
            } else {
                console.log('WTF? Can not access tabDrawButton???');
            }
                
        }    
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        //console.log("Options Controller launched - 2");
        var store = Ext.getStore(this.storeName);
        store.load();
        store.on({
            addrecords: this.updateViewsAboutStoreItems,
            removerecords: this.updateViewsAboutStoreItems,
            updaterecord: this.updateViewsAboutStoreItems,
            clear: this.updateViewsAboutStoreItems,
            refresh: function(){ console.log('Need refresh DataView!!!'); },
            scope: this
        });
        this.updateViewsAboutStoreItems();
        

    },
    init: function(){
        //console.log("Options Controller inited - 1");
    }
});