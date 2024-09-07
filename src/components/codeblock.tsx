import React, {useEffect} from "react";

export interface CodeBlockProps {
    code: string;
  }
  
  export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    var HTML = "";
    useEffect(() => {
      const Prism = require('prismjs');
      require('prismjs/components/prism-swift');
      require('~/styles/custom-prism-theme.css');
  
      Prism.highlightAll();
    }, []);
  
    return (
      <pre>
        <code className="language-swift">{code}</code>
      </pre>
    );
  };
  
  export const CodeBlockCPP: React.FC<CodeBlockProps> = ({ code }) => {
      var HTML = "";
      useEffect(() => {
        const Prism = require('prismjs');
        require('prismjs/components/prism-c');
        require('~/styles/custom-prism-theme.css');
    
        Prism.highlightAll();
      }, []);
    
      return (
        <pre>
          <code className="language-c">{code}</code>
        </pre>
      );
    };
  
  export const CodeBlockBash: React.FC<CodeBlockProps> = ({ code }) => {
      var HTML = "";
      useEffect(() => {
        const Prism = require('prismjs');
        require('prismjs/components/prism-bash');
        require('~/styles/custom-prism-theme.css');
    
        Prism.highlightAll();
      }, []);
    
      return (
        <pre>
          <code className="language-bash">{code}</code>
        </pre>
      );
    };