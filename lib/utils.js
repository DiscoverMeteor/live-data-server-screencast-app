sizeOf = function (object) {
  var objectList = [];
  var stack = [ object ];
  var bytes = 0;

  while ( stack.length ) {
      var value = stack.pop();

      if ( typeof value === 'boolean' ) {
          bytes += 4;
      }
      else if ( typeof value === 'string' ) {
          bytes += value.length * 2;
      }
      else if ( typeof value === 'number' ) {
          bytes += 8;
      }
      else if
      (
          typeof value === 'object'
          && objectList.indexOf( value ) === -1
      )
      {
          objectList.push( value );

          for( i in value ) {
              stack.push( value[ i ] );
          }
      }
  }

  return bytes;
}

seed = function () {
  Items.remove({});

  for (var i = 0; i < 5; i++) {
    Items.insert({
      order: i,
      version: "1",
      is_visible: true
    });
  }

  for (var j = 5; j < 10; j++) {
    Items.insert({
      order: j,
      version: "1",
      is_visible: false
    });
  }
};

