import b from './babel';
import e from './eslint';
import g from './git';
import l from './license';
import p from './package';
import r from './readme';
import t from './travis';

export default function template(opt) {
    const obj = {
        b,
        e,
        g,
        l,
        p,
        r,
        t,
    };
    if (typeof opt === 'string') {
        let fn = obj[opt];
        return fn();
    } else if (typeof opt === 'object') {
        let fn = obj[opt.key];
        return fn(opt.custom);
    }
}
