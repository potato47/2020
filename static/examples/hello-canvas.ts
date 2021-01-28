function helloCanvas() {
    const canvas = document.getElementsByTagName('canvas')[0];
    const gl = canvas.getContext('webgl');
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

helloCanvas();
