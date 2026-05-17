(function (w) {
  'use strict';
  var R = w.React;
  var useState = R.useState, useEffect = R.useEffect, useRef = R.useRef, useCallback = R.useCallback;

  var BgSheet = function BgSheet(_ref) {
    var currentColor = _ref.currentColor, onSelect = _ref.onSelect, onRemove = _ref.onRemove, onClose = _ref.onClose;
    var presetColors = ['#f5f5f5', '#e8e0d4', '#d4e8d0', '#d0e0e8', '#e8d0d4', '#fff3e0', '#e8e0f0', '#f0e8d0'];
    var _useState = useState(true), closing = _useState[0], setClosing = _useState[1];
    var closeTimerRef = useRef(null);
    var colorNames = ['\u9ED8\u8BA4\u7070', '\u6696\u6C99', '\u6D45\u7EFF', '\u6D45\u84DD', '\u6D45\u7C89', '\u7C73\u6A59', '\u6DE1\u7D2B', '\u6D45\u674F'];

    useEffect(function () {
      requestAnimationFrame(function () { requestAnimationFrame(function () { setClosing(false); }); });
      return function () { clearTimeout(closeTimerRef.current); };
    }, []);

    var closeWithAnim = useCallback(function (afterClose) {
      clearTimeout(closeTimerRef.current);
      setClosing(true);
      closeTimerRef.current = setTimeout(function () {
        if (afterClose) afterClose(); else if (onClose) onClose();
      }, 220);
    }, [onClose]);

    return R.createElement(R.Fragment, null,
      R.createElement('div', { onPointerDown:function(){closeWithAnim();}, style:{ position:'fixed', inset:0, zIndex:9998, background:closing?'transparent':'transparent', transition:'background 220ms ease' }}),
      R.createElement('div', { style:{ position:'fixed', top:'calc(env(safe-area-inset-top) + 7px + 46px + 6px)', right:16, zIndex:9999, width:246, transformOrigin:'85% -18px', opacity:closing?0:1, transform:closing?'translateY(-10px) scale(0.92)':'translateY(0) scale(1)', transition:'opacity 180ms ease, transform 220ms cubic-bezier(0.34,1.56,0.64,1)', willChange:'opacity, transform' }, onPointerDown:function(e){e.stopPropagation();} },
        R.createElement('div', { style:{ background:'var(--glass-bg)', backdropFilter:'blur(40px) saturate(2.5) brightness(1.08)', WebkitBackdropFilter:'blur(40px) saturate(2.5) brightness(1.08)', border:'0.5px solid var(--glass-border)', borderRadius:22, boxShadow:'0 6px 18px rgba(0,0,0,0.08), inset 0 0.5px 0 rgba(255,255,255,0.15)', padding:14, overflow:'hidden' } },
          R.createElement('div', { style:{ display:'flex', alignItems:'center', gap:10, marginBottom:14 } },
            R.createElement('div', { style:{ width:24, height:24, display:'flex', alignItems:'center', justifyContent:'center', color:'#af52de', flex:'none' }, 'aria-hidden':'true' },
              R.createElement('svg', { viewBox:'0 0 24 24', width:20, height:20, fill:'none', xmlns:'http://www.w3.org/2000/svg' },
                R.createElement('path', { d:'M12 3.5a8.5 8.5 0 1 0 8.5 8.5c0-1.1-.9-2-2-2h-1.6a1.8 1.8 0 0 1-1.8-1.8V6.5A3 3 0 0 0 12 3.5Z', stroke:'currentColor', strokeWidth:'2.5', strokeLinejoin:'round' }),
                R.createElement('circle', { cx:8, cy:10, r:1.1, fill:'currentColor' }),
                R.createElement('circle', { cx:11, cy:7.7, r:1.1, fill:'currentColor' }),
                R.createElement('circle', { cx:15.2, cy:9, r:1.1, fill:'currentColor' }))),
            R.createElement('div', { style:{ minWidth:0, flex:1 } },
              R.createElement('div', { style:{ fontWeight:700, fontSize:15, color:'var(--text-main)', letterSpacing:'-0.1px' } }, '\u80CC\u666F\u8272'),
              R.createElement('div', { style:{ fontSize:11, color:'var(--text-secondary)', marginTop:2 } }, '\u4E3A\u5F53\u524D\u7B14\u8BB0\u8BBE\u7F6E\u5E95\u8272'))),
          R.createElement('div', { style:{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:10, marginBottom:12 } },
            presetColors.map(function (c, i) {
              var selected = currentColor === c;
              return R.createElement('button', { key:c, 'aria-label':colorNames[i], onClick:function(){closeWithAnim(function(){onSelect && onSelect(c);});}, style:{ width:42, height:42, borderRadius:21, background:c, cursor:'pointer', padding:0, border:selected?'2px solid #007aff':'0.5px solid rgba(0,0,0,0.12)', boxShadow:selected?'0 0 0 3px rgba(0,122,255,0.16)':'0 2px 8px rgba(0,0,0,0.08)', display:'flex', alignItems:'center', justifyContent:'center', transition:'transform 160ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 160ms ease, border 160ms ease' } },
                selected && R.createElement('svg', { viewBox:'0 0 24 24', width:20, height:20, fill:'none', xmlns:'http://www.w3.org/2000/svg', style:{ filter:'drop-shadow(0 1px 2px rgba(0,0,0,0.18))' } },
                  R.createElement('path', { d:'M5.5 12.3 10 16.7 18.8 7.8', stroke:'#007aff', strokeWidth:'2.5', strokeLinecap:'round', strokeLinejoin:'round' })));
            })),
          currentColor && R.createElement('div', { style:{ borderTop:'0.5px solid var(--border-color)', paddingTop:7, marginTop:2 } },
            R.createElement('button', { onClick:function(){closeWithAnim(function(){onRemove && onRemove();});}, style:{ width:'100%', minHeight:46, border:'none', background:'transparent', borderRadius:16, display:'flex', alignItems:'center', gap:11, padding:'8px 10px', color:'#ff3b30', fontSize:14, fontFamily:'inherit', cursor:'pointer', textAlign:'left' } },
              R.createElement('span', { style:{ width:24, height:24, display:'flex', alignItems:'center', justifyContent:'center', flex:'none' }, 'aria-hidden':'true' },
                R.createElement('svg', { viewBox:'0 0 24 24', width:20, height:20, fill:'none', xmlns:'http://www.w3.org/2000/svg' },
                  R.createElement('path', { d:'M4.5 7.5h15M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M8.5 7.5l.4 10a1.5 1.5 0 0 0 1.5 1.4h3.2a1.5 1.5 0 0 0 1.5-1.4l.4-10M10.2 11v4.5M13.8 11v4.5', stroke:'currentColor', strokeWidth:'2.5', strokeLinecap:'round', strokeLinejoin:'round' }))),
              R.createElement('span', { style:{ fontSize:15, fontWeight:650, letterSpacing:'-0.1px' } }, '\u79FB\u9664\u80CC\u666F'))))));
  };

  w.BgSheet = BgSheet;
})(window);
