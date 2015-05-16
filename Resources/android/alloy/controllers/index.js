function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId10() {
        $.__views.index.removeEventListener("open", __alloyId10);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId5 = {
                title: "Save",
                id: "__alloyId4"
            };
            $.__views.__alloyId4 = e.menu.add(_.pick(__alloyId5, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId4.applyProperties(_.omit(__alloyId5, Alloy.Android.menuItemCreateArgs));
            save ? $.__views.__alloyId4.addEventListener("click", save) : __defers["$.__views.__alloyId4!click!save"] = true;
            var __alloyId7 = {
                title: "Reset to default",
                id: "__alloyId6"
            };
            $.__views.__alloyId6 = e.menu.add(_.pick(__alloyId7, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId6.applyProperties(_.omit(__alloyId7, Alloy.Android.menuItemCreateArgs));
            resetToOriginal ? $.__views.__alloyId6.addEventListener("click", resetToOriginal) : __defers["$.__views.__alloyId6!click!resetToOriginal"] = true;
            var __alloyId9 = {
                title: "Return To saved",
                id: "__alloyId8"
            };
            $.__views.__alloyId8 = e.menu.add(_.pick(__alloyId9, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId8.applyProperties(_.omit(__alloyId9, Alloy.Android.menuItemCreateArgs));
            returnToSaved ? $.__views.__alloyId8.addEventListener("click", returnToSaved) : __defers["$.__views.__alloyId8!click!returnToSaved"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function save() {
        file.write($.textAreaFTW.value);
    }
    function returnToSaved() {
        $.textAreaFTW.value = file.read().text;
        refresh();
    }
    function resetToOriginal() {
        $.textAreaFTW.value = defaultHTML;
        refresh();
    }
    function refresh() {
        $.WebView.setHtml($.textAreaFTW.value);
        $.WebView.reload();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        title: "Editor",
        id: "__alloyId1"
    });
    $.__views.textAreaFTW = Ti.UI.createTextArea({
        id: "textAreaFTW",
        width: "100%",
        height: "80%",
        color: "Black"
    });
    $.__views.__alloyId1.add($.__views.textAreaFTW);
    $.__views.editorTab = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "editorTab",
        title: "Editor",
        icon: "pencil_64.png"
    });
    __alloyId0.push($.__views.editorTab);
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        title: "Preview",
        id: "__alloyId2"
    });
    $.__views.WebView = Ti.UI.createWebView({
        id: "WebView",
        scalesPageToFit: "true",
        height: "75%"
    });
    $.__views.__alloyId2.add($.__views.WebView);
    $.__views.previewTab = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        id: "previewTab",
        title: "Preview",
        icon: "monitor_64.png"
    });
    __alloyId0.push($.__views.previewTab);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        backgroundColor: "black",
        navBarHidden: "true",
        id: "index"
    });
    $.__views.index.addEventListener("open", __alloyId10);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    const defaultHTML = "<html><body><h1>TODO: Write Your own code here!!</h1></body></html>";
    var file;
    file = Ti.Filesystem.isExternalStoragePresent() ? Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, "test.html") : Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "test.html");
    if (file.exists) {
        (null == file.read().text || "" == file.read().text) && file.write(defaultHTML);
        $.WebView.setHtml(file.read().text);
        $.WebView.reload();
    } else {
        file.createFile();
        file.write(defaultHTML);
        $.WebView.setHtml(defaultHTML);
        $.WebView.reload();
    }
    $.textAreaFTW.value = $.WebView.html;
    $.previewTab.addEventListener("click", refresh);
    $.index.open();
    __defers["$.__views.__alloyId4!click!save"] && $.__views.__alloyId4.addEventListener("click", save);
    __defers["$.__views.__alloyId6!click!resetToOriginal"] && $.__views.__alloyId6.addEventListener("click", resetToOriginal);
    __defers["$.__views.__alloyId8!click!returnToSaved"] && $.__views.__alloyId8.addEventListener("click", returnToSaved);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;