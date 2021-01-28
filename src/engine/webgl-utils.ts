export interface SuperGL extends WebGLRenderingContext {
    program: WebGLProgram;
}

export function initGL(options: { canvas: HTMLCanvasElement, vsSourcre: string, fsSource: string }): SuperGL | null {
    const gl = options.canvas.getContext('webgl');
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return null;
    }
    const shaderProgram = initShaderProgram(gl, options.vsSourcre, options.fsSource);
    if (!shaderProgram) {
        console.log('Failed to initialize shaders.');
        return null;
    }

    gl.useProgram(shaderProgram);
    (gl as any).program = shaderProgram;
    return gl as any;
}

//
//  初始化着色器程序，让WebGL知道如何绘制我们的数据
function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    // 创建着色器程序

    const shaderProgram = gl.createProgram();
    if (!shaderProgram || !vertexShader || !fragmentShader) {
        return null;
    }
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // 创建失败， alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

//
// 创建指定类型的着色器，上传source源码并编译
//
function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type);
    if (!shader) {
        return null;
    }

    // Send the source to the shader object

    gl.shaderSource(shader, source);

    // Compile the shader program

    gl.compileShader(shader);

    // See if it compiled successfully

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}
