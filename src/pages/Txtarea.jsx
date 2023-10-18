import React, { useEffect, useRef, useState } from "react";
//import { basicSetup } from "@codemirror";
import { EditorState, Compartment } from "@codemirror/state";
import {
    EditorView, keymap,
    //GutterMarker,
    gutter, lineNumbers
} from "@codemirror/view";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands"
//import {cpp} from "@codemirror/lang-cpp";
import { syntaxHighlighting, defaultHighlightStyle } from "@codemirror/language"
import { cpp } from "@codemirror/lang-cpp";
import { linesAction } from "../actionTypes";

export default function TextArea(props) {
    const { dispatch,init } = props.data;
    const [editor, setEditor] = useState('');
    const [code, setCode] = useState(init);
    const editorRef = useRef();
    useEffect(() => {
        dispatch({ type: linesAction.LINE_UPDATE })
    }, [editor]);
    useEffect(() => {
        let tabSize = new Compartment()
        let updateListener = EditorView.updateListener.of((update) => {
            if (update.docChanged) {
                dispatch({ type: linesAction.LINE_UPDATE,payload:update.state.doc.text })
                setCode(update.state.doc.text)
            }
        });
        const state = EditorState.create({
            doc: code,
            extensions: [
                lineNumbers(), gutter({ class: "cm-mygutter" }),
                tabSize.of(EditorState.tabSize.of(2)),
                cpp(),
                syntaxHighlighting(defaultHighlightStyle),
                history(),
                keymap.of([...defaultKeymap, ...historyKeymap]),
                updateListener,
            ],
        });
        const editorView = new EditorView({ state, parent: editorRef.current });
        setEditor(editorView);
        return () => {
            editorView.destroy();
        };
    }, []);
    return (<>
        <div className='editor_wrapper' ref={editorRef}></div>
        {console.log(editor)}

    </>
    );
}
