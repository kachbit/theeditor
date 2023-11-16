function initTheme(monaco) { 
const theme = {

    "inherit": true,
    "base": "vs-dark",
    "colors": {
      "activityBar.activeBorder": "#ec775c",
      "activityBar.background": "#22272e",
      "activityBar.border": "#444c56",
      "activityBar.foreground": "#adbac7",
      "activityBar.inactiveForeground": "#768390",
      "activityBarBadge.background": "#316dca",
      "activityBarBadge.foreground": "#cdd9e5",
      "badge.background": "#316dca",
      "badge.foreground": "#cdd9e5",
      "breadcrumb.activeSelectionForeground": "#768390",
      "breadcrumb.focusForeground": "#adbac7",
      "breadcrumb.foreground": "#768390",
      "breadcrumbPicker.background": "#2d333b",
      "button.background": "#347d39",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#46954a",
      "button.secondaryBackground": "#3d444d",
      "button.secondaryForeground": "#adbac7",
      "button.secondaryHoverBackground": "#444c56",
      "checkbox.background": "#2d333b",
      "checkbox.border": "#444c56",
      "debugConsole.errorForeground": "#ff938a",
      "debugConsole.infoForeground": "#768390",
      "debugConsole.sourceForeground": "#daaa3f",
      "debugConsole.warningForeground": "#c69026",
      "debugConsoleInputIcon.foreground": "#b083f0",
      "debugIcon.breakpointForeground": "#e5534b",
      "debugTokenExpression.boolean": "#6bc46d",
      "debugTokenExpression.error": "#ff938a",
      "debugTokenExpression.name": "#6cb6ff",
      "debugTokenExpression.number": "#6bc46d",
      "debugTokenExpression.string": "#96d0ff",
      "debugTokenExpression.value": "#96d0ff",
      "debugToolBar.background": "#2d333b",
      "descriptionForeground": "#768390",
      "diffEditor.insertedLineBackground": "#347d3926",
      "diffEditor.insertedTextBackground": "#57ab5a4d",
      "diffEditor.removedLineBackground": "#c93c3726",
      "diffEditor.removedTextBackground": "#f470674d",
      "dropdown.background": "#2d333b",
      "dropdown.border": "#444c56",
      "dropdown.foreground": "#adbac7",
      "dropdown.listBackground": "#2d333b",
      "editor.background": "#22272e",
      "editor.findMatchBackground": "#966600",
      "editor.findMatchHighlightBackground": "#eac55f80",
      "editor.focusedStackFrameHighlightBackground": "#46954a66",
      "editor.foldBackground": "#636e7b1a",
      "editor.foreground": "#adbac7",
      "editor.lineHighlightBackground": "#636e7b1a",
      "editor.linkedEditingBackground": "#539bf512",
      "editor.selectionHighlightBackground": "#57ab5a40",
      "editor.stackFrameHighlightBackground": "#ae7c1466",
      "editor.wordHighlightBackground": "#636e7b80",
      "editor.wordHighlightBorder": "#636e7b99",
      "editor.wordHighlightStrongBackground": "#636e7b4d",
      "editor.wordHighlightStrongBorder": "#636e7b99",
      "editorBracketHighlight.foreground1": "#6cb6ff",
      "editorBracketHighlight.foreground2": "#6bc46d",
      "editorBracketHighlight.foreground3": "#daaa3f",
      "editorBracketHighlight.foreground4": "#ff938a",
      "editorBracketHighlight.foreground5": "#fc8dc7",
      "editorBracketHighlight.foreground6": "#dcbdfb",
      "editorBracketHighlight.unexpectedBracket.foreground": "#768390",
      "editorBracketMatch.background": "#57ab5a40",
      "editorBracketMatch.border": "#57ab5a99",
      "editorCursor.foreground": "#539bf5",
      "editorGroup.border": "#444c56",
      "editorGroupHeader.tabsBackground": "#1c2128",
      "editorGroupHeader.tabsBorder": "#444c56",
      "editorGutter.addedBackground": "#46954a66",
      "editorGutter.deletedBackground": "#e5534b66",
      "editorGutter.modifiedBackground": "#ae7c1466",
      "editorIndentGuide.activeBackground": "#adbac73d",
      "editorIndentGuide.background": "#adbac71f",
      "editorInlayHint.background": "#76839033",
      "editorInlayHint.foreground": "#768390",
      "editorInlayHint.typeBackground": "#76839033",
      "editorInlayHint.typeForeground": "#768390",
      "editorLineNumber.activeForeground": "#adbac7",
      "editorLineNumber.foreground": "#636e7b",
      "editorOverviewRuler.border": "#1c2128",
      "editorWhitespace.foreground": "#545d68",
      "editorWidget.background": "#2d333b",
      "errorForeground": "#e5534b",
      "focusBorder": "#316dca",
      "foreground": "#adbac7",
      "gitDecoration.addedResourceForeground": "#57ab5a",
      "gitDecoration.conflictingResourceForeground": "#cc6b2c",
      "gitDecoration.deletedResourceForeground": "#e5534b",
      "gitDecoration.ignoredResourceForeground": "#636e7b",
      "gitDecoration.modifiedResourceForeground": "#c69026",
      "gitDecoration.submoduleResourceForeground": "#768390",
      "gitDecoration.untrackedResourceForeground": "#57ab5a",
      "icon.foreground": "#768390",
      "input.background": "#22272e",
      "input.border": "#444c56",
      "input.foreground": "#adbac7",
      "input.placeholderForeground": "#636e7b",
      "keybindingLabel.foreground": "#adbac7",
      "list.activeSelectionBackground": "#636e7b66",
      "list.activeSelectionForeground": "#adbac7",
      "list.focusBackground": "#4184e426",
      "list.focusForeground": "#adbac7",
      "list.highlightForeground": "#539bf5",
      "list.hoverBackground": "#636e7b1a",
      "list.hoverForeground": "#adbac7",
      "list.inactiveFocusBackground": "#4184e426",
      "list.inactiveSelectionBackground": "#636e7b66",
      "list.inactiveSelectionForeground": "#adbac7",
      "minimapSlider.activeBackground": "#76839047",
      "minimapSlider.background": "#76839033",
      "minimapSlider.hoverBackground": "#7683903d",
      "notificationCenterHeader.background": "#2d333b",
      "notificationCenterHeader.foreground": "#768390",
      "notifications.background": "#2d333b",
      "notifications.border": "#444c56",
      "notifications.foreground": "#adbac7",
      "notificationsErrorIcon.foreground": "#e5534b",
      "notificationsInfoIcon.foreground": "#539bf5",
      "notificationsWarningIcon.foreground": "#c69026",
      "panel.background": "#1c2128",
      "panel.border": "#444c56",
      "panelInput.border": "#444c56",
      "panelTitle.activeBorder": "#ec775c",
      "panelTitle.activeForeground": "#adbac7",
      "panelTitle.inactiveForeground": "#768390",
      "peekViewEditor.background": "#636e7b1a",
      "peekViewEditor.matchHighlightBackground": "#ae7c1466",
      "peekViewResult.background": "#22272e",
      "peekViewResult.matchHighlightBackground": "#ae7c1466",
      "pickerGroup.border": "#444c56",
      "pickerGroup.foreground": "#768390",
      "progressBar.background": "#316dca",
      "quickInput.background": "#2d333b",
      "quickInput.foreground": "#adbac7",
      "scrollbar.shadow": "#545d6833",
      "scrollbarSlider.activeBackground": "#76839047",
      "scrollbarSlider.background": "#76839033",
      "scrollbarSlider.hoverBackground": "#7683903d",
      "settings.headerForeground": "#adbac7",
      "settings.modifiedItemIndicator": "#ae7c1466",
      "sideBar.background": "#1c2128",
      "sideBar.border": "#444c56",
      "sideBar.foreground": "#adbac7",
      "sideBarSectionHeader.background": "#1c2128",
      "sideBarSectionHeader.border": "#444c56",
      "sideBarSectionHeader.foreground": "#adbac7",
      "sideBarTitle.foreground": "#adbac7",
      "statusBar.background": "#22272e",
      "statusBar.border": "#444c56",
      "statusBar.debuggingBackground": "#c93c37",
      "statusBar.debuggingForeground": "#cdd9e5",
      "statusBar.focusBorder": "#316dca80",
      "statusBar.foreground": "#768390",
      "statusBar.noFolderBackground": "#22272e",
      "statusBarItem.activeBackground": "#adbac71f",
      "statusBarItem.focusBorder": "#316dca",
      "statusBarItem.hoverBackground": "#adbac714",
      "statusBarItem.prominentBackground": "#636e7b66",
      "statusBarItem.remoteBackground": "#444c56",
      "statusBarItem.remoteForeground": "#adbac7",
      "symbolIcon.arrayForeground": "#e0823d",
      "symbolIcon.booleanForeground": "#539bf5",
      "symbolIcon.classForeground": "#e0823d",
      "symbolIcon.colorForeground": "#6cb6ff",
      "symbolIcon.constructorForeground": "#dcbdfb",
      "symbolIcon.enumeratorForeground": "#e0823d",
      "symbolIcon.enumeratorMemberForeground": "#539bf5",
      "symbolIcon.eventForeground": "#636e7b",
      "symbolIcon.fieldForeground": "#e0823d",
      "symbolIcon.fileForeground": "#c69026",
      "symbolIcon.folderForeground": "#c69026",
      "symbolIcon.functionForeground": "#b083f0",
      "symbolIcon.interfaceForeground": "#e0823d",
      "symbolIcon.keyForeground": "#539bf5",
      "symbolIcon.keywordForeground": "#f47067",
      "symbolIcon.methodForeground": "#b083f0",
      "symbolIcon.moduleForeground": "#f47067",
      "symbolIcon.namespaceForeground": "#f47067",
      "symbolIcon.nullForeground": "#539bf5",
      "symbolIcon.numberForeground": "#57ab5a",
      "symbolIcon.objectForeground": "#e0823d",
      "symbolIcon.operatorForeground": "#6cb6ff",
      "symbolIcon.packageForeground": "#e0823d",
      "symbolIcon.propertyForeground": "#e0823d",
      "symbolIcon.referenceForeground": "#539bf5",
      "symbolIcon.snippetForeground": "#539bf5",
      "symbolIcon.stringForeground": "#6cb6ff",
      "symbolIcon.structForeground": "#e0823d",
      "symbolIcon.textForeground": "#6cb6ff",
      "symbolIcon.typeParameterForeground": "#6cb6ff",
      "symbolIcon.unitForeground": "#539bf5",
      "symbolIcon.variableForeground": "#e0823d",
      "tab.activeBackground": "#22272e",
      "tab.activeBorder": "#22272e",
      "tab.activeBorderTop": "#ec775c",
      "tab.activeForeground": "#adbac7",
      "tab.border": "#444c56",
      "tab.hoverBackground": "#22272e",
      "tab.inactiveBackground": "#1c2128",
      "tab.inactiveForeground": "#768390",
      "tab.unfocusedActiveBorder": "#22272e",
      "tab.unfocusedActiveBorderTop": "#444c56",
      "tab.unfocusedHoverBackground": "#636e7b1a",
      "terminal.ansiBlack": "#545d68",
      "terminal.ansiBlue": "#539bf5",
      "terminal.ansiBrightBlack": "#636e7b",
      "terminal.ansiBrightBlue": "#6cb6ff",
      "terminal.ansiBrightCyan": "#56d4dd",
      "terminal.ansiBrightGreen": "#6bc46d",
      "terminal.ansiBrightMagenta": "#dcbdfb",
      "terminal.ansiBrightRed": "#ff938a",
      "terminal.ansiBrightWhite": "#cdd9e5",
      "terminal.ansiBrightYellow": "#daaa3f",
      "terminal.ansiCyan": "#39c5cf",
      "terminal.ansiGreen": "#57ab5a",
      "terminal.ansiMagenta": "#b083f0",
      "terminal.ansiRed": "#f47067",
      "terminal.ansiWhite": "#909dab",
      "terminal.ansiYellow": "#c69026",
      "terminal.foreground": "#adbac7",
      "textBlockQuote.background": "#1c2128",
      "textBlockQuote.border": "#444c56",
      "textCodeBlock.background": "#636e7b66",
      "textLink.activeForeground": "#539bf5",
      "textLink.foreground": "#539bf5",
      "textPreformat.foreground": "#768390",
      "textSeparator.foreground": "#373e47",
      "titleBar.activeBackground": "#22272e",
      "titleBar.activeForeground": "#768390",
      "titleBar.border": "#444c56",
      "titleBar.inactiveBackground": "#1c2128",
      "titleBar.inactiveForeground": "#768390",
      "tree.indentGuidesStroke": "#373e47"
    },
    "rules": [
      {
        "foreground": "#768390",
        "token": "comment"
      },
      {
        "foreground": "#768390",
        "token": "punctuation.definition.comment"
      },
      {
        "foreground": "#768390",
        "token": "string.comment"
      },
      {
        "foreground": "#F47067",
        "token": "constant.other.placeholder"
      },
      {
        "foreground": "#F47067",
        "token": "constant.character"
      },
      {
        "foreground": "#6CB6FF",
        "token": "constant"
      },
      {
        "foreground": "#6CB6FF",
        "token": "entity.name.constant"
      },
      {
        "foreground": "#6CB6FF",
        "token": "variable.other.constant"
      },
      {
        "foreground": "#6CB6FF",
        "token": "variable.other.enummember"
      },
      {
        "foreground": "#6CB6FF",
        "token": "variable.language"
      },
      {
        "foreground": "#6CB6FF",
        "token": "entity"
      },
      {
        "foreground": "#F69D50",
        "token": "entity.name"
      },
      {
        "foreground": "#F69D50",
        "token": "meta.export.default"
      },
      {
        "foreground": "#F69D50",
        "token": "meta.definition.variable"
      },
      {
        "foreground": "#ADBAC7",
        "token": "variable.parameter.function"
      },
      {
        "foreground": "#ADBAC7",
        "token": "meta.jsx.children"
      },
      {
        "foreground": "#ADBAC7",
        "token": "meta.block"
      },
      {
        "foreground": "#ADBAC7",
        "token": "meta.tag.attributes"
      },
      {
        "foreground": "#ADBAC7",
        "token": "entity.name.constant"
      },
      {
        "foreground": "#ADBAC7",
        "token": "meta.object.member"
      },
      {
        "foreground": "#ADBAC7",
        "token": "meta.embedded.expression"
      },
      {
        "foreground": "#DCBDFB",
        "token": "entity.name.function"
      },
      {
        "foreground": "#8DDB8C",
        "token": "entity.name.tag"
      },
      {
        "foreground": "#8DDB8C",
        "token": "support.class.component"
      },
      {
        "foreground": "#F47067",
        "token": "keyword"
      },
      {
        "foreground": "#F47067",
        "token": "storage"
      },
      {
        "foreground": "#F47067",
        "token": "storage.type"
      },
      {
        "foreground": "#ADBAC7",
        "token": "storage.modifier.package"
      },
      {
        "foreground": "#ADBAC7",
        "token": "storage.modifier.import"
      },
      {
        "foreground": "#ADBAC7",
        "token": "storage.type.java"
      },
      {
        "foreground": "#96D0FF",
        "token": "string"
      },
      {
        "foreground": "#96D0FF",
        "token": "string punctuation.section.embedded source"
      },
      {
        "foreground": "#6CB6FF",
        "token": "support"
      },
      {
        "foreground": "#6CB6FF",
        "token": "meta.property-name"
      },
      {
        "foreground": "#F69D50",
        "token": "variable"
      },
      {
        "foreground": "#ADBAC7",
        "token": "variable.other"
      },
      {
        "foreground": "#FF938A",
        "fontStyle": "italic",
        "token": "invalid.broken"
      },
      {
        "foreground": "#FF938A",
        "fontStyle": "italic",
        "token": "invalid.deprecated"
      },
      {
        "foreground": "#FF938A",
        "fontStyle": "italic",
        "token": "invalid.illegal"
      },
      {
        "foreground": "#FF938A",
        "fontStyle": "italic",
        "token": "invalid.unimplemented"
      },
      {
        "foreground": "#CDD9E5",
        "background": "#F47067",
        "fontStyle": "italic underline",
        "token": "carriage-return"
      },
      {
        "foreground": "#FF938A",
        "token": "message.error"
      },
      {
        "foreground": "#6CB6FF",
        "token": "string variable"
      },
      {
        "foreground": "#96D0FF",
        "token": "source.regexp"
      },
      {
        "foreground": "#96D0FF",
        "token": "string.regexp"
      },
      {
        "foreground": "#96D0FF",
        "token": "string.regexp.character-class"
      },
      {
        "foreground": "#96D0FF",
        "token": "string.regexp constant.character.escape"
      },
      {
        "foreground": "#96D0FF",
        "token": "string.regexp source.ruby.embedded"
      },
      {
        "foreground": "#96D0FF",
        "token": "string.regexp string.regexp.arbitrary-repitition"
      },
      {
        "foreground": "#8DDB8C",
        "fontStyle": "bold",
        "token": "string.regexp constant.character.escape"
      },
      {
        "foreground": "#6CB6FF",
        "token": "support.constant"
      },
      {
        "foreground": "#6CB6FF",
        "token": "support.variable"
      },
      {
        "foreground": "#8DDB8C",
        "token": "support.type.property-name.json"
      },
      {
        "foreground": "#6CB6FF",
        "token": "meta.module-reference"
      },
      {
        "foreground": "#F69D50",
        "token": "punctuation.definition.list.begin.markdown"
      },
      {
        "foreground": "#6CB6FF",
        "fontStyle": "bold",
        "token": "markup.heading"
      },
      {
        "foreground": "#6CB6FF",
        "fontStyle": "bold",
        "token": "markup.heading entity.name"
      },
      {
        "foreground": "#8DDB8C",
        "token": "markup.quote"
      },
      {
        "foreground": "#ADBAC7",
        "fontStyle": "italic",
        "token": "markup.italic"
      },
      {
        "foreground": "#ADBAC7",
        "fontStyle": "bold",
        "token": "markup.bold"
      },
      {
        "fontStyle": "underline",
        "token": "markup.underline"
      },
      {
        "fontStyle": "strikethrough",
        "token": "markup.strikethrough"
      },
      {
        "foreground": "#6CB6FF",
        "token": "markup.inline.raw"
      },
      {
        "foreground": "#FF938A",
        "background": "#5D0F12",
        "token": "markup.deleted"
      },
      {
        "foreground": "#FF938A",
        "background": "#5D0F12",
        "token": "meta.diff.header.from-file"
      },
      {
        "foreground": "#FF938A",
        "background": "#5D0F12",
        "token": "punctuation.definition.deleted"
      },
      {
        "foreground": "#F47067",
        "token": "punctuation.section.embedded"
      },
      {
        "foreground": "#8DDB8C",
        "background": "#113417",
        "token": "markup.inserted"
      },
      {
        "foreground": "#8DDB8C",
        "background": "#113417",
        "token": "meta.diff.header.to-file"
      },
      {
        "foreground": "#8DDB8C",
        "background": "#113417",
        "token": "punctuation.definition.inserted"
      },
      {
        "foreground": "#F69D50",
        "background": "#682D0F",
        "token": "markup.changed"
      },
      {
        "foreground": "#F69D50",
        "background": "#682D0F",
        "token": "punctuation.definition.changed"
      },
      {
        "foreground": "#2D333B",
        "background": "#6CB6FF",
        "token": "markup.ignored"
      },
      {
        "foreground": "#2D333B",
        "background": "#6CB6FF",
        "token": "markup.untracked"
      },
      {
        "foreground": "#DCBDFB",
        "fontStyle": "bold",
        "token": "meta.diff.range"
      },
      {
        "foreground": "#6CB6FF",
        "token": "meta.diff.header"
      },
      {
        "foreground": "#6CB6FF",
        "fontStyle": "bold",
        "token": "meta.separator"
      },
      {
        "foreground": "#6CB6FF",
        "token": "meta.output"
      },
      {
        "foreground": "#768390",
        "token": "brackethighlighter.tag"
      },
      {
        "foreground": "#768390",
        "token": "brackethighlighter.curly"
      },
      {
        "foreground": "#768390",
        "token": "brackethighlighter.round"
      },
      {
        "foreground": "#768390",
        "token": "brackethighlighter.square"
      },
      {
        "foreground": "#768390",
        "token": "brackethighlighter.angle"
      },
      {
        "foreground": "#768390",
        "token": "brackethighlighter.quote"
      },
      {
        "foreground": "#FF938A",
        "token": "brackethighlighter.unmatched"
      },
      {
        "foreground": "#96D0FF",
        "token": "constant.other.reference.link"
      },
      {
        "foreground": "#96D0FF",
        "token": "string.other.link"
      },
      {
        "foreground": "#FFFFFF",
        "token": "ref.matchtext"
      },
      {
        "foreground": "#6796E6",
        "token": "token.info-token"
      },
      {
        "foreground": "#CD9731",
        "token": "token.warn-token"
      },
      {
        "foreground": "#F44747",
        "token": "token.error-token"
      },
      {
        "foreground": "#B267E6",
        "token": "token.debug-token"
      }
    ],
    "encodedTokensColors": []
};

monaco.editor.defineTheme('main', theme);
}