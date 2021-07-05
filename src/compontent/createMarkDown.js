import { useEffect,useState } from "react";
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/rainbow.css';
import './index.less'
export default function Markdown({ content }) {
  const [html, setHtml] = useState();
  useEffect(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    setHtml(content ? marked(content) : null);
  }, [content]);

  return (
    <div className = {'content'}>
      <div
        id="content"
        dangerouslySetInnerHTML = {{__html: html }}
        className="article-detail">
      </div>
    </div>
  );
}