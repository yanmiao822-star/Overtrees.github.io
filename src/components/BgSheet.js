(function (w) {
  'use strict';
  var R = w.React;
  var useState = R.useState, useEffect = R.useEffect, useRef = R.useRef, useCallback = R.useCallback;

  var BgSheet = function BgSheet(_ref) {
    var currentColor = _ref.currentColor, onSelect = _ref.onSelect, onRemove = _ref.onRemove, onClose = _ref.onClose;
    var presetColors = ['#f5f5f5','#e8e0d4','#d4e8d0','#d0e0e8','#e8d0d4','#fff3e0','#e8e0f0','#f0e8d0'];
    var colorNames = ['默认灰','暖沙','浅绿','浅蓝','浅粉','米橙','淡紫','浅杏'];
    var _cl = useState(true), closing = _cl[0], setClosing = _cl[1];
    var closeRef = useRef(null);

    useEffect(function () {
      requestAnimationFrame(function () { requestAnimationFrame(function () { setClosing(false); }); });
      return function () { clearTimeout(closeRef.current); };
    }, []);

    var closeWithAnim = useCallback(function (after) {
      clearTimeout(closeRef.current);
      setClosing(true);
      closeRef.current = setTimeout(function () { if (after) after(); else if (onClose) onClose(); }, 220);
    }, [onClose]);

    return R.createElement(R.Fragment, null,
      R.createElement('div', { onPointerDown:function(){closeWithAnim();}, style:{ position:'fixed', inset:0, zIndex:4000, background:'transparent' }}),
      R.createElement('div', { style:{ position:'fixed', left:0, right:0, bottom:'calc(env(safe-area-inset-bottom) + 14px)', zIndex:4001, display:'flex', justifyContent:'center', padding:'0 14px', pointerEvents:'none', opacity:closing?0:1, transform:closing?'translateY(20px)':'translateY(0)', transition:'opacity 200ms ease, transform 250ms cubic-bezier(0.34,1.56,0.64,1)' }, onPointerDown:function(e){e.stopPropagation();} },
        R.createElement('div', { style:{ width:'100%', maxWidth:600, background:'var(--glass-bg)', backdropFilter:'blur(40px) saturate(2.5) brightness(1.15)', WebkitBackdropFilter:'blur(40px) saturate(2.5) brightness(1.15)', border:'0.5px solid var(--glass-border)', borderRadius:28, boxShadow:'0 6px 18px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.25)', padding:'20px 20px calc(20px + env(safe-area-inset-bottom))', overflow:'hidden', pointerEvents:'auto' } },
          R.createElement('div', { style:{ textAlign:'center', marginBottom:16 } },
            R.createElement('div', { style:{ fontSize:20, fontWeight:700, color:'var(--text-main)', letterSpacing:'-0.3px' } }, '背景色'),
            R.createElement('div', { style:{ fontSize:13, color:'var(--text-secondary)', marginTop:4 } }, '为当前笔记设置底色')),
          R.createElement('div', { style:{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:10, marginBottom:12 } },
            presetColors.map(function (c, i) {
              var sel = currentColor === c;
              return R.createElement('button', { key:c, onClick:function(){closeWithAnim(function(){onSelect && onSelect(c);});}, style:{ width:48, height:48, borderRadius:24, background:c, cursor:'pointer', padding:0, justifySelf:'center', border:sel?'2.5px solid #007aff':'1px solid rgba(0,0,0,0.15)', boxShadow:sel?'0 0 0 3px rgba(0,122,255,0.2)':'0 2px 6px rgba(0,0,0,0.1)', display:'flex', alignItems:'center', justifyContent:'center' } },
                sel && R.createElement('svg', { viewBox:'0 0 24 24', width:20, height:20, fill:'none' },
                  R.createElement('path', { d:'M5.5 12.3 10 16.7 18.8 7.8', stroke:'#007aff', strokeWidth:'2.5', strokeLinecap:'round', strokeLinejoin:'round' })));
            })),
          currentColor ? R.createElement('div', { style:{ borderTop:'1px solid var(--border-color)', paddingTop:8, marginTop:2 } },
            R.createElement('button', { onClick:function(){closeWithAnim(function(){onRemove && onRemove();});}, style:{ width:'100%', minHeight:40, border:'none', background:'transparent', borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', gap:6, padding:'8px 0', color:'#ff3b30', fontSize:15, fontFamily:'inherit', cursor:'pointer' } },
              R.createElement('span', { style:{ width:20, height:20, display:'flex', alignItems:'center', justifyContent:'center', flex:'none' } },
                R.createElement('svg', { viewBox:'0 0 24 24', width:18, height:18, fill:'none' },
                  R.createElement('path', { d:'M4.5 7.5h15M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M8.5 7.5l.4 10a1.5 1.5 0 0 0 1.5 1.4h3.2a1.5 1.5 0 0 0 1.5-1.4l.4-10M10.2 11v4.5M13.8 11v4.5', stroke:'currentColor', strokeWidth:'2.5', strokeLinecap:'round', strokeLinejoin:'round' }))),
              R.createElement('span', { style:{ fontSize:15, fontWeight:500 } }, '移除背景'))) : null));
  };

  w.BgSheet = BgSheet;
})(window);