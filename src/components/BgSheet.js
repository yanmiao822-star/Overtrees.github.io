(function (w) {
  'use strict';
  var R = w.React;
  var useState = R.useState, useCallback = R.useCallback, useRef = R.useRef;

  var BgSheet = function BgSheet(_ref) {
    var currentColor = _ref.currentColor, onSelect = _ref.onSelect, onRemove = _ref.onRemove, onClose = _ref.onClose;
    var presetColors = ["#f5f5f5","#e8e0d4","#d4e8d0","#d0e0e8","#e8d0d4","#fff3e0","#e8e0f0","#f0e8d0"];
    var colorNames = ["默认灰","暖沙","浅绿","浅蓝","浅粉","米橙","淡紫","浅杏"];
    var _cl = useState(true), closing = _cl[0], setClosing = _cl[1];
    var closeRef = useRef(null);

    function closeWithAnim(after) {
      clearTimeout(closeRef.current);
      setClosing(true);
      closeRef.current = setTimeout(function(){ if(after) after(); else if(onClose) onClose(); }, 220);
    }

    return R.createElement(w.FloatPanel || FloatPanel, {
      onClose: function(){ closeWithAnim(); },
      closing: closing
    },
      R.createElement('div', { style: { padding:14 } },
        R.createElement('div', { style:{ display:"flex", alignItems:"center", gap:10, marginBottom:14 } },
          R.createElement('div', { style:{ width:24, height:24, display:"flex", alignItems:"center", justifyContent:"center", color:"#af52de", flex:"none" } },
            R.createElement('svg', { viewBox:"0 0 24 24", width:20, height:20, fill:"none" },
              R.createElement('path', { d:"M12 3.5a8.5 8.5 0 1 0 8.5 8.5c0-1.1-.9-2-2-2h-1.6a1.8 1.8 0 0 1-1.8-1.8V6.5A3 3 0 0 0 12 3.5Z", stroke:"currentColor", strokeWidth:"2.5", strokeLinejoin:"round" }),
              R.createElement('circle', { cx:8, cy:10, r:1.1, fill:"currentColor" }),
              R.createElement('circle', { cx:11, cy:7.7, r:1.1, fill:"currentColor" }),
              R.createElement('circle', { cx:15.2, cy:9, r:1.1, fill:"currentColor" }))),
          R.createElement('div', { style:{ minWidth:0, flex:1 } },
            R.createElement('div', { style:{ fontWeight:700, fontSize:15, color:"var(--text-main)", letterSpacing:"-0.1px" } }, "背景色"),
            R.createElement('div', { style:{ fontSize:11, color:"var(--text-secondary)", marginTop:2 } }, "为当前笔记设置底色"))),
        R.createElement('div', { style:{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:10, marginBottom:12 } },
          presetColors.map(function(c,i){ return R.createElement('button', { key:c, onClick:function(){ closeWithAnim(function(){ onSelect && onSelect(c); }); }, style:{ width:42, height:42, borderRadius:21, background:c, cursor:"pointer", border:currentColor===c?"2px solid #007aff":"0.5px solid rgba(0,0,0,0.12)", boxShadow:currentColor===c?"0 0 0 3px rgba(0,122,255,0.16)":"0 2px 8px rgba(0,0,0,0.08)" } } }) })),
        currentColor && R.createElement('div', { style:{ borderTop:"0.5px solid var(--border-color)", paddingTop:7, marginTop:2 } },
          R.createElement('button', { onClick:function(){ closeWithAnim(function(){ onRemove && onRemove(); }); }, style:{ width:"100%", minHeight:46, border:"none", background:"transparent", borderRadius:16, display:"flex", alignItems:"center", gap:11, padding:"8px 10px", color:"#ff3b30", fontSize:14, fontFamily:"inherit", cursor:"pointer" } },
            R.createElement('span', { style:{ width:24, height:24, display:"flex", alignItems:"center", justifyContent:"center", flex:"none" } },
              R.createElement('svg', { viewBox:"0 0 24 24", width:20, height:20, fill:"none" },
                R.createElement('path', { d:"M4.5 7.5h15M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M8.5 7.5l.4 10a1.5 1.5 0 0 0 1.5 1.4h3.2a1.5 1.5 0 0 0 1.5-1.4l.4-10M10.2 11v4.5M13.8 11v4.5', stroke:"currentColor", strokeWidth:"2.5", strokeLinecap:"round", strokeLinejoin:"round" }))),
            R.createElement('span', { style:{ fontSize:15, fontWeight:650 } }, "移除背景"))))));
  };

  w.BgSheet = BgSheet;
})(window);
