module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "declaration-block-no-duplicate-properties": true,
    "no-duplicate-selectors": true,
    "property-no-unknown": true,
    "value-keyword-case": "lower",
    "selector-type-case": "lower",
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "unit-allowed-list": ["em", "rem", "px", "%", "s", "deg"]
  }
};
