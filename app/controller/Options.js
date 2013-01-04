Ext.define('LuckyDraw.controller.Options', {
    extend: 'Ext.app.Controller',
    storeName: 'Options',
    config: {
        
        refs: {
            txtNewOption: 'textfield[name=newOptionField]',
            btnClear: 'button[action=clearOptionsList]'
        },
        control: {
            txtNewOption: {
                keyup: 'onTxtNewOptionKeyUp'
            },
            btnClear: {
                tap: 'onBtnClearTap'
            }
        }
    },

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
    
    onBtnClearTap: function() {
        var store = Ext.getStore(this.storeName);
        store.removeAll();
        store.sync();
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        //console.log("Options Controller launched");
        //var store = Ext.getStore(this.storeName);
        //store.load();
    },
    init: function(){
        //console.log("Options Controller inited");
    }
});