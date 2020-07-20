const on = (...kinds) => (...els) => (fn) =>
    kinds.forEach(kind =>
        els.forEach(el => el.addEventListener(kind, fn))
    );

const a = document.getElementById('a');
const b = document.getElementById('b');
const o = document.querySelector('output');

on('input', 'mousedown')(a, b)(update);

function update({target} = {}) {
    let pivot;

    if (target === a) {
        if (a.valueAsNumber >= Number(a.max)) {
            pivot = Math.min(max - 1, Number(a.max) + 1);
        }
    }

    if (target === b) {
        if (b.valueAsNumber <= Number(b.min)) {
            pivot = Math.max(min, Number(b.min) - 2);
        }
    }

    if (pivot != null) {
        a.max = pivot;
        b.min = pivot + 1;
    }

    // Amount of visual/presentation space proportional to steps
    a.style.flexGrow = stepsIn(a); // how many steps in input `a`?
    b.style.flexGrow = stepsIn(b);
}