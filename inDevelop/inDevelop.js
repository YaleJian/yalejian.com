const developMode = true
let $inDevelop = $('.inDevelop')
const hideInDevelop = () => $inDevelop.slideUp('slow')
if (developMode) $inDevelop.css("display", "flex")