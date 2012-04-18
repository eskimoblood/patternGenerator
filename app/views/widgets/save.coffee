class exports.Save 

    constructor: (@paper) ->
        $('#save').click(@save)

    save: => 
        svgString = @paper.toSVG()
        a = document.createElement('a')
        a.download = 'mySvg.svg'
        a.type = 'image/svg+xml'
        bb = new (window.BlobBuilder || WebKitBlobBuilder)
        bb.append(svgString)
        blob = bb.getBlob('image/svg+xml')
        a.href = (window.URL || webkitURL).createObjectURL(blob)
        a.click()
