import earth from '../../static/imgs/earth.jpg'
import bathymetry_bw_composite_4k from '../../static/imgs/bathymetry_bw_composite_4k.jpg'
import starfield from '../../static/imgs/starfield.jpg'

import night from '../../static/imgs/night.jpg'
import clouds from '../../static/imgs/clouds.png'

//必须使用import引入图片，否则直接使用图片地址引入无效
export const option = {
    backgroundColor: '#000',
    globe: {
        baseTexture: earth,
        heightTexture: bathymetry_bw_composite_4k,

        displacementScale: 0.1,

        shading: 'lambert',

        environment: starfield,

        light: {
            ambient: {
                intensity: 0.1
            },
            main: {
                intensity: 1.5
            }
        },

        layers: [{
            type: 'blend',
            blendTo: 'emission',
            texture: night
        }, {
            type: 'overlay',
            texture: clouds,
            shading: 'lambert',
            distance: 5
        }]
    },
    series: []
}