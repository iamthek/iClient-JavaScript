﻿require('../base');

/**
 * Class: FacilityAnalyst3DParameters
 * 最近设施分析参数基类。
 * 最近设施分析是指在网络上给定一个事件点和一组设施点，查找从事件点到设施点(或从设施点到事件点)以最小耗费能到达的最佳路径。
 * 设施点一般为学校、超市、加油站等服务设施；事件点为需要服务设施的事件位置。
 * 例如事件发生点是一起交通事故，要求查找在10分钟内能到达的最近医院，超过10分钟能到达的都不予考虑。此例中，事故发生地即是一个事件点，周边的医院则是设施点。
 * 最近设施查找实际上也是一种路径分析，因此对路径分析起作用的障碍边、障碍点、转向表、耗费等属性在最近设施分析时同样可设置。
 */
FacilityAnalyst3DParameters = SuperMap.Class({

    /**
     * APIProperty: event
     * {Number} 指定的弧段ID
     */
    edgeID: null,

    /**
     * APIProperty: nodeID
     * {Number}: 指定的结点ID
     */
    nodeID: null,

    /**
     * APIProperty: weightName
     * {String}: 指定的权值字段信息对象的名称
     */
    weightName: null,

    /**
     * APIProperty: isUncertainDirectionValid
     * {Boolean}: 指定不确定流向是否有效。指定为 true，表示不确定流向有效，遇到不确定流向时分析继续进行；指定为 false，表示不确定流向无效，遇到不确定流向将停止在该方向上继续查找
     */
    isUncertainDirectionValid: false,

    /**
     * Constructor: FacilityAnalyst3DParameters
     * 最近设施分析参数类构造函数。
     *
     * Parameters:
     * options - {Object} 可选参数。
     *
     * Allowed options properties:
     * event - {<SuperMap.Geometry.Point>/Integer} 事件点，一般为需要获得服务设施服务的事件位置，必设字段。
     * expectFacilityCount - {Integer} 要查找的设施点数量。默认值为1。
     * facilities - {Array(<SuperMap.Geometry.Point>/Number)} 设施点集合，一般为提供服务的服务设施位置，必设字段。
     * fromEvent - {Boolean} 是否从事件点到设施点进行查找。
     * isAnalyzeById - {Boolean} 事件点和设施点是否通过节点 ID 号来指定，默认为 false，即通过坐标点指定事件点和设施点。
     * maxWeight - {Number} 查找半径。单位与该类中 parameter 字段（交通网络分析通用参数）中设置的耗费字段一致。默认值为0，表示查找全网络。
     * parameter - {<TransportationAnalystParameter>} 交通网络分析通用参数。
     */
    initialize: function (options) {
        var me = this;
        if (!options) {
            return;
        }
        SuperMap.Util.extend(this, options);
    },

    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。
     */
    destroy: function () {
        var me = this;
        me.edgeID = null;
        me.nodeID = null;
        me.weightName = null;
        me.isUncertainDirectionValid = null;
    },

    CLASS_NAME: "FacilityAnalyst3DParameters"
});

module.exports = function (options) {
    return new FacilityAnalyst3DParameters(options);
};