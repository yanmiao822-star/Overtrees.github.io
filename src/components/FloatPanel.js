(function (w) {
  'use strict';
  var R = w.React;

  var FloatPanel = function FloatPanel(props) {
    var children = props.children, onClose = props.onClose, style = props.style || {};
    var closing = props.closing;

    return R.createElement(R.Fragment, null,
      R.createElement('div', { onClick: onClose, style: Object.assign({ position:'fixed', inset:0, zIndex:9997, background:'transparent' }, style.overlay||{}) }),
      R.createElement('div', { style: Object.assign({
        position:'fixed', zIndex:9998, right:12,
        top:'calc(env(safe-area-inset-top) + 7px + 46px + 4px)',
        minWidth:180,
        background:'var(--glass-bg)',
        backdropFilter:'blur(40px) saturate(2.5) brightness(1.15)',
        WebkitBackdropFilter:'blur(40px) saturate(2.5) brightness(1.15)',
        border:'0.5px solid var(--glass-border)',
        borderRadius:18,
        boxShadow:'0 4px 24px rgba(0,0,0,0.15)',
        overflow:'hidden',
        opacity: closing ? 0 : 1,
        transform: closing ? 'translateY(-6px) scale(0.95)' : 'translateY(0) scale(1)',
        transformOrigin:'90% -10px',
        transition:'opacity 150ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1)'
      }, style.panel||{}), onClick:function(e){e.stopPropagation();} },
        children
      )
    );
  };

  w.FloatPanel = FloatPanel;
})(window);