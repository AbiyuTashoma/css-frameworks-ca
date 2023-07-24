/**
 * sanitizes json content, replaces undefined content with empty string
 * @param {json} jsonContent 
 * @returns json
 */
function contentClean(jsonContent) {
    for (let i = 0; i < jsonContent.length; i++) {

        const contentBody = jsonContent[i]['body'];
        const contentMedia = jsonContent[i]['media'];
        if (!contentBody) {
            jsonContent[i]['body'] = "";
        }
        if (!contentMedia) {
            jsonContent[i]['media'] = "";
        }
    }

    return jsonContent;
}