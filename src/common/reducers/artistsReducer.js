import staticData from '../staticData';

// State arguement is not application state, it retains its own state
export default (state = null, action) => {
  switch(action.type) {
    case 'QUERY_ARTIST':
    // DO: Error handling
    var artists = action.payload.data.artists;
    artists = artists.map((artist) => {
      return {
        id: artist.artistId,
        artistName: artist.artistName,
        imgSrc: 'http://iscale.iheart.com/catalog/artist/' + artist.artistId + '?ops=fit(250,0)'
      };
    })
    artists.sort(function(a, b) {

      var nameA = a.artistName.toUpperCase(); // ignore upper and lowercase
      nameA = nameA.split(' ');
      nameA = nameA[nameA.length-1];
      var nameB = b.artistName.toUpperCase(); // ignore upper and lowercase
      nameB = nameB.split(' ');
      nameB = nameB[nameB.length-1];
      console.log('nameA', nameA);
      console.log('nameB', nameB);
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
    console.log('artists', artists);
    // never mutate current state
    // NO: state.title = artist
    return artists;
  }
  return staticData.defaultArtists;
}
