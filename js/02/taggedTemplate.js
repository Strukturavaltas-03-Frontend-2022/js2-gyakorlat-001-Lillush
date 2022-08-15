'use strict';

const taggedTemplate = (texts, ...values) => 
    texts.map((text, index) => 
        `${text && text !==  ' ' ? `<em>${text}</em>` : ''}${values[index] ? `<strong>${values[index]}</strong>` : ''}`
        ).join('');


export default taggedTemplate;

