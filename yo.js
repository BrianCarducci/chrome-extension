var users = ['xqcow', 'avoidingthepuddle'];

var categories = ['favz'];



var xpathExpression = "//div[contains(@aria-label, 'Followed Channels')]";

var xpathResult = new XPathEvaluator()
    .createExpression(xpathExpression)
    .evaluate(document, XPathResult.FIRST_ORDERED_NODE_TYPE)
    .singleNodeValue;

console.log(xpathResult);
