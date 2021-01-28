import { initGL, SuperGL } from './webgl-utils';

const TextureUnit = [
    WebGLRenderingContext.TEXTURE0,
    WebGLRenderingContext.TEXTURE1,
    WebGLRenderingContext.TEXTURE2,
    WebGLRenderingContext.TEXTURE3,
    WebGLRenderingContext.TEXTURE4,
    WebGLRenderingContext.TEXTURE0,
    WebGLRenderingContext.TEXTURE0,
    WebGLRenderingContext.TEXTURE0,
]

export class WebglEngine {

    private gl: SuperGL;

    static loadTexture(src: string) {
        return new Promise<HTMLImageElement>((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                resolve(image);
            }
            image.onerror = err => {
                reject(err);
            }
            image.src = src;
        });
    }

    static getCanvas() {
        return document.getElementById('preview_canvas') as HTMLCanvasElement;
    }

    constructor(config: {
        vs: string,
        fs: string,
    }) {
        const gl = initGL({
            canvas: WebglEngine.getCanvas(),
            vsSourcre: config.vs,
            fsSource: config.fs
        });
        if (!gl) {
            throw ('Failed to get context')
        }
        this.gl = gl;
    }

    getGl() {
        return this.gl;
    }

    setBuffer(target: number, data: BufferSource) {
        const gl = this.gl;
        const buffer = gl.createBuffer();
        gl.bindBuffer(target, buffer);
        gl.bufferData(target, data, gl.STATIC_DRAW);
        return this;
    }

    setAttribute(name: string, size: number, type: number, stride: number, offset: number) {
        const gl = this.gl;
        const attributeLocation = gl.getAttribLocation(this.gl.program, name);
        if (attributeLocation < 0) {
            throw (`Failed to get the storage locaition of ${name}`);
        }
        gl.vertexAttribPointer(attributeLocation, size, type, false, stride, offset);
        gl.enableVertexAttribArray(attributeLocation);
        return this;
    }

    setUniform(name: string, value: any, type: number) {
        const gl = this.gl;
        const uniformLocation = this.gl.getUniformLocation(gl.program, name)
        if (!uniformLocation) {
            throw (`Failed to get ${name}`);
        }
        switch (type) {
            case WebGLRenderingContext.FLOAT:
                gl.uniform1f(uniformLocation, value);
                break;
            case WebGLRenderingContext.FLOAT_MAT4:
                gl.uniformMatrix4fv(uniformLocation, false, value);
                break;
            case WebGLRenderingContext.INT:
                gl.uniform1i(uniformLocation, value);
                break;
            case WebGLRenderingContext.FLOAT_VEC3:
                gl.uniform3fv(uniformLocation, value);
                break;
            default:
                throw ('type of uniform error');
        }
        return this;
    }

    setUniformTexture(name: string, image: TexImageSource, format: number, params: { pname: number, param: number }[], unitIndex = 0) {
        const gl = this.gl;
        const texture = gl.createTexture();
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.activeTexture((gl as any)['TEXTURE' + unitIndex]);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        params.forEach(v => {
            gl.texParameteri(gl.TEXTURE_2D, v.pname, v.param);
        });
        gl.texImage2D(gl.TEXTURE_2D, 0, format, format, gl.UNSIGNED_BYTE, image);
        return this.setUniform(name, unitIndex, WebGLRenderingContext.INT);
    }

    setClearColor(r: number, g: number, b: number, a: number) {
        this.gl.clearColor(r, g, b, a);
        return this;
    }

    enable(cap: number) {
        this.gl.enable(cap);
        return this;
    }

    polygonOffset(factor: number, units: number) {
        this.gl.polygonOffset(factor, units)
        return this;
    }

    clear(mask: number) {
        this.gl.clear(mask);
        return this;
    }

    drawArrays(mode: number, first: number, count: number) {
        this.gl.drawArrays(mode, first, count);
        return this;
    }

    drawElements(mode: number, count: number, type: number, offset: number) {
        this.gl.drawElements(mode, count, type, offset);
        return this;
    }
}
