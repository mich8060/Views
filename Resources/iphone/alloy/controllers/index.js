function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.setBackgroundColor("#000");
    var tabGroup = Titanium.UI.createTabGroup();
    var win1 = Titanium.UI.createWindow({
        title: "My Drilldown",
        backgroundColor: "#fff",
        tabBarHidden: true
    });
    var tab1 = Titanium.UI.createTab({
        title: "Tab 1",
        window: win1
    });
    var main_menu = Ti.UI.createTableView({
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
        scrollable: false
    });
    win1.add(main_menu);
    var firstItemRow = Ti.UI.createTableViewRow({
        hasChild: true
    });
    var firstItemLabel = Ti.UI.createLabel({
        left: 9,
        text: "This is the first option"
    });
    firstItemRow.add(firstItemLabel);
    main_menu.appendRow(firstItemRow);
    var secondItemRow = Ti.UI.createTableViewRow({
        hasChild: true
    });
    var secondItemLabel = Ti.UI.createLabel({
        left: 9,
        text: "This is the second option"
    });
    secondItemRow.add(secondItemLabel);
    main_menu.appendRow(secondItemRow);
    var thirdItemRow = Ti.UI.createTableViewRow({
        hasChild: true
    });
    var thirdItemLabel = Ti.UI.createLabel({
        left: 9,
        text: "This is the third option"
    });
    thirdItemRow.add(thirdItemLabel);
    main_menu.appendRow(thirdItemRow);
    var fourthItemRow = Ti.UI.createTableViewRow({
        hasChild: true
    });
    var fourthItemLabel = Ti.UI.createLabel({
        left: 9,
        text: "This is the fourth option"
    });
    fourthItemRow.add(fourthItemLabel);
    main_menu.appendRow(fourthItemRow);
    var sub_win1 = Ti.UI.createWindow({
        title: "Sub-Window 1"
    });
    var sub_table1 = Ti.UI.createTableView({
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    var sub_row1 = Ti.UI.createTableViewRow();
    var sub_label1 = Ti.UI.createLabel({
        left: 9,
        text: "This is a sub option!"
    });
    sub_row1.add(sub_label1);
    sub_table1.appendRow(sub_row1);
    sub_win1.add(sub_table1);
    var sub_win2 = Ti.UI.createWindow({
        title: "Sub-Window 2"
    });
    var sub_table2 = Ti.UI.createTableView({
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    var sub_row2 = Ti.UI.createTableViewRow();
    var sub_label2 = Ti.UI.createLabel({
        left: 9,
        text: "This is a sub option!"
    });
    sub_row2.add(sub_label2);
    sub_table2.appendRow(sub_row2);
    sub_win2.add(sub_table2);
    var sub_win3 = Ti.UI.createWindow({
        title: "Sub-Window 3"
    });
    var sub_table3 = Ti.UI.createTableView({
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    var sub_row3 = Ti.UI.createTableViewRow();
    var sub_label3 = Ti.UI.createLabel({
        left: 9,
        text: "This is a sub option!"
    });
    sub_row3.add(sub_label3);
    sub_table3.appendRow(sub_row3);
    sub_win3.add(sub_table3);
    var sub_win4 = Ti.UI.createWindow({
        title: "Sub-Window 4"
    });
    var sub_table4 = Ti.UI.createTableView({
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    var sub_row4 = Ti.UI.createTableViewRow();
    var sub_label4 = Ti.UI.createLabel({
        left: 9,
        text: "This is a sub option!"
    });
    sub_row4.add(sub_label4);
    sub_table4.appendRow(sub_row4);
    sub_win4.add(sub_table4);
    firstItemRow.addEventListener("click", function() {
        tab1.open(sub_win1);
    });
    secondItemRow.addEventListener("click", function() {
        tab1.open(sub_win2);
    });
    thirdItemRow.addEventListener("click", function() {
        tab1.open(sub_win3);
    });
    fourthItemRow.addEventListener("click", function() {
        tab1.open(sub_win4);
    });
    tabGroup.addTab(tab1);
    tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;