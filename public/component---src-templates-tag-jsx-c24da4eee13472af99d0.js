webpackJsonp([0xa6cd3c51205b],{65:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MediaOverlay=t.Media=void 0;var o=n(89),a=r(o),l=n(90),i=r(l);t.default=a.default,t.Media=a.default,t.MediaOverlay=i.default},55:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),s=n(56),c=r(s),f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return u.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},u.default.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return u.default.createElement(c.default,{key:e.title,postInfo:e})})))},t}(u.default.Component);t.default=f,e.exports=t.default},56:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=r(i),s=n(35),c=r(s),f=n(22),d=r(f),p=n(34),m=r(p),h=n(50),y=r(h),b=n(21),v=r(b),E=n(24),g=r(E),w=n(16),_=r(w),O=n(65),x=r(O),M=n(68),R=r(M);n(63);var j=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={mobile:!0},r.handleResize=r.handleResize.bind(r),r}return l(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},t.prototype.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t,r="/"===e.cover.substring(0,1)?""+e.cover:e.cover,o=t?162:225;return u.default.createElement(c.default,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},u.default.createElement(_.default,{style:{textDecoration:"none"},to:e.path},u.default.createElement(x.default,{style:{backgroundImage:"url("+r+")",height:o+"px"},className:"post-preview-cover"},u.default.createElement(O.MediaOverlay,null,u.default.createElement(d.default,{title:e.title},u.default.createElement(m.default,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),u.default.createElement(d.default,{expander:n,avatar:u.default.createElement(y.default,{icon:u.default.createElement(g.default,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.date,subtitle:e.timeToRead+" min read"}),u.default.createElement(v.default,{expandable:n},e.excerpt,u.default.createElement(R.default,{tags:e.tags})))},t}(i.Component);t.default=j,e.exports=t.default},63:function(e,t){},252:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(1),u=r(i),s=n(20),c=r(s),f=n(55),d=r(f),p=n(13),m=r(p),h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.pathContext.tag,t=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"tag-container"},u.default.createElement(c.default,null,u.default.createElement("title",null,'Posts tagged as "'+e+'" | '+m.default.siteTitle),u.default.createElement("link",{rel:"canonical",href:m.default.siteUrl+"/tags/"+e})),u.default.createElement(d.default,{postEdges:t}))},t}(u.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-c24da4eee13472af99d0.js.map