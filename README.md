# Configurações VS CODE
Extensions Dracula, vscode-icons, Color Highlight, EditorConfig,ESLint, Prettier, Rocketseat ReactJS, Rocketseat React Native  
Instalar fonte Fira Code https://github.com/tonsky/FiraCode    
Logo após a instalação, configurar o settings do Visual Code CTRL + Shift + P e selecionar Open Setting Json, colar o conteudo abaixo:

```{
    "workbench.colorTheme": "Dracula",
    "editor.fontFamily": "Fira Code",
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "workbench.iconTheme": "vscode-icons",
    "editor.formatOnSave": true,
    "editor.rulers": [
        80,
        120
    ],
    "editor.tabSize": 2,
    "editor.renderLineHighlight": "gutter",
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "javascript.updateImportsOnFileMove.enabled": "never",
    "breadcrumbs.enabled": true,
    "editor.parameterHints.enabled": false,
    "prettier.eslintIntegration": true
}```


# Comandos úteis
Criar projeto node ```yarn -y```  
Adicionar express ```yarn add express```  

