if ( !window.requestAnimationFrame ) {

  window.requestAnimationFrame = (function() {

    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

      window.setTimeout( callback, 1000 / 60 );

    };

  })();
}



const LOGO = (function(that, $) {
  // Canvas settings
  let _canvas = {};
  let _c = {};
  
  // Default proportions of a canvas and positions of a trapezoid.
  let _settings = {
      height: 200,
      width: 250,
      class: '',
      font: 'bold 56px Lora',
      colors: {
        FIRST: '#7e2843',
        SECOND: '#F0C74D',
        THIRD: '#49628b',
        fontColor: '#f1f1f1'
      }
  };


  let _CENTER = that.CENTER = _settings.width / 2;
  const _xBoxPos = 0;
  const _yBoxPos = 60;
  

  // Variables are for definition of a waves' amplitude.
  let xWaveScale = 0;
  let yWaveScale = 0;
  
  const _waveStep = 0.2;
  const _waveLength = 15 / _waveStep;
  let _step = 0;
  let isIncrease = true;
  let additionalAmplitude = 0;
  // Pupil's positions
  // A static position(_CENTR is _centerPupilVerticalLine)
  const _centerPupilHorizontalLine = _yBoxPos + 50;
  const _pupilDirects = {
    top: _centerPupilHorizontalLine - 10,
    right: _CENTER + 10,
    bottom: _centerPupilHorizontalLine + 10,
    left: _CENTER - 10
  }
  // Dynamic positions
  let _pupilXpos = _CENTER;
  let _pupilYpos = _centerPupilHorizontalLine;
  
  
    
  // Open new path of drawing, seting up fill's color, and close path.
  const _newStep = (color, func) => {
      _c.beginPath();
      _c.fillStyle = color;
      func();
      _c.closePath();
      _c.fill();
  }
  
  const _drawBox = () => {
    _newStep(_settings.colors.FIRST, () => {
      _c.moveTo(_xBoxPos, _yBoxPos);
      _c.lineTo(_settings.width, _yBoxPos);
      _c.lineTo(_settings.width - 25, _settings.height);
      _c.lineTo(_xBoxPos + 25, _settings.height);
      _c.lineTo(_xBoxPos, _yBoxPos);  
    });
  }
  const _drawName = (font) => {
    _c.font = font;
    _c.fillStyle = _settings.colors.fontColor;
    _c.fillText('Renome', 25, 46);
  }

  const _drawMast = () => {
     _newStep(_settings.colors.THIRD, () => {
        _c.moveTo(_settings.width / 2 - 10, _yBoxPos + 60);
        _c.lineTo(_settings.width / 2 + 10, _yBoxPos + 60);
        _c.lineTo(_settings.width / 2 + 20, _yBoxPos + 120);
        _c.lineTo(_settings.width / 2 - 20, _yBoxPos + 120);
        _c.lineTo(_settings.width / 2 - 10, _yBoxPos + 60);
     });   
  };
  // It draws a yellow circle in the canvas.
  const _drawEye = () => {
    _newStep(_settings.colors.SECOND, () => {
        _c.arc(_settings.width / 2, _yBoxPos + 50 , 25, 0, 2 * Math.PI);
    });
  };
  
  
  // Variables are for definition of a waves' amplitude.
  const _drawSea = () => {
    // Breakpoints
    const leftEdge = _xBoxPos + 16;
    const rightEdge = _settings.width - 16;
    const secondBreakpoint = leftEdge + 66;
    const thirdBreakpoint = _settings.width - 66;
    // Direction constants
    const toTop = 65;
    const toBottom = 35;
    const toCenter = 50;

    _newStep(_settings.colors.THIRD, () => {
        _c.moveTo(_xBoxPos + 25, _settings.height);
        _c.lineTo(leftEdge, _settings.height - toCenter);
        _c.quadraticCurveTo(
          leftEdge, 
          _settings.height - toTop + yWaveScale - additionalAmplitude,
          secondBreakpoint - xWaveScale - additionalAmplitude,
          _settings.height - toCenter + yWaveScale - additionalAmplitude
        );    
      _c.quadraticCurveTo(
        secondBreakpoint + xWaveScale + additionalAmplitude, 
        _settings.height - toBottom + yWaveScale - additionalAmplitude, 
        thirdBreakpoint + xWaveScale + additionalAmplitude, 
        _settings.height - toCenter - yWaveScale + additionalAmplitude
      );
      _c.quadraticCurveTo(
        thirdBreakpoint - additionalAmplitude, 
        _settings.height - toTop + yWaveScale + additionalAmplitude, 
        rightEdge, 
        _settings.height - toCenter + additionalAmplitude
      );
        _c.lineTo(_settings.width - 25, _settings.height);
      });
     
     if (isIncrease) {
        xWaveScale += _waveStep;
        yWaveScale += _waveStep;
        _step += 1;
       if (_step >= _waveLength) {
         isIncrease = false;
       }
       
    } else {
        xWaveScale -= _waveStep;
        yWaveScale -= _waveStep;
        _step -= 1;
        if (_step <= -_waveLength ) {
          additionalAmplitude = Math.round(Math.random()) && additionalAmplitude !== 10 && additionalAmplitude <= 0 ?
            additionalAmplitude += 1 :
            additionalAmplitude -= 1;
          isIncrease = true;
        } 
    }
   };
  
  const _drawPupil = (x, y) => {
    _newStep(_settings.colors.THIRD, () => {
      _c.arc(x, y, 10, 0 , 2 * Math.PI);
    });
  };
  let _animateId;
  const _drawLogo = () => {
    if (window.innerWidth <= 800) {
      // window.cancelAnimationFrame(_animateId);
    } else {
      _drawBox();
      _drawMast();
      _drawSea();
      _drawEye();
      _drawPupil(_pupilXpos + 10, _pupilYpos);
      if (!amimateId)
        _animateId = window.requestAnimationFrame(_animateCanvas);
    } 
  };
  const _animateCanvas = () => {
    requestAnimationFrame(_animateCanvas)
    _c.clearRect(0, _yBoxPos, _settings.width, _settings.height)
    _drawLogo();
  }
  
  
   that.bindCanvas = (selector) => {
      _canvas = document.querySelector(selector);
      _canvas.height = _settings.height;
      _canvas.width = _settings.width;
      _canvas.style.width = '100%';
      _c = _canvas.getContext('2d');
      _drawName(_settings.font);
      _animateId = window.requestAnimationFrame(_animateCanvas);
      
     
     //  window.addEventListener('mousemove', (e) => {
     //    // console.log(e.target === _canvas);
     //    const offsetTop = _canvas.offsetTop;
     //    const offsetLeft = _canvas.offsetLeft;
     //    const mouseX = e.pageX;
     //    const mouseY = e.pageY;
     //    console.log(_pupilDirects, mouseY, mouseY - _settings.height + _pupilDirects.bottom, mouseY - _settings.height + _pupilDirects.top)
     //    console.log(mouseY - _settings.height - _pupilDirects.top < _pupilDirects.top && mouseY - _settings.height - _pupilDirects.bottom > _pupilDirects.bottom);
     //    if ((mouseY - _settings.height - _pupilDirects.top < mouseY) &&
     //        (mouseY - _settings.height - _pupilDirects.bottom > mouseY)) {
     //      _pupilYpos = mouseY - offsetTop;
     //      console.log(_pupilYpos);
     //    }
     //    // console.log( + _CENTER);
     //    // console.log(e);
 
     // });
   }
   // document.addEventListener('resize', '')

   that.setSettings = settings => {
      if (typeof settings !== 'object')
        throw Error("The first argument \"settins\" isn't an object.");

      if (settings.hasOwnProperty('colors'))
        _settings = {
          ..._settings,
          ...settings,
          colors: {
            ..._settings.colors,
            ...settings.colors
          }
        }
      else
        _settings = {
          ..._settings,
          ...settings
        }
  }
  
  $.LOGO = that;
}((LOGO || {}), (jQuery || {})));


