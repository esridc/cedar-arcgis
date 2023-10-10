import{bG as e,bB as r,P as a,V as s,b as t,T as i,bN as l,U as c,bO as y,w as o,r as p,bP as n,bn as g,ap as d,l as h,y as m,bQ as b,aU as v,W as L,n as u,_ as S}from"./p-b54724b6.js";import{t as T}from"./p-a779e49b.js";import{f as M}from"./p-7572c366.js";async function f(r){if(!r)return;const a=r.includes("-vector")?r.slice(0,r.indexOf("-vector")):r,s=await e("esri/t9n/basemaps");return s[r]||s[a]}const G={streets:{id:"streets",classic:!0,deprecated:!0,get thumbnailUrl(){return r("esri/images/basemap/streets.jpg")},baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/hybrid.jpg")},baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json",layerType:"VectorTileLayer",title:"Hybrid Reference Layer",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",classic:!0,deprecated:!0,get thumbnailUrl(){return r("esri/images/basemap/topo.jpg")},baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",classic:!0,deprecated:!0,get thumbnailUrl(){return r("esri/images/basemap/gray.jpg")},baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",classic:!0,deprecated:!0,get thumbnailUrl(){return r("esri/images/basemap/dark-gray.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",classic:!0,deprecated:!0,get thumbnailUrl(){return r("esri/images/basemap/national-geographic.jpg")},baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",classic:!0,get thumbnailUrl(){return r("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"arcgis-imagery":{get thumbnailUrl(){return r("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{get thumbnailUrl(){return r("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return r("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return r("esri/images/basemap/dark-gray.jpg")},title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return r("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return r("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return r("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return r("esri/images/basemap/streets-relief.jpg")},title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return r("esri/images/basemap/topo.jpg")},title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return r("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]},"arcgis-human-geography":{title:"Human Geography",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Base",title:"Human Geography Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Detail",title:"Human Geography Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Label",title:"Human Geography Label",isReference:!0}]},"arcgis-human-geography-dark":{title:"Human Geography (Dark)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Base",title:"Human Geography Dark Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Detail",title:"Human Geography Dark Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Label",title:"Human Geography Dark Label",isReference:!0}]}};var I;let w=0;const U="esri.Basemap";let A=I=class extends(a(S)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+w++,this.baseLayers=new s,this.referenceLayers=new s;const r=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&t.getLogger(this).error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},a=e=>{e.parent=null};this.addHandles([this.baseLayers.on("after-add",(e=>r(e.item))),this.referenceLayers.on("after-add",(e=>r(e.item))),this.baseLayers.on("after-remove",(e=>a(e.item))),this.referenceLayers.on("after-remove",(e=>a(e.item)))])}initialize(){this.when().catch((e=>{t.getLogger(this).error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.baseLayers.removeAll();for(const r of e)r.destroy();const r=this.referenceLayers.removeAll();for(const e of r)e.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),this.portalItem?.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",i(e,this._get("baseLayers")))}_writeBaseLayers(e,r,a){const s=[];e?(a={...a,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const r=M(e,a.webmap?a.webmap.getLayerJSONFromResourceInfo(e):null,a);null!=r&&s.push(r)})),this.referenceLayers.forEach((e=>{const r=M(e,a.webmap?a.webmap.getLayerJSONFromResourceInfo(e):null,a);null!=r&&("scene"!==e.type&&(r.isReference=!0),s.push(r))})),r.baseMapLayers=s):r.baseMapLayers=s}set referenceLayers(e){this._set("referenceLayers",i(e,this._get("referenceLayers")))}writeTitle(e,r){r.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return T(this,(e=>{e(this.baseLayers,this.referenceLayers)}))}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.map((e=>l(e)?e.clone():e)),referenceLayers:this.referenceLayers.map((e=>l(e)?e.clone():e))};return this.loaded&&(e.loadStatus="loaded"),new I({resourceInfo:this.resourceInfo}).set(e)}read(e,r){this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),super.read(e,r)}write(e,r){return e=e||{},r&&r.origin||(r={origin:"web-map",...r}),super.write(e,r),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const r=c(e);return r.url&&y(r.url)&&(r.url=`https:${r.url}`),r.templateUrl&&y(r.templateUrl)&&(r.templateUrl=`https:${r.templateUrl}`),r}))),e}async _loadFromSource(e){const{resourceInfo:r,portalItem:a}=this;o(e);const s=[];if(r){const a=r.context?r.context.url:null;if(s.push(this._loadLayersFromJSON(r.data,a,e)),r.data.id&&!r.data.title){const e=r.data.id;s.push(f(e).then((e=>{e&&this.read({title:e},r.context)})))}}else a&&s.push(this._loadFromItem(a,e));await Promise.all(s)}async _loadLayersFromJSON(e,r,a){const s=this.resourceInfo&&this.resourceInfo.context,t=this.portalItem&&this.portalItem.portal||s&&s.portal||null,i=_[s?.origin||""]??"web-map",{populateOperationalLayers:l}=await import("./p-f5824c8c.js"),c=[];if(o(a),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const a={context:{origin:i,url:r,portal:t,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},s=e=>"web-scene"===i&&"ArcGISSceneServiceLayer"===e.layerType||e.isReference,y=l(this.baseLayers,e.baseMapLayers.filter((e=>!s(e))),a);c.push(y);const o=l(this.referenceLayers,e.baseMapLayers.filter(s),a);c.push(o)}await p(c)}async _loadFromItem(e,r){const a=await e.load(r),s=await a.fetchData("json",r),t=n(e.itemUrl??"");return this._set("resourceInfo",{data:s.baseMap??{},context:{origin:W[e.type||""]??"web-map",portal:e.portal||g.getDefault(),url:t}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:s.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||g.getDefault(),url:t}),this._loadLayersFromJSON(this.resourceInfo.data,t,r)}static fromId(e){const r=G[e];if(!r)return null;if(r.deprecated){let r=null;"dark-gray"===e?r="dark-gray-vector":"gray"===e?r="gray-vector":"streets"===e?r="streets-vector":"topo"===e&&(r="topo-vector"),d(t.getLogger(U),`The ${e} basemap has entered mature support and is no longer being updated.`,{replacement:r,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return I.fromJSON(r)}};h([m({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,r,a,s){this._writeBaseLayers(e,r,s)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:s}},writer(e,r,a,s){this._writeBaseLayers(e,r,s)}}}}}})],A.prototype,"baseLayers",null),h([m({type:String,json:{origins:{"web-scene":{write:!0}}}})],A.prototype,"id",void 0),h([m({type:b})],A.prototype,"portalItem",void 0),h([m()],A.prototype,"referenceLayers",null),h([m({readOnly:!0})],A.prototype,"resourceInfo",void 0),h([m({type:v})],A.prototype,"spatialReference",void 0),h([m()],A.prototype,"thumbnailUrl",void 0),h([m({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],A.prototype,"title",void 0),h([L("title")],A.prototype,"writeTitle",null),A=I=h([u(U)],A);const W={"Web Scene":"web-scene","Web Map":"web-map","Link Chart":"link-chart"},_={"web-scene":"web-scene","web-map":"web-map","link-chart":"link-chart"},k=A;const R=Object.freeze({__proto__:null,default:k});export{R as B,k as O,G as s};
//# sourceMappingURL=p-f7f8e6f9.js.map