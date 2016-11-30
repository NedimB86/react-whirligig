'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var _react=require('react'),_react2=_interopRequireDefault(_react),_reactDom=require('react-dom'),_slide=require('../slide'),_slide2=_interopRequireDefault(_slide),_utils=require('../utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var bool=_react.PropTypes.bool,number=_react.PropTypes.number,string=_react.PropTypes.string,func=_react.PropTypes.func,array=_react.PropTypes.array,oneOfType=_react.PropTypes.oneOfType,object=_react.PropTypes.object,normalizeIndex=function normalizeIndex(a,b){return(a%b+b)%b};var Track=function(_Component){function Track(a){_classCallCheck(this,Track);// We can't do arrow function properties for these since
// we are passing them to the consuming component and we
// require the proper context
var _this=_possibleConstructorReturn(this,(Track.__proto__||Object.getPrototypeOf(Track)).call(this,a));return _this.slideTo=_this.slideTo.bind(_this),_initialiseProps.call(_this),_this.next=_this.next.bind(_this),_this.prev=_this.prev.bind(_this),_this.infiniteNext=_this.infiniteNext.bind(_this),_this.infinitePrev=_this.infinitePrev.bind(_this),_this.slideTo=_this.slideTo.bind(_this),_this}return _inherits(Track,_Component),_createClass(Track,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;this.DOMNode=(0,_reactDom.findDOMNode)(this.track),this.childCount=this.track.children.length;var a=!1,b=!1,c=(0,_utils.trackTouchesForElement)(this.DOMNode),d=function d(){return!_this2.props.preventSnapping&&!a&&!b&&!c()};(0,_utils.onScrollStart)(function(){b=!0}),(0,_utils.onScrollEnd)(function(){b=!1,a=!1,d()&&(a=!0,_this2.slideTo(_this2.getNearestSlideIndex()))},{target:this.DOMNode}),(0,_utils.on)('touchend')(function(){d()&&(a=!0,_this2.slideTo(_this2.getNearestSlideIndex()))})(this.track),this.slideTo(this.props.startAt,{immediate:!0})}},{key:'componentDidUpdate',value:function componentDidUpdate(){this.childCount=this.track.children.length}},{key:'shouldComponentUpdate',// We don't want to update if only state changed.
// Sate is not important to the rendering of this component
value:function shouldComponentUpdate(a){var b=(0,_utils.values)(this.props),c=(0,_utils.values)(a);return!c.every(function(d,e){return d===b[e]})}},{key:'next',value:function next(){return this.slideTo(this.state.activeIndex+this.props.visibleSlides)}},{key:'infiniteNext',value:function infiniteNext(){var _this3=this;return this.state.activeIndex>=this.childCount-this.props.visibleSlides?(this.reorderLastVisibleSet({next:!0}),this.track.scrollLeft=0,this.next().then(function(){_this3.reorderLastVisibleSet({reset:!0}),_this3.track.scrollLeft=0})):this.next()}},{key:'prev',value:function prev(){return this.slideTo(this.state.activeIndex-this.props.visibleSlides)}},{key:'infinitePrev',value:function infinitePrev(){var _this4=this;return this.state.activeIndex<this.props.visibleSlides?(this.reorderLastVisibleSet({prev:!0}),this.track.scrollLeft=this.track.scrollWidth,this.prev().then(function(){_this4.reorderLastVisibleSet({reset:!0}),_this4.track.scrollLeft=_this4.track.scrollWidth})):this.prev()}},{key:'slideTo',value:function slideTo(a){var _this5=this,_ref=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},_ref$immediate=_ref.immediate,b=void 0!==_ref$immediate&&_ref$immediate,c=this.props.afterSlide,_track=this.track,d=_track.children,e=_track.scrollLeft,f=normalizeIndex(a,this.childCount),g=d[f].offsetLeft-e;return(0,_utils.animate)(this.track,{prop:'scrollLeft',delta:g,immediate:b}).then(function(){_this5.state.activeIndex!==f&&(_this5.setState({activeIndex:f}),c(f))})}},{key:'render',value:function render(){var _props=this.props,a=_props.children,b=_props.className,c=_props.gutter,d=_props.preventScroll,e=_props.slideClass,f=_props.visibleSlides,g=d?'hidden':'auto';return _react2.default.createElement('div',{className:b,style:{display:'flex',flexFlow:'row nowrap',justifyContent:'space-between',overflowX:g,msOverflowStyle:'-ms-autohiding-scrollbar',/* chrome like scrollbar experience for IE/Edge */position:'relative',/* makes .track an offset parent */transition:'all .25s ease-in-quint',outline:'none'},ref:this.setRef('track'),tabIndex:'0',onKeyUp:this.handleKeyUp},_react.Children.map(a.apply(void 0,_toConsumableArray(this.props.infinite?[this.infiniteNext,this.infinitePrev]:[this.next,this.prev])),function(h,j){return _react2.default.createElement(_slide2.default,{className:e,key:'slide-'+j,basis:'calc((100% - ('+c+' * '+(f-1)+')) / '+f+')',gutter:c,onClick:h.props.onClick},h)}))}}]),Track}(_react.Component);Track.propTypes={afterSlide:func,children:func,className:oneOfType([array,string,object]),gutter:string,infinite:bool,preventScroll:bool,slideClass:oneOfType([array,string,object]),preventSnapping:bool,startAt:number,visibleSlides:number};Track.defaultProps={afterSlide:function afterSlide(){},gutter:'1em',infinite:!1,preventScroll:!1,startAt:0,visibleSlides:1};var _initialiseProps=function _initialiseProps(){var _this6=this;this.state={activeIndex:0},this.handleKeyUp=function(a,b){return function(_ref2){var c=_ref2.key,d=a.includes(c),e=b.includes(c);d&&_this6.next(),e&&_this6.prev()}}(['ArrowRight'],['ArrowLeft']),this.getNearestSlideIndex=function(){var _track2=_this6.track,a=_track2.children,b=_track2.scrollLeft,c=[].slice.call(a).map(function(_ref3){var d=_ref3.offsetLeft;return Math.abs(d-b)});return c.indexOf(Math.min.apply(Math,_toConsumableArray(c)))},this.reorderLastVisibleSet=function(_ref4){var _slice,_ref4$reset=_ref4.reset,a=void 0===_ref4$reset||_ref4$reset,_ref4$prev=_ref4.prev,b=void 0!==_ref4$prev&&_ref4$prev,_ref4$next=_ref4.next,c=void 0!==_ref4$next&&_ref4$next,d=_this6.props.visibleSlides;(_slice=[].slice).call.apply(_slice,[_this6.track.children].concat(_toConsumableArray(b?[0,d]:c?[-d]:[]))).forEach(b?function(e){e.style.order=1}:c?function(e){e.style.order=-1}:function(e){e.style.order='initial'})},this.setRef=function(a){return function(b){_this6[a]=b}}};exports.default=Track;