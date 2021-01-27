import 'alpinejs';
import * as monaco from 'monaco-editor';

// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        if (label === 'json') {
            return './json.worker.js';
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return './css.worker.js';
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return './html.worker.js';
        }
        if (label === 'typescript' || label === 'javascript') {
            return './ts.worker.js';
        }
        return './editor.worker.js';
    }
};


const source = `(() => {
    new uu.WebglEngine({
        vs: \`
            attribute vec4 aPosition;
            void main() {
                gl_Position = aPosition;
            }
        \`,
        fs: \`
            precision mediump float;
            uniform float uWidth;
            uniform float uHeight;
            void main() {
                gl_FragColor = vec4(gl_FragCoord.x / uWidth, 0.0, gl_FragCoord.y / uHeight, 1.0);
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
    ).setUniform(
        'uWidth', 400.0, WebGLRenderingContext.FLOAT
    ).setUniform(
        'uHeight', 400.0, WebGLRenderingContext.FLOAT
    ).setClearColor(
        0, 0, 0, 1
    ).clear(
        WebGLRenderingContext.COLOR_BUFFER_BIT
    ).drawArrays(
        WebGLRenderingContext.TRIANGLES, 0, 3
    );
})();
`;


function setupEditor(libSource: string) {
    const container = document.getElementById('editor');
    if (container) {
        // compiler options
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES2015,
            allowNonTsExtensions: true
        });

        const libUri = 'ts:filename/facts.d.ts';
        monaco.languages.typescript.typescriptDefaults.addExtraLib(libSource, libUri);
        // When resolving definitions and references, the editor will try to use created models.
        // Creating a model for the library allows "peek definition/references" commands to work with the library.
        monaco.editor.createModel(libSource, 'typescript', monaco.Uri.parse(libUri));
        const monacoInstance = monaco.editor.create(container, {
            value: source,
            language: 'typescript',
            theme: 'vs-dark',
        });

        if (!monacoInstance) return;
        // monacoInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
        //     updatePreview(ts.transpile(monacoInstance.getValue()));
        // });
        // updatePreview(ts.transpile(monacoInstance.getValue()));
        window.onresize = () => {
            monacoInstance.layout();
        };
        // (window as any)['monacoInstance'] = monacoInstance;
        // (window as any)['ts'].transpile(monacoInstance.getValue())
    }
}

setupEditor(`declare namespace uu {export function test(): void;}`);
