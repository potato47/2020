export const defaultTemplate = `new uu.WebglEngine({
    vs: \`
        attribute vec4 aPosition;
        void main() {
            gl_Position = aPosition;
        }
    \`,
    fs: \`
        precision mediump float;
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
        }
    \`,
}).setBuffer(
    WebGLRenderingContext.ARRAY_BUFFER,
    new Float32Array([
        0.0, 0.5,
        -0.5, -0.5,
        0.5, -0.5
    ])
).setAttribute(
    'aPosition', 2, WebGLRenderingContext.FLOAT, 0, 0
).setClearColor(
    0, 0, 0, 1
).clear(
    WebGLRenderingContext.COLOR_BUFFER_BIT
).drawArrays(
    WebGLRenderingContext.TRIANGLES, 0, 3
);
`;