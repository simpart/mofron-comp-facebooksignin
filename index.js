/**
 * @file   mofron-comp-facebooksignin/index.js
 * @author simpart
 */
let mf = require('mofron');
let Signin = require('mofron-comp-socialsignin');
let Text   = require('mofron-comp-text');
let Icon   = require('mofron-comp-fontawesome');

/**
 * @class mofron.comp.facebooksignin
 * @brief facebook signin button component for mofron
 */
mf.comp.FacebookSignin = class extends Signin {
    
    constructor (po) {
        try {
            super();
            this.name('FacebookSignin');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.color(
                new mf.Color(59, 89, 152),
                new mf.Color(59, 89, 152)
            );
            this.text((undefined === prm) ? 'Continue with Facebook' : prm);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setIconPath (prm) {
        try {
            let fbicn = new Icon({
                path       : prm,
                basePrefix : 'fab',
                icon       : 'facebook',
                color      : new mf.Color(255,255,255)
            });
            this.addChild(fbicn, 0); 
            this.width(this.width());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                let chd = this.child();
                for (let cidx in chd) {
                    if (true === mf.func.isInclude(chd[cidx], 'FontAwesome')) {
                        continue;
                    } else if (true === mf.func.isInclude(chd[cidx], 'Text')) {
                        return chd[cidx];
                    }
                }
                return null;
            }
            /* setter */
            let set_txt = null;
            if ('string' === typeof prm) {
                if (null === this.text()) {
                    this.addChild(
                        new Text({
                            font  : new mf.Font('Tahoma,Verdana'),
                            color : new mf.Color(255,255,255),
                            text  : prm,
                            space : 0.5,
                        })
                    );
                } else {
                    this.text().text(prm);
                }
            } else if (true === mf.func.isInclude(prm, 'Text')) {
                if (null === this.text()) {
                    this.addChild(prm);
                } else {
                    this.updChild(this.text(), prm);
                }
            } else {
                throw new Error('invalid parameter');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            let ret = super.width(prm);
            if ( (undefined !== prm) && ('number' === typeof prm) ) {
                let chd = this.child();
                for (let cidx in chd) {
                    if (true === mf.func.isInclude(chd[cidx], 'FontAwesome')) {
                        chd[cidx].size((prm/4)-8);
                    } else if (true === mf.func.isInclude(chd[cidx], 'Text')) {
                        chd[cidx].size(prm/10);
                    }
                }
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.FacebookSignin;
/* end of file */
