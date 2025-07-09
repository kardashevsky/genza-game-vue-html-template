const buildUrl = "Build";

window.unityConfig = {
  loaderUrl: buildUrl + "/{{{ LOADER_FILENAME }}}",
  dataUrl: buildUrl + "/{{{ DATA_FILENAME }}}",
  frameworkUrl: buildUrl + "/{{{ FRAMEWORK_FILENAME }}}",
  codeUrl: buildUrl + "/{{{ CODE_FILENAME }}}",
#if MEMORY_FILENAME
  memoryUrl: buildUrl + "/{{{ MEMORY_FILENAME }}}",
#endif
#if SYMBOLS_FILENAME
  symbolsUrl: buildUrl + "/{{{ SYMBOLS_FILENAME }}}",
#endif
  streamingAssetsUrl: "StreamingAssets",
  companyName: "{{{ COMPANY_NAME }}}",
  productName: "{{{ PRODUCT_NAME }}}",
  productVersion: "{{{ PRODUCT_VERSION }}}",
  scaleToFit: {{{ SCALE_TO_FIT }}},
  scaling: {
    minRatioWidth: {{{ MIN_RATIO_WIDTH }}},
    minRatioHeight: {{{ MIN_RATIO_HEIGHT }}},
    maxRatioWidth: {{{ MAX_RATIO_WIDTH }}},
    maxRatioHeight: {{{ MAX_RATIO_HEIGHT }}},
  }
};
