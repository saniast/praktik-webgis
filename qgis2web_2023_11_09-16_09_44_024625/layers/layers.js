var wms_layers = [];

var format_Bus_Stops_0 = new ol.format.GeoJSON();
var features_Bus_Stops_0 = format_Bus_Stops_0.readFeatures(json_Bus_Stops_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_Stops_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bus_Stops_0.addFeatures(features_Bus_Stops_0);
var lyr_Bus_Stops_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bus_Stops_0, 
                style: style_Bus_Stops_0,
                interactive: true,
                title: '<img src="styles/legend/Bus_Stops_0.png" /> Bus_Stops'
            });
var format_Buildings_1 = new ol.format.GeoJSON();
var features_Buildings_1 = format_Buildings_1.readFeatures(json_Buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_1.addFeatures(features_Buildings_1);
var lyr_Buildings_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_1, 
                style: style_Buildings_1,
                interactive: true,
                title: '<img src="styles/legend/Buildings_1.png" /> Buildings'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_Bus_Stops_3 = new ol.format.GeoJSON();
var features_Bus_Stops_3 = format_Bus_Stops_3.readFeatures(json_Bus_Stops_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_Stops_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bus_Stops_3.addFeatures(features_Bus_Stops_3);
var lyr_Bus_Stops_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bus_Stops_3, 
                style: style_Bus_Stops_3,
                interactive: true,
                title: '<img src="styles/legend/Bus_Stops_3.png" /> Bus_Stops'
            });
var format_ServiceAreaND_6_DirtyAreas_4 = new ol.format.GeoJSON();
var features_ServiceAreaND_6_DirtyAreas_4 = format_ServiceAreaND_6_DirtyAreas_4.readFeatures(json_ServiceAreaND_6_DirtyAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaND_6_DirtyAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaND_6_DirtyAreas_4.addFeatures(features_ServiceAreaND_6_DirtyAreas_4);
var lyr_ServiceAreaND_6_DirtyAreas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaND_6_DirtyAreas_4, 
                style: style_ServiceAreaND_6_DirtyAreas_4,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaND_6_DirtyAreas_4.png" /> Service Area — ND_6_DirtyAreas'
            });
var format_ServiceAreaND_6_Roads_NA_SAI_5 = new ol.format.GeoJSON();
var features_ServiceAreaND_6_Roads_NA_SAI_5 = format_ServiceAreaND_6_Roads_NA_SAI_5.readFeatures(json_ServiceAreaND_6_Roads_NA_SAI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaND_6_Roads_NA_SAI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaND_6_Roads_NA_SAI_5.addFeatures(features_ServiceAreaND_6_Roads_NA_SAI_5);
var lyr_ServiceAreaND_6_Roads_NA_SAI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaND_6_Roads_NA_SAI_5, 
                style: style_ServiceAreaND_6_Roads_NA_SAI_5,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaND_6_Roads_NA_SAI_5.png" /> Service Area — ND_6_Roads_NA_SAI'
            });
var format_ServiceAreaRoads_NA_6 = new ol.format.GeoJSON();
var features_ServiceAreaRoads_NA_6 = format_ServiceAreaRoads_NA_6.readFeatures(json_ServiceAreaRoads_NA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaRoads_NA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaRoads_NA_6.addFeatures(features_ServiceAreaRoads_NA_6);
var lyr_ServiceAreaRoads_NA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaRoads_NA_6, 
                style: style_ServiceAreaRoads_NA_6,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaRoads_NA_6.png" /> Service Area — Roads_NA'
            });
var format_ServiceAreaKeputih_Dataset_ND_Junctions_7 = new ol.format.GeoJSON();
var features_ServiceAreaKeputih_Dataset_ND_Junctions_7 = format_ServiceAreaKeputih_Dataset_ND_Junctions_7.readFeatures(json_ServiceAreaKeputih_Dataset_ND_Junctions_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_7.addFeatures(features_ServiceAreaKeputih_Dataset_ND_Junctions_7);
var lyr_ServiceAreaKeputih_Dataset_ND_Junctions_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_7, 
                style: style_ServiceAreaKeputih_Dataset_ND_Junctions_7,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaKeputih_Dataset_ND_Junctions_7.png" /> Service Area — Keputih_Dataset_ND_Junctions'
            });

lyr_Bus_Stops_0.setVisible(true);lyr_Buildings_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_Bus_Stops_3.setVisible(true);lyr_ServiceAreaND_6_DirtyAreas_4.setVisible(true);lyr_ServiceAreaND_6_Roads_NA_SAI_5.setVisible(true);lyr_ServiceAreaRoads_NA_6.setVisible(true);lyr_ServiceAreaKeputih_Dataset_ND_Junctions_7.setVisible(true);
var layersList = [lyr_Bus_Stops_0,lyr_Buildings_1,lyr_Roads_2,lyr_Bus_Stops_3,lyr_ServiceAreaND_6_DirtyAreas_4,lyr_ServiceAreaND_6_Roads_NA_SAI_5,lyr_ServiceAreaRoads_NA_6,lyr_ServiceAreaKeputih_Dataset_ND_Junctions_7];
lyr_Bus_Stops_0.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_Buildings_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_Roads_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Bus_Stops_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_ServiceAreaND_6_DirtyAreas_4.set('fieldAliases', {'ObjectID': 'ObjectID', 'IsRetired': 'IsRetired', 'DirtyArea_Length': 'DirtyArea_Length', 'DirtyArea_Area': 'DirtyArea_Area', });
lyr_ServiceAreaND_6_Roads_NA_SAI_5.set('fieldAliases', {'OID': 'OID', 'SourceOID': 'SourceOID', 'TS1': 'TS1', 'TS2': 'TS2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ServiceAreaRoads_NA_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Shape_Length': 'Shape_Length', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_Bus_Stops_0.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_Buildings_1.set('fieldImages', {'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_leve': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_Roads_2.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_Bus_Stops_3.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_ServiceAreaND_6_DirtyAreas_4.set('fieldImages', {'ObjectID': '', 'IsRetired': '', 'DirtyArea_Length': '', 'DirtyArea_Area': '', });
lyr_ServiceAreaND_6_Roads_NA_SAI_5.set('fieldImages', {'OID': '', 'SourceOID': '', 'TS1': '', 'TS2': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ServiceAreaRoads_NA_6.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', 'Shape_Length': '', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_7.set('fieldImages', {'OBJECTID': '', });
lyr_Bus_Stops_0.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'header label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_Buildings_1.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'no label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_Roads_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Bus_Stops_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_ServiceAreaND_6_DirtyAreas_4.set('fieldLabels', {'ObjectID': 'no label', 'IsRetired': 'no label', 'DirtyArea_Length': 'no label', 'DirtyArea_Area': 'no label', });
lyr_ServiceAreaND_6_Roads_NA_SAI_5.set('fieldLabels', {'OID': 'no label', 'SourceOID': 'no label', 'TS1': 'no label', 'TS2': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_ServiceAreaRoads_NA_6.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', 'Shape_Length': 'no label', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_7.set('fieldLabels', {'OBJECTID': 'no label', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});