"use client";

import React, {useEffect} from "react";
import Prism from "prismjs";
import "prismjs/components/prism-swift";
import "~/styles/custom-prism-theme.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-bash";

export interface CodeBlockProps {
    code: string;
  }
  
export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
  
    return (
      <pre>
        <code className="language-swift">{code}</code>
      </pre>
    );
};
  
  export const CodeBlockCPP: React.FC<CodeBlockProps> = ({ code }) => {
      useEffect(() => {
    
        Prism.highlightAll();
      }, []);
    
      return (
        <pre>
          <code className="language-c">{code}</code>
        </pre>
      );
    };
  
  export const CodeBlockBash: React.FC<CodeBlockProps> = ({ code }) => {
      useEffect(() => {
    
        Prism.highlightAll();
      }, []);
    
      return (
        <pre>
          <code className="language-bash">{code}</code>
        </pre>
      );
    };