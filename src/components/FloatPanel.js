(function (w) {
  'use strict';
  var R = w.React;

  var FloatPanel = function FloatPanel(props) {
    var children = props.children, onClose = props.onClose, style = props.style || {};
    var closing = props.closing;

    return R.createElement(R.Fragment, null,
      // 遮罩层
      R.createElement('div', { onPointerDown: onClose, style: Object.assign({ position:'fixed', inset:0, zIndex:9998, background:'transparent', transition:'background 220ms ease' }, style.overlay||{}) }),
      // 面板
      R.createElement('div', { style: Object.assign({
        position:'fixed', zIndex:9999, right:16,
        top:'calc(env(safe-area-inset-top) + 7px + 46px + 6px)',
        width:246,
        background:'var(--glass-bg)',
        backdropFilter:'blur(40px) saturate(2.5) brightness(1.15)',
        WebkitBackdropFilter:'blur(40px) saturate(2.5) brightness(1.15)',
        border:'0.5px solid var(--glass-border)',
        borderRadius:22,
        boxShadow:'0 2px 20px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.25)',
        overflow:'hidden',
        opacity: closing ? 0 : 1,
        transform: closing ? 'translateY(-10px) scale(0.92)' : 'translateY(0) scale(1)',
        transformOrigin:'85% -18px',
        transition:'opacity 180ms ease, transform 220ms cubic-bezier(0.34,1.56,0.64,1)',
        willChange:'opacity, transform'
      }, style.panel||{}), onPointerDown:function(e){e.stopPropagation();} },
        children
      )
    );
  };

  w.FloatPanel = FloatPanel;
})(window);