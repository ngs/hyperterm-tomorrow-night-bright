// Tomorrow Night Bright Theme

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = '#eaeaea';
      action.config.backgroundColor = '#000000';
      action.config.cursorColor = '#424242';
      action.config.colors = [
        "#000000",
        "#d54e53",
        "#b9ca4a",
        "#e7c547",
        "#7aa6da",
        "#ba687b",
        "#70c0b1",
        "#2a2a2a",
        "#969896",
        "#d54e53",
        "#b9ca4a",
        "#e7c547",
        "#7aa6da",
        "#ba687b",
        "#70c0b1",
        "#ffffff",
        "#eaeaea"
      ];
      action.config.css = '.title_1i8co95 { color: #eaeaea !important }'
  }
  next(action)
}

