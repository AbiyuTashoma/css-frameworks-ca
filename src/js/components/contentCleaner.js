function contentClean (jsonContent) {
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