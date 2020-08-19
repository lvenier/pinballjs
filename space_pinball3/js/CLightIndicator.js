function CLightIndicator(oSprite, iX, iY, oParentContainer) {
    var _oIndicator;
    var _oSpriteOn;
    var _oSpriteOff;
    var _oText;
    this._init = function (oSprite, iX, iY, oParentContainer) {
        _oIndicator = new createjs.Container();
        _oIndicator.x = iX;
        _oIndicator.y = iY;
        oParentContainer.addChild(_oIndicator);
        var oData = {
            images: [oSprite],
            frames: {
                width: oSprite.width / 2,
                height: oSprite.height,
                regX: (oSprite.width / 2) / 2,
                regY: oSprite.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oSpriteOff = createSprite(oSpriteSheet, "state_false", (oSprite.width / 2) / 2, oSprite.height / 2, oSprite.width / 2, oSprite.height);
        _oIndicator.addChild(_oSpriteOff);
        _oSpriteOn = createSprite(oSpriteSheet, "state_true", (oSprite.width / 2) / 2, oSprite.height / 2, oSprite.width / 2, oSprite.height);
        _oSpriteOn.alpha = 0;
        _oIndicator.addChild(_oSpriteOn);
    };
    this.unload = function () {
        createjs.Tween.removeTweens(_oSpriteOn);
        oParentContainer.removeChild(_oSpriteOn);
    };
    this.lit = function (bVal) {
        createjs.Tween.removeTweens(_oSpriteOn);
        if (bVal) {
            _oSpriteOn.alpha = 1;
        } else {
            _oSpriteOn.alpha = 0;
        }
    };
    this.slowOn = function (iTime, iDelay) {
        createjs.Tween.get(_oSpriteOn, {
            override: true
        }).wait(iDelay).to({
            alpha: 1
        }, iTime);
    };
    this.highlight = function (iTime) {
        _oSpriteOn.alpha = 0;
        createjs.Tween.get(_oSpriteOn, {
            override: true,
            loop: true
        }).to({
            alpha: 1
        }, iTime / 3).wait(iTime / 3).to({
            alpha: 0
        }, iTime / 3);
    };
    this.slowHighlight = function (iTime, iDelay, oCb) {
        _oSpriteOn.alpha = 0;
        createjs.Tween.get(_oSpriteOn, {
            override: true
        }).wait(iDelay).to({
            alpha: 1
        }, iTime / 3).wait(iTime / 3).to({
            alpha: 0
        }, iTime / 3).call(function () {
            oCb();
        });
    };
    this.slowOff = function (iTime, iDelay) {
        createjs.Tween.get(_oSpriteOn, {
            override: true
        }).wait(iDelay).to({
            alpha: 0
        }, iTime);
    };
    this.flashing = function () {
        var iTime = 100;
        createjs.Tween.get(_oSpriteOn, {
            override: true
        }).to({
            alpha: 0
        }, iTime).to({
            alpha: 1
        }, iTime).to({
            alpha: 0
        }, iTime).to({
            alpha: 1
        }, iTime).to({
            alpha: 0
        }, iTime).to({
            alpha: 1
        }, iTime).to({
            alpha: 0
        }, iTime);
    };
    this.addPreciseText = function (szText, iX, iY, iSize, szColor, iWidth, iHeight) {
        var iWidth = iWidth;
        var iHeight = iHeight;
        var iTextX = iX;
        var iTextY = iY;
        var oTitle = new CTLText(_oIndicator, iTextX - iWidth / 2, iTextY - iHeight / 2, iWidth, iHeight, iSize, "center", szColor, PRIMARY_FONT, 1.3, 2, 2, szText, true, true, true, false);
        _oText = oTitle.getText();
    };
    this.addText = function (szText, iX, iY, iSize, szColor) {
        _oText = new createjs.Text(szText, iSize + "px " + PRIMARY_FONT, szColor);
        _oText.x = iX;
        _oText.y = iY;
        _oText.textAlign = "center";
        _oText.textBaseline = "middle";
        _oText.lineWidth = 200;
        _oIndicator.addChild(_oText);
        _oText.cache(-_oIndicator.getBounds().width / 2, -_oIndicator.getBounds().height / 2, _oIndicator.getBounds().width, _oIndicator.getBounds().height)
    };
    this.setText = function (szText) {
        _oText.text = szText;
        _oText.updateCache();
    };
    this.textRotate = function (iDeg) {
        _oText.rotation = iDeg;
    };
    this.rotate = function (iDeg) {
        _oIndicator.rotation = iDeg;
    };
    this.scale = function (iValue) {
        _oIndicator.scaleX = _oIndicator.scaleY = iValue;
    };
    this.flipX = function () {
        _oIndicator.scaleX = -1;
    };
    this._init(oSprite, iX, iY, oParentContainer);
}