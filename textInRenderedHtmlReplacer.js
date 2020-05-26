function textNodesUnder(node){
    var all = [];
    for (node=node.firstChild;node;node=node.nextSibling){
        if (node.nodeType==3) all.push(node);
        else all = all.concat(textNodesUnder(node));
    }
    return all;
}

textNodes=textNodesUnder(document.body)
for (i in textNodes) { textNodes[i].nodeValue = textNodes[i].nodeValue.replace(/hello/g, 'hi') };
