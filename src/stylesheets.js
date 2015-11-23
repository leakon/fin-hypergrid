'use strict';

var cssInjector = require('css-injector');

var stylesheets = {
    grid: [
        'div#grid-container {',
        '    position: relative;',
        '    display: inline-block;',
        '    -webkit-user-select: none;',
        '    -moz-user-select: none;',
        '    -ms-user-select: none;',
        '    -o-user-select: none;',
        '    user-select: none;',
        '    overflow: hidden; }',
        'visible { opacity: 0.75; }',
        'hidden { opacity: 0.0; }',
        'editor {',
        '    position: absolute;',
        '    display: none;',
        '    border: solid 2px black;',
        '    outline: 0;',
        '    padding: 0;',
        '    z-index: 1000; }'
    ],
    dnd: [
        'div.dragon-list, li.dragon-pop {',
        '    font-family: Roboto, sans-serif;',
        '    text-transform: capitalize; }',
        'div.dragon-list {',
        '    position: absolute;',
        '    top: 4%;',
        '    left: 4%;',
        '    height: 92%;',
        '    width: 20%; }',
        'div.dragon-list:nth-child(2) { left: 28%; }',
        'div.dragon-list:nth-child(3) { left: 52%; }',
        'div.dragon-list:nth-child(4) { left: 76%; }',
        'div.dragon-list > div, div.dragon-list > ul > li, li.dragon-pop { line-height: 46px; }',
        'div.dragon-list > ul { top: 46px; }',
        'div.dragon-list > ul > li:not(:last-child)::before, li.dragon-pop::before {',
        '    content: \'\\2b24\';', // BLACK LARGE CIRCLE
        '    color: #b6b6b6;',
        '    font-size: 30px;',
        '    margin: 8px 14px 8px 8px; }',
        'li.dragon-pop { opacity:.8; }'
    ]
};

function addStylesheet(key, referenceElement) {
    cssInjector(stylesheets[key], key, referenceElement);
}

module.exports = addStylesheet;