import{G as n}from"./p-9d842fd8.js";import{hydratedAdapter as t}from"./p-a709101a.js";import"./p-9f1a0adc.js";import"./p-b54724b6.js";function e(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function r(t){return n.extendedSpatialReferenceInfo(t)}function u(r,u){return n.clip(t,e(r),r,u)}function i(r,u){return n.cut(t,e(r),r,u)}function o(r,u){return n.contains(t,e(r),r,u)}function s(r,u){return n.crosses(t,e(r),r,u)}function a(r,u,i){return n.distance(t,e(r),r,u,i)}function c(r,u){return n.equals(t,e(r),r,u)}function f(r,u){return n.intersects(t,e(r),r,u)}function l(r,u){return n.touches(t,e(r),r,u)}function p(r,u){return n.within(t,e(r),r,u)}function d(r,u){return n.disjoint(t,e(r),r,u)}function w(r,u){return n.overlaps(t,e(r),r,u)}function h(r,u,i){return n.relate(t,e(r),r,u,i)}function m(r){return n.isSimple(t,e(r),r)}function g(r){return n.simplify(t,e(r),r)}function x(r,u=!1){return n.convexHull(t,e(r),r,u)}function y(r,u){return n.difference(t,e(r),r,u)}function j(r,u){return n.symmetricDifference(t,e(r),r,u)}function A(r,u){return n.intersect(t,e(r),r,u)}function D(r,u=null){return n.union(t,e(r),r,u)}function S(r,u,i,o,s,a){return n.offset(t,e(r),r,u,i,o,s,a)}function b(r,u,i,o=!1){return n.buffer(t,e(r),r,u,i,o)}function L(r,u,i,o,s,a){return n.geodesicBuffer(t,e(r),r,u,i,o,s,a)}function R(r,u,i=!0){return n.nearestCoordinate(t,e(r),r,u,i)}function T(r,u){return n.nearestVertex(t,e(r),r,u)}function V(r,u,i,o){return n.nearestVertices(t,e(r),r,u,i,o)}function v(n){return"xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent?.center??null:null}function z(t,e,r){if(null==t)throw new M;const u=t.spatialReference;if(null==(r=r??v(t)))throw new M;const i=t.constructor.fromJSON(n.rotate(t,e,r));return i.spatialReference=u,i}function E(t,e){if(null==t)throw new M;const r=t.spatialReference;if(null==(e=e??v(t)))throw new M;const u=t.constructor.fromJSON(n.flipHorizontal(t,e));return u.spatialReference=r,u}function H(t,e){if(null==t)throw new M;const r=t.spatialReference;if(null==(e=e??v(t)))throw new M;const u=t.constructor.fromJSON(n.flipVertical(t,e));return u.spatialReference=r,u}function I(r,u,i,o){return n.generalize(t,e(r),r,u,i,o)}function q(r,u,i){return n.densify(t,e(r),r,u,i)}function B(r,u,i,o=0){return n.geodesicDensify(t,e(r),r,u,i,o)}function C(r,u){return n.planarArea(t,e(r),r,u)}function G(r,u){return n.planarLength(t,e(r),r,u)}function P(r,u,i){return n.geodesicArea(t,e(r),r,u,i)}function k(r,u,i){return n.geodesicLength(t,e(r),r,u,i)}function F(r,u){return n.intersectLinesToPoints(t,e(r),r,u)}function J(t,e){n.changeDefaultSpatialReferenceTolerance(t,e)}function K(t){n.clearDefaultSpatialReferenceTolerance(t)}class M extends Error{constructor(){super("Illegal Argument Exception")}}export{b as buffer,J as changeDefaultSpatialReferenceTolerance,K as clearDefaultSpatialReferenceTolerance,u as clip,o as contains,x as convexHull,s as crosses,i as cut,q as densify,y as difference,d as disjoint,a as distance,c as equals,r as extendedSpatialReferenceInfo,E as flipHorizontal,H as flipVertical,I as generalize,P as geodesicArea,L as geodesicBuffer,B as geodesicDensify,k as geodesicLength,A as intersect,F as intersectLinesToPoints,f as intersects,m as isSimple,R as nearestCoordinate,T as nearestVertex,V as nearestVertices,S as offset,w as overlaps,C as planarArea,G as planarLength,h as relate,z as rotate,g as simplify,j as symmetricDifference,l as touches,D as union,p as within};
//# sourceMappingURL=p-3f7d50a6.js.map