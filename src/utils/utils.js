/**
 * Returns a unique identifier
 *
 * @returns {String} uid
 */
exports.getUid = function() {
	return Date.now().toString( 36 ) + '-' + ( Math.random() * 10000000000000000000 ).toString( 36 );
};

/**
 * Calls <callback> once all <emitters> have emitted <event>
 * 
 * @param {Array} emitters Array of objects extending events.EventEmitter
 * @param {String} event
 * @param {Function} callback Will be called once every emitter has emitted the event
 * 
 * @public
 * @returns {void}
 */
exports.combineEvents = function( emitters, event, callback ) {
    var i,
        count = 0,
        increment = function() {
            count++;
            
            if( count === emitters.length ) {
                callback();
            }
        };
        
  for( i = 0; i < emitters.length; i++ ) {
      emitters[ i ].once( event, increment );
  }  
};

/**
 * Takes a key-value map and returns
 * a map with { value: key } of the old map
 * 
 * @param  {Object} map
 *
 * @public
 * @return {Object} reversed map
 */
exports.reverseMap = function( map ) {
  var reversedMap = {}, key;

  for( key in map ) {
    reversedMap[ map[ key ] ] = key;
  }

  return reversedMap;
};