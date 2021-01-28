export const typings = `declare namespace uu {
    export interface SuperGL extends WebGLRenderingContext {
        program: WebGLProgram;
    }
    export function initGL(options: {
        canvas: HTMLCanvasElement;
        vsSourcre: string;
        fsSource: string;
    }): SuperGL | null;
    export class WebglEngine {
        private gl;
        static loadTexture(src: string): Promise<HTMLImageElement>;
        static getCanvas(): HTMLCanvasElement;
        constructor(config: {
            vs: string;
            fs: string;
        });
        getGl(): SuperGL;
        setBuffer(target: number, data: BufferSource): this;
        setAttribute(name: string, size: number, type: number, stride: number, offset: number): this;
        setUniform(name: string, value: any, type: number): this;
        setUniformTexture(name: string, image: TexImageSource, format: number, params: {
            pname: number;
            param: number;
        }[], unitIndex?: number): this;
        setClearColor(r: number, g: number, b: number, a: number): this;
        enable(cap: number): this;
        polygonOffset(factor: number, units: number): this;
        clear(mask: number): this;
        drawArrays(mode: number, first: number, count: number): this;
        drawElements(mode: number, count: number, type: number, offset: number): this;
    }
    /**
     * This is a class treating 4x4 matrix.
     * This class contains the function that is equivalent to OpenGL matrix stack.
     * The matrix after conversion is calculated by multiplying a conversion matrix from the right.
     * The matrix is replaced by the calculated result.
     */
    export module Mat {
        /**
     * Constructor of Matrix4
     * If opt_src is specified, new matrix is initialized by opt_src.
     * Otherwise, new matrix is initialized by identity matrix.
     * @param opt_src source matrix(option)
     */
        class Matrix4 {
            elements: Float32Array;
            constructor(opt_src?: any);
            /**
             * Set the identity matrix.
             * @return this
             */
            setIdentity(): this;
            /**
             * Copy matrix.
             * @param src source matrix
             * @return this
             */
            set(src: Matrix4): this;
            multiply(other: Matrix4): this;
            /**
             * Multiply the matrix from the right.
             * @param other The multiply matrix
             * @return this
             */
            concat(other: Matrix4): this;
            /**
             * Multiply the three-dimensional vector.
             * @param pos  The multiply vector
             * @return The result of multiplication(Float32Array)
             */
            multiplyVector3(pos: Vector3): Vector3;
            /**
             * Multiply the four-dimensional vector.
             * @param pos  The multiply vector
             * @return The result of multiplication(Float32Array)
             */
            multiplyVector4(pos: Vector4): Vector4;
            /**
             * Transpose the matrix.
             * @return this
             */
            transpose(): this;
            /**
             * Calculate the inverse matrix of specified matrix, and set to this.
             * @param other The source matrix
             * @return this
             */
            setInverseOf(other: Matrix4): this;
            /**
             * Calculate the inverse matrix of this, and set to this.
             * @return this
             */
            invert(): this;
            /**
             * Set the orthographic projection matrix.
             * @param left The coordinate of the left of clipping plane.
             * @param right The coordinate of the right of clipping plane.
             * @param bottom The coordinate of the bottom of clipping plane.
             * @param top The coordinate of the top top clipping plane.
             * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
             * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
             * @return this
             */
            setOrtho(left: number, right: number, bottom: number, top: number, near: number, far: number): this;
            /**
             * Multiply the orthographic projection matrix from the right.
             * @param left The coordinate of the left of clipping plane.
             * @param right The coordinate of the right of clipping plane.
             * @param bottom The coordinate of the bottom of clipping plane.
             * @param top The coordinate of the top top clipping plane.
             * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
             * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
             * @return this
             */
            ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): this;
            /**
             * Set the perspective projection matrix.
             * @param left The coordinate of the left of clipping plane.
             * @param right The coordinate of the right of clipping plane.
             * @param bottom The coordinate of the bottom of clipping plane.
             * @param top The coordinate of the top top clipping plane.
             * @param near The distances to the nearer depth clipping plane. This value must be plus value.
             * @param far The distances to the farther depth clipping plane. This value must be plus value.
             * @return this
             */
            setFrustum(left: number, right: number, bottom: number, top: number, near: number, far: number): this;
            /**
             * Multiply the perspective projection matrix from the right.
             * @param left The coordinate of the left of clipping plane.
             * @param right The coordinate of the right of clipping plane.
             * @param bottom The coordinate of the bottom of clipping plane.
             * @param top The coordinate of the top top clipping plane.
             * @param near The distances to the nearer depth clipping plane. This value must be plus value.
             * @param far The distances to the farther depth clipping plane. This value must be plus value.
             * @return this
             */
            frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): this;
            /**
             * Set the perspective projection matrix by fovy and aspect.
             * @param fovy The angle between the upper and lower sides of the frustum.
             * @param aspect The aspect ratio of the frustum. (width/height)
             * @param near The distances to the nearer depth clipping plane. This value must be plus value.
             * @param far The distances to the farther depth clipping plane. This value must be plus value.
             * @return this
             */
            setPerspective(fovy: number, aspect: number, near: number, far: number): this;
            /**
             * Multiply the perspective projection matrix from the right.
             * @param fovy The angle between the upper and lower sides of the frustum.
             * @param aspect The aspect ratio of the frustum. (width/height)
             * @param near The distances to the nearer depth clipping plane. This value must be plus value.
             * @param far The distances to the farther depth clipping plane. This value must be plus value.
             * @return this
             */
            perspective(fovy: number, aspect: number, near: number, far: number): this;
            /**
             * Set the matrix for scaling.
             * @param x The scale factor along the X axis
             * @param y The scale factor along the Y axis
             * @param z The scale factor along the Z axis
             * @return this
             */
            setScale(x: number, y: number, z: number): this;
            /**
             * Multiply the matrix for scaling from the right.
             * @param x The scale factor along the X axis
             * @param y The scale factor along the Y axis
             * @param z The scale factor along the Z axis
             * @return this
             */
            scale(x: number, y: number, z: number): this;
            /**
             * Set the matrix for translation.
             * @param x The X value of a translation.
             * @param y The Y value of a translation.
             * @param z The Z value of a translation.
             * @return this
             */
            setTranslate(x: number, y: number, z: number): this;
            /**
             * Multiply the matrix for translation from the right.
             * @param x The X value of a translation.
             * @param y The Y value of a translation.
             * @param z The Z value of a translation.
             * @return this
             */
            translate(x: number, y: number, z: number): this;
            /**
             * Set the matrix for rotation.
             * The vector of rotation axis may not be normalized.
             * @param angle The angle of rotation (degrees)
             * @param x The X coordinate of vector of rotation axis.
             * @param y The Y coordinate of vector of rotation axis.
             * @param z The Z coordinate of vector of rotation axis.
             * @return this
             */
            setRotate(angle: number, x: number, y: number, z: number): this;
            /**
             * Multiply the matrix for rotation from the right.
             * The vector of rotation axis may not be normalized.
             * @param angle The angle of rotation (degrees)
             * @param x The X coordinate of vector of rotation axis.
             * @param y The Y coordinate of vector of rotation axis.
             * @param z The Z coordinate of vector of rotation axis.
             * @return this
             */
            rotate(angle: number, x: number, y: number, z: number): this;
            /**
             * Set the viewing matrix.
             * @param eyeX, eyeY, eyeZ The position of the eye point.
             * @param centerX, centerY, centerZ The position of the reference point.
             * @param upX, upY, upZ The direction of the up vector.
             * @return this
             */
            setLookAt(eyeX: number, eyeY: number, eyeZ: number, centerX: number, centerY: number, centerZ: number, upX: number, upY: number, upZ: number): this;
            /**
             * Multiply the viewing matrix from the right.
             * @param eyeX, eyeY, eyeZ The position of the eye point.
             * @param centerX, centerY, centerZ The position of the reference point.
             * @param upX, upY, upZ The direction of the up vector.
             * @return this
             */
            lookAt(eyeX: number, eyeY: number, eyeZ: number, centerX: number, centerY: number, centerZ: number, upX: number, upY: number, upZ: number): this;
            /**
             * Multiply the matrix for project vertex to plane from the right.
             * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
             * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
             * @return this
             */
            dropShadow(plane: number[], light: number[]): this;
            /**
             * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
             * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
             * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
             * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
             * @return this
             */
            dropShadowDirectionally(normX: number, normY: number, normZ: number, planeX: number, planeY: number, planeZ: number, lightX: number, lightY: number, lightZ: number): this;
        }
        /**
         * Constructor of Vector3
         * If opt_src is specified, new vector is initialized by opt_src.
         * @param opt_src source vector(option)
         */
        class Vector3 {
            elements: Float32Array;
            constructor(opt_src?: any);
            /**
             * Normalize.
             * @return this
             */
            normalize(): this;
        }
        /**
         * Constructor of Vector4
         * If opt_src is specified, new vector is initialized by opt_src.
         * @param opt_src source vector(option)
         */
        class Vector4 {
            elements: Float32Array;
            constructor(opt_src?: any);
        }
    }

}`;