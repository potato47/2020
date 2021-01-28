import 'alpinejs';
import * as monaco from 'monaco-editor';
import * as ts from 'typescript';
import * as uu from './engine/index';

// @ts-ignore
window.uu = uu;

// @ts-ignore
window.MonacoEnvironment = {
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


function updatePreview(scriptContent: string) {
    const iframe = document.getElementsByTagName('iframe')[0];
    const content = iframe.contentDocument || iframe.contentWindow?.document;
    if (!content) return;
    let value = `<script></script>`;
    value = value.replace(/(?<=<script>)[\s\S]*(?=<\/script>)/, 'window.uu = parent.uu;\n' + scriptContent).replace(/document./g, 'parent.document.');
    content.open();
    content.write(value);
    content.close();
}


function setupEditor(code: string, definitions: string) {
    const container = document.getElementById('editor');
    if (container) {
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES2015,
            allowNonTsExtensions: true
        });

        const libUri = 'ts:filename/uu.d.ts';
        monaco.languages.typescript.typescriptDefaults.addExtraLib(definitions, libUri);
        monaco.editor.createModel(definitions, 'typescript', monaco.Uri.parse(libUri));
        const monacoInstance = monaco.editor.create(container, {
            value: code,
            language: 'typescript',
            theme: 'vs-dark',
        });

        if (!monacoInstance) return;
        monacoInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
            updatePreview(ts.transpile(monacoInstance.getValue()));
        });
        updatePreview(ts.transpile(monacoInstance.getValue()));
        window.onresize = () => {
            monacoInstance.layout();
        };
    }
}

setupEditor(uu.defaultTemplate, uu.typings);
